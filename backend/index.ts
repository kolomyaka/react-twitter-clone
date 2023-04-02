import express from 'express';
import multer from 'multer';
import dotenv from 'dotenv';
import session from "express-session";
import cors from 'cors'

import {registerValidations} from './validations/register.js';
import {UserCtrl} from './controllers/UserController.js';
import {TweetsCtrl} from "./controllers/TweetsController.js";
import {passport} from "./core/passport.js";
import {createTweetValidations} from "./validations/createTweet.js";
import {UploadFileCtrl} from "./controllers/UploadFileController.js";
import {corsOpts} from "./core/corsOptions.js";
import './core/db.js'

dotenv.config();

const app = express();
const storage = multer.memoryStorage()
const upload = multer({storage})
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true }
}));
app.use(cors(corsOpts));
app.use(express.json());
app.use(passport.initialize())
app.use(passport.session());

function authenticateJwt(req: Express.Request, res:Express.Response, next: any) {
    passport.authenticate('jwt', function(err, user, info) {
        if (err) return next(err);
        if (!user) {
            return next()
        };
        req.user = user;
        next();
    })(req, res, next);
}

app.get('/', (_req: express.Request, res: express.Response) => {
    return res.send('Express Typescript on Vercel')
})


// User group
app.get('/users', passport.authenticate('jwt'), UserCtrl.index);
app.get('/users/me', authenticateJwt, UserCtrl.getUserInfo);
app.get('/users/:id', UserCtrl.show);
app.delete('/users/:id', UserCtrl.delete);

// Tweets group
app.get('/tweets',passport.authenticate('jwt'), TweetsCtrl.index)
app.get('/tweets/:id', TweetsCtrl.show)
app.get('/tweets/user/:id', TweetsCtrl.getUserTweets)
app.delete('/tweets/:id', passport.authenticate('jwt'), TweetsCtrl.delete)
app.patch('/tweets/:id', passport.authenticate('jwt'), createTweetValidations, TweetsCtrl.update)
app.post('/tweets', passport.authenticate('jwt'), createTweetValidations, TweetsCtrl.create)

// Authorize group
app.post('/auth/signup', registerValidations, UserCtrl.create);
app.get('/auth/verify', UserCtrl.verify)
app.post('/auth/signin', (req, res, next) => {
    passport.authenticate('local', (err, user,info) => {
        if (err) {
            return next(err)
        }

        if (info) {
            res.status(404).json({
                status: 404,
                message: info.message
            })
            return;
        }

        UserCtrl.authorizeToken(req,res, user)

    })(req,res,next)
})

app.post('/upload', upload.array('images', 4), UploadFileCtrl.upload)

app.listen(process.env.PORT, (): void => {
    console.log(`SERVER RUNNING! PORT: ${process.env.PORT}`);
})
