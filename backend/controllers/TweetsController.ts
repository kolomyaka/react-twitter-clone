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
            const tweets = await TweetModel.find({}).populate('user').sort({'createdAt': -1}).exec()

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

            const tweets = await TweetModel.findById(tweetId).populate('user').exec()

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
        const user = req.user as UserModelInterface

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

            const tweet = await TweetModel.findById(tweetId)
            if (tweet) {
                if ((tweet.user as UserModelInterface)._id?.toString() === user._id) {
                    tweet.remove()
                    res.status(200).json({
                        status: 200,
                        data: tweet
                    })
                }
            } else {

                res.status(404).json({
                    status: 404,
                    message: 'Произошла ошибка удаления твита'
                })
            }
        } catch (e) {
            res.json({
                status: 500,
                data: e
            })
        }
    }

    // Метод для редактирования твита
    async update(req: express.Request, res: express.Response): Promise<void> {
        const user = req.user as UserModelInterface

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

            const tweet = await TweetModel.findById(tweetId)

            if (tweet) {
                if ((tweet.user as UserModelInterface)._id?.toString() === user._id) {
                    tweet.text = req.body.text
                    tweet.save()
                    res.status(200).json({
                        status: 200,
                        data: tweet
                    })
                } else {
                    res.status(403).json({
                        status: 403,
                        message: 'Вы не владелец этого твита'
                    })
                }
            } else {
                res.status(404).json({
                    status: 404,
                    message: 'Произошла ошибка редактирования твита'
                })
            }
        } catch (e) {
            res.status(500).json({
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

                const data: { text: string; user: string, images: string[] }= {
                    text: req.body.text,
                    images: req.body.url,
                    user: user._id
                }


                const tweet = await TweetModel.create(data)

                if (user.tweets) {
                    user.tweets.push(tweet._id)
                }

                res.json({
                    status: 200,
                    data: await tweet.populate('user')
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
