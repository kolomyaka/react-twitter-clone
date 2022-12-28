import passport from 'passport';
import {Strategy as LocalStrategy} from 'passport-local';
import {Strategy as JWTstrategy, ExtractJwt } from 'passport-jwt';
import {UserModel, UserModelInterface} from "../models/UserModel.js";
import {generateMD5} from "../utils/generateHash.js";
import jwt from 'jsonwebtoken'

passport.use(
    new LocalStrategy(
    async (username, password, done): Promise<void> => {
        try {
           const user = await UserModel.findOne({$or: [{email: username}, {username}]}).exec();

           if (!user) {
               return done(null, false)
           }
            console.log(user)
           if (!user.confirmed) {
               throw new Error("Need activate account")
           }

            if (user.password === generateMD5(password + process.env.SECRET_KEY)) {
                return done(null, user)
            } else {
                return done(401, false)
            }
        } catch (e) {
            done(e, false)
        }
    }
))

passport.use(
    new JWTstrategy(
        {
            secretOrKey: process.env.SECRET_KEY || '123',
            jwtFromRequest: ExtractJwt.fromHeader('token')
        },
        async (payload: {user: UserModelInterface}, done) => {
            try {


                const user = await UserModel.findById(payload.user._id).exec()
                console.log(user)
                console.log(payload.user._id)
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