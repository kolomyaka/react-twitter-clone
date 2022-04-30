import express from 'express';
import { validationResult } from 'express-validator';
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
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                res.status(400).json({ status: 'error', errors: errors.array() })
                return;
            }
            // Создаем объект для создания нового пользователя
            const data = {
                email: req.body.email,
                username: req.body.username,
                fullname: req.body.fullname,
                password: req.body.password,
            };
            // Создаем нового пользователя
            const user = await UserModel.create(data);

            res.json({
                status: 'success',
                data: user
            });

        } catch (error) {
            res.json({
                status: 'error',
                message: JSON.stringify(error),
            });
        }
    }
}

export const UserCtrl = new UserController();
