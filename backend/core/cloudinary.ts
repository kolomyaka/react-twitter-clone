import { v2 as cloudinary } from 'cloudinary'

if (!process.env.CLOUDINARY_NAME) {
    throw new Error('Отсутствует конфигурация для Cloudinary')
}

// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY
});

export default cloudinary