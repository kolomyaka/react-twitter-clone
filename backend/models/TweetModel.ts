import pkg from 'mongoose';
import mongoose from "mongoose";
import {UserModelInterface} from "./UserModel.js";

const { model, Schema, Document } = pkg;


export interface TweetModelInterface extends mongoose.Document {
    id: string
    text: string
    user: UserModelInterface | string
}


// Описываем схему
const TweetSchema = new Schema({
    text: {
        required: true,
        type: String,
        maxLength: 280
    },
    user: {
        required: true,
        ref: "User",
        type: Schema.Types.ObjectId,
    },
    images: [{type: String}],

}, {
    timestamps: true
});



export const TweetModel = model<TweetModelInterface>('Tweet', TweetSchema);