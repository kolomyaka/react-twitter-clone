import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config()

mongoose.Promise = Promise;

mongoose.connect(`${process.env.MONGO_DB}` || 'mongodb+srv://Kolomyaka:Allstars21@cluster0.ypi5kjs.mongodb.net/test', {

});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

export { db, mongoose };
