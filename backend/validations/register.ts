import validator from 'express-validator';

export const registerValidations = [
    validator
        .body('email', 'Введите E-Mail')
        .isEmail().withMessage('Неверный E-Mail')
        .isLength({
            min: 10,
            max: 40
        }).withMessage('Допустимое кол-во символов от 10 до 40.'),
    validator
        .body('fullname', 'Введите имя')
        .isString()
        .isLength({
            min: 2,
            max: 40,
        }).withMessage('Допустимое кол-во символов в имени от 2 до 40.'),
    validator
        .body('username', 'Введите логин')
        .isString()
        .isLength({
            min: 2,
            max: 40,
        }).withMessage('Допустимое кол-во символов в логине от 2 до 40.'),
    validator
        .body('password', 'Введите пароль')
        .isString()
        .isLength({
            min: 6,
        }).withMessage('Минимальная длина пароля 6 символов.'),
];