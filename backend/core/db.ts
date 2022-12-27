import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config()

mongoose.Promise = Promise;

mongoose.connect(`${process.env.MONGO_DB}` || 'mongodb://127.0.0.1:27014/twitter', {
    
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

export { db, mongoose };