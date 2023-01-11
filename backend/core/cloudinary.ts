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



export const uploads = (file: string, folder: string) => {
    return new Promise((resolve,reject) => {
        cloudinary.uploader.upload_stream({resource_type: 'auto'}, (error, result) => {
            if (error || !result) {
                return reject({
                    status: 500,
                    message: error || 'Ошибка сохранения файла. Попробуйте снова'
                })
            }
            resolve(result.url)
        }).end(file)
    })
}

export default cloudinary