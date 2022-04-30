import express from 'express';
import { UserCtrl } from './controllers/UserController';
import { registerValidations } from './validations/register';

const app = express();

app.use(express.json());

app.get('/users', UserCtrl.index);
app.post('/users', registerValidations, UserCtrl.create);

app.listen(8888, (): void => {
    console.log('SERVER RUNNING!');
})
