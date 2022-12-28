import passport from 'passport';
import {Strategy as LocalStrategy} from 'passport-local';
import {UserModel, UserModelInterface} from "../models/UserModel.js";
import {generateMD5} from "../utils/generateHash.js";

passport.use(
    new LocalStrategy(
    async (username, password, done): Promise<void> => {
        try {
           const user = await UserModel.findOne({$or: [{email: username}, {username}]}).exec();

           if (!user) {
               return done(null, false)
           }

            if (user.password === generateMD5(password + process.env.SECRET_KEY)) {
                console.log('here!')
                return done(null, user)
            } else {
                console.log('error :(')
                return done(null, false)
            }
        } catch (e) {
            done(e, false)
        }
    }
))

// @ts-ignore
passport.serializeUser((user:UserModelInterface, done): void => {
   done(null, user?._id)
});

passport.deserializeUser((id, done): void  => {
    UserModel.findById(id, (err: Error | null, user: UserModelInterface) => {
        done(err, user)
    })
});

export { passport };