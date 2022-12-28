import express from 'express';
import dotenv from 'dotenv';
import session from "express-session";
import { registerValidations } from './validations/register.js';
import {UserCtrl} from './controllers/UserController.js';
import {passport} from "./core/passport.js";
import './core/db.js'
import {UserModelInterface} from "./models/UserModel";

dotenv.config();

const app = express();
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
app.get('/users/me', passport.authenticate('jwt'), UserCtrl.getUserInfo);
app.get('/users/:id', UserCtrl.show);
app.delete('/users/:id', UserCtrl.delete);

// Authorize group
app.post('/auth/signup', registerValidations, UserCtrl.create);
app.get('/auth/verify',registerValidations, UserCtrl.verify)
app.post('/auth/signin', passport.authenticate('local'), UserCtrl.authorizeToken)


app.listen(process.env.PORT, (): void => {
    console.log(`SERVER RUNNING! PORT: ${process.env.PORT}`);
})
