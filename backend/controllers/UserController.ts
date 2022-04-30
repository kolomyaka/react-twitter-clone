import express from 'express';
import { UserModel } from '../models/UserModel';

// Создаем контроллер для User
class UserController {
    // Метод для получения всех пользователей
    async index(_: any, res: express.Response): Promise<void> {
        try {
            const users = await UserModel.find({}).exec();

            res.json({
                status: 'success',
                data: users
            });


        } catch (error) {
            res.json({
                status: 'error',
                message: JSON.stringify(error)
            });
        }
    }
    // Метод для создания пользователя
    async create(req: express.Request, res: express.Response): Promise<void> {
        try {

        } catch (error) {

        }
    }
}

export const UserCtrl = new UserController();