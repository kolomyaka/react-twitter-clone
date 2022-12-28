import express from 'express';
import dotenv from "dotenv";
import {TweetModel, TweetModelInterface} from "../models/TweetModel.js";
import {isValidObjectId} from "../utils/isValidObjectId.js";
import {validationResult} from "express-validator";
import {UserModelInterface} from "../models/UserModel";
dotenv.config()

// Создаем контроллер для Tweet
class TweetsController {
    // Метод для получения всех твитов
    async index(_: any, res: express.Response): Promise<void> {
        try {
            const tweets = await TweetModel.find({}).exec()

            res.json({
                status: 200,
                data: tweets
            })
        } catch (error) {
            res.json({
                status: 500,
                message: JSON.stringify(error)
            });
        }
    }

    // Метод для получения твита
    async show(req: express.Request, res: express.Response): Promise<void> {
        try {
            const tweetId = req.params.id

            if (!tweetId) {
                res.status(404).json({
                    status: 404,
                    message: "Не удалось получить ID твита"
                })
            }

            if (!isValidObjectId(tweetId)) {
                res.status(404).json({
                    status: 404,
                    message: "Неверный ID"
                })
            }

            const tweets = await TweetModel.findById(tweetId).exec()

            res.json({
                status: 200,
                data: tweets
            })
        } catch (error) {
            res.json({
                status: 500,
                message: JSON.stringify(error)
            });
        }
    }

    // Метод для удаления твита
    async delete(req: express.Request, res: express.Response): Promise<void> {
        try {
            const tweetId = req.params.id

            if (!tweetId) {
                res.status(404).json({
                    status: 404,
                    message: "Не удалось получить ID твита"
                })
                return;
            }

            if (!isValidObjectId(tweetId)) {
                res.status(404).json({
                    status: 404,
                    message: "Неверный ID"
                })
                return;
            }

            const tweet = await TweetModel.findByIdAndDelete(tweetId).exec()

            res.status(200).json({
                status: 200,
                data: tweet
            })
        } catch (e) {
            res.json({
                status: 500,
                data: e
            })
        }
    }

    // Метод для создания твита
    async create(req: express.Request, res: express.Response): Promise<void> {
        try {
            const user = req.user as UserModelInterface

            if (user) {
                const errors = validationResult(req)

                if (!errors.isEmpty()) {
                    res.status(404).json({ status: 404, errors: errors.array() })
                    return;
                }

                if (!user._id || !isValidObjectId(user._id)) {
                    res.status(404).json({
                        status: 404,
                        message: "Неверный ID"
                    })
                    return;
                }

                const data: { text: string; user: string } = {
                    text: req.body.text,
                    user: user._id
                }

                const tweet = await TweetModel.create(data)

                res.json({
                    status: 200,
                    data: tweet
                })
            }

        } catch (error) {
            res.json({
                status: 500,
                message: JSON.stringify(error),
            });
        }
    }


}

export const TweetsCtrl = new TweetsController();
