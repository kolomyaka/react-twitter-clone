import express from 'express';
import { registerValidations } from './validations/register.js';
import './core/db.js'
import {UserCtrl} from './controllers/UserController.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());

app.get('/users', UserCtrl.index);
app.post('/users', registerValidations, UserCtrl.create);
// app.patch('/users', UserCtrl.update);
// app.delete('/users/:id', UserCtrl.delete);

app.listen(process.env.PORT, (): void => {
    console.log(`SERVER RUNNING! PORT: ${process.env.PORT}`);
})
