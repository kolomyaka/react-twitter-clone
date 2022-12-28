import { body } from 'express-validator';

export const createTweetValidations = [
        body('text', 'Введите текст твита')
        .isString()
        .isLength({
            max: 280,
        }).withMessage('Максимальное длина твита 280'),
];