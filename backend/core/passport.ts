import passport from 'passport';
import {Strategy as LocalStrategy} from 'passport-local';
import {Strategy as JWTstrategy, ExtractJwt } from 'passport-jwt';
import {UserModel, UserModelInterface} from "../models/UserModel.js";
import {generateMD5} from "../utils/generateHash.js";

passport.use(
    new LocalStrategy(
    async (username, password, done): Promise<void> => {
        try {
           const user = await UserModel.findOne({$or: [{email: username}, {username}]}).exec();

           if (!user) {
               return done(null, false, {message: 'Неверный логин или пароль'})
           }

           if (!user.confirmed) {
               return done(null, false, {message: 'Активация аккаунта не выполнена'})
           }

            if (user.password === generateMD5(password + process.env.SECRET_KEY)) {
                return done(null, user)
            } else {
                return done(null, false, {message: 'Неверный логин или пароль'})
            }
        } catch (e) {
            done(e, false)
        }
    }
))

passport.use(
    new JWTstrategy(
        {
            secretOrKey: process.env.SECRET_KEY || '',
            jwtFromRequest: ExtractJwt.fromHeader('token')
        },
        async (payload: {user: UserModelInterface}, done): Promise<void> => {
            try {
                const user = await UserModel.findById(payload.user._id).exec()

                if (user) {
                    return done(null, payload.user)
                }

                done(null, false)
            } catch (e) {
                done(e, false)
            }
        }
    )
)

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