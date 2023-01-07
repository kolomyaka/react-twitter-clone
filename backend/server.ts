import express from 'express';
import multer from 'multer';
import dotenv from 'dotenv';
import session from "express-session";
import { registerValidations } from './validations/register.js';
import {UserCtrl} from './controllers/UserController.js';
import {TweetsCtrl} from "./controllers/TweetsController.js";
import {passport} from "./core/passport.js";
import {createTweetValidations} from "./validations/createTweet.js";
import {UploadFileCtrl} from "./controllers/UploadFileController.js";
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
app.use(express.json());
app.use(passport.initialize())
app.use(passport.session());

// User group
app.get('/users', UserCtrl.index);
app.get('/users/me', passport.authenticate('jwt', {session: false}), UserCtrl.getUserInfo);
app.get('/users/:id', UserCtrl.show);
app.delete('/users/:id', UserCtrl.delete);

// Tweets group
app.get('/tweets', TweetsCtrl.index)
app.get('/tweets/:id', TweetsCtrl.show)
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

app.post('/upload', upload.single('avatar'), UploadFileCtrl.upload)

app.listen(process.env.PORT, (): void => {
    console.log(`SERVER RUNNING! PORT: ${process.env.PORT}`);
})
