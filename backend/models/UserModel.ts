import pkg from 'mongoose';
import mongoose from "mongoose";
import {TweetModelInterface} from "./TweetModel";
const { model, Schema, Document } = pkg;

export interface UserModelInterface extends mongoose.Document {
    _id?: string
    email:string
    fullname:string
    username:string
    password:string
    confirmHash:string
    confirmed:boolean
    location?:string
    about?:string
    website?: string,
    tweets: string[]
};

// Описываем схему
const UserSchema = new Schema({
    email: {
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
    password: {
        required: true,
        type: String,
    },
    confirmHash: {
        required: true,
        type: String,
    },
    confirmed: {
        type: Boolean,
        default: false
    },
    location: String,
    about: String,
    website: String,
    tweets: [{
            type: Schema.Types.ObjectId,
            ref: 'Tweet'
    }]
}, {
    timestamps: true
});

UserSchema.set('toJSON', {
    transform: function(_, obj) {
        delete obj.password
        delete obj.confirmHash
        return obj
    }
})

export const UserModel = model<UserModelInterface>('User', UserSchema);