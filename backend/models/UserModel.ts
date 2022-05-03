import { model, Schema } from 'mongoose';

// Описываем схему
const UserSchema = new Schema({
    emai: {
        unique: true,
        required: true,
        type: String,
    },
    fullname: {
        required: true,
        type: String
    },
    username: {
        unique: true,
        required: true,
        type: String,
    },
    location: String,
    password: {
        required: true,
        type: String,
    },
    confirmed: {
      type: Boolean,
      default: false
    },
    confirmed_hash: {
        required: true,
        type: String
    },
    about: String,
    website: String,
});

export const UserModel = model('User', UserSchema);