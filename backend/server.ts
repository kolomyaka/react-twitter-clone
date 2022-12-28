import express from 'express';
import dotenv from 'dotenv';
import session from "express-session";
import { registerValidations } from './validations/register.js';
import {UserCtrl} from './controllers/UserController.js';
import {passport} from "./core/passport.js";
import './core/db.js'
import {log} from "util";

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
app.get('/users', UserCtrl.index);
app.get('/users/:id', UserCtrl.show);
app.delete('/users/:id', UserCtrl.delete);

app.post('/auth/signup', registerValidations, UserCtrl.create);
// app.get('/auth/verify',registerValidations, UserCtrl.verify)
app.post('/auth/signin',
    passport.authenticate('local'),
    (req, res) => {
        res.json(req.user)
    }
);

// app.patch('/users', UserCtrl.update);
//



app.listen(process.env.PORT, (): void => {
    console.log(`SERVER RUNNING! PORT: ${process.env.PORT}`);
})
