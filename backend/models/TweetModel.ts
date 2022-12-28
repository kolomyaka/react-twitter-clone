import pkg from 'mongoose';
import mongoose from "mongoose";

const { model, Schema, Document } = pkg;


export interface TweetModelInterface extends mongoose.Document {
    id: string
    text: string
    user: string | undefined
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
});



export const TweetModel = model<TweetModelInterface>('Tweet', TweetSchema);