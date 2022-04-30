import express from 'express';
import { UserCtrl } from './controllers/UserController';

const app = express();

app.use(express.json());

app.get('/users', UserCtrl.index);
app.post('/users', UserCtrl.create);

app.listen(8888, (): void => {
    console.log('SERVER RUNNING!');
})
