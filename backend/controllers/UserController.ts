import express from 'express';
import { validationResult } from 'express-validator';
import { UserModel } from '../models/UserModel.js';
import { generateMD5 } from '../utils/generateHash.js';
import mongoose from 'mongoose';
import {sendActivationEmail} from "../core/mailer.js";
const isValidObjectId = mongoose.Types.ObjectId.isValid;

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

    // Метод для получения пользователя
    async show(req: express.Request, res: express.Response): Promise<void> {
        try {
            const  userId  = req.params.id

            if (!userId) {
                res.status(400).json({status: 'error', message: 'Не удается получить ID пользователя'})
                return;
            }

            if (!isValidObjectId(userId)) {
                res.status(400).json({status: 'error', message: 'Неверный ID'})
            }

            const user = await UserModel.findById(userId).exec()

            res.json({
                status: 'success',
                data: user
            });
        } catch (e) {

        }
    }

    // Метод для удаления пользователя
    async delete(req: express.Request, res: express.Response): Promise<void> {
        try {
            const  userId  = req.params.id

            if (!userId) {
                res.status(400).json({status: 'error', message: 'Не удается получить ID пользователя'})
                return;
            }

            if (!isValidObjectId(userId)) {
                res.status(400).json({status: 'error', message: 'Неверный ID'})
                return;
            }

            const user = await UserModel.findByIdAndDelete(userId).exec()
            res.json({
                status: 'success',
                data: user
            });
        } catch (e) {

        }
    }

    // Метод для изменения данных пользователя
    async update(req: express.Request, res: express.Response): Promise<void> {
        try {
            const  userId  = req.params.id

            if (!userId) {
                res.status(400).json({status: 'error', message: 'Не удается получить ID пользователя'})
                return;
            }

            const user = await UserModel.findByIdAndDelete(userId).exec()
            res.json({
                status: 'success',
                data: user
            });
        } catch (e) {

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
                password: generateMD5(req.body.password + process.env.SECRET_KEY),
                confirmHash: generateMD5(process.env.SECRET_KEY || Math.random().toString())
            };
            // Создаем нового пользователя
            const user = await UserModel.create(data);
            await sendActivationEmail(data.email, 'asdasd')

            res.json({
                status: 'success',
                data: user
            });

        } catch (error) {
            console.log(error)
            res.json({
                status: 'error',
                message: JSON.stringify(error),
            });
        }
    }
}

export const UserCtrl = new UserController();
