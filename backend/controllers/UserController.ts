import express from 'express';
import { validationResult } from 'express-validator';
import {UserModel, UserModelDocumentInterface} from '../models/UserModel.js';
import { generateMD5 } from '../utils/generateHash.js';
import mongoose from 'mongoose';
import {sendActivationEmail} from "../core/mailer.js";
import jwt from "jsonwebtoken";
const isValidObjectId = mongoose.Types.ObjectId.isValid;
import dotenv from "dotenv";
dotenv.config()

// Создаем контроллер для User
class UserController {
    // Метод для получения всех пользователей
    async index(_: any, res: express.Response): Promise<void> {
        try {

            const users = await UserModel.find({}).exec();
            res.json({
                status: 200,
                data: users
            });
        } catch (error) {
            res.json({
                status: 500,
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
                status: 200,
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
                status: 200,
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
                status: 200,
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
                confirmHash: generateMD5(process.env.SECRET_KEY + Math.random().toString())
            };
            // Создаем нового пользователя
            const user = await UserModel.create(data);
            console.log(process.env.API_URL)
            await sendActivationEmail(data.email, `${process.env.API_URL}/auth/verify/?hash=${data.confirmHash}`)

            res.json({
                status: 200,
                data: user
            });

        } catch (error) {
            res.json({
                status: 500,
                message: JSON.stringify(error),
            });
        }
    }

    async verify(req: express.Request, res: express.Response): Promise<void> {
        try {
            const hash = req.query.hash;

            if (!hash) {
                res.status(400).send()
                return;
            }
            // Ищем пользователя по хешу, который передан в запросе
            const user = await UserModel.findOne({confirmHash: hash}).exec()

            if (user) {
                console.log(user)
                // Если находим, то активируем аккаунт
                user.confirmed = true
                user.save()

                res.json({
                    status: 200,
                    data: user
                })
            } else {
                res.status(400).json({status: 'error', message: "Пользователь не найден"})
            }
        } catch (e) {
            res.status(500).json({
                status: 500,
                message: e
            })
        }
    }

    async authorizeToken(req: express.Request, res: express.Response): Promise<void> {
        try {
            // В ответ на запрос отдаем токен пользователя
            res.json({
                status: 200,
                data: {
                    message: `Выполнен вход в аккаунт ${req.body.username}`,
                    token: jwt.sign({user: req.user},
                        process.env.SECRET_KEY || '123',
                        {expiresIn: '30 days'})
                }
            })
        } catch (e) {
            res.status(500).json({
                status: 500,
                message: e
            })
        }
    }

    async getUserInfo(req: express.Request, res: express.Response): Promise<void> {
        try {
            res.json({
                status: 200,
                data: {
                    ...req.user
                }
            })
        } catch (e) {
            res.status(500).json({
                status: 500,
                message: e
            })
        }
    }
}

export const UserCtrl = new UserController();
