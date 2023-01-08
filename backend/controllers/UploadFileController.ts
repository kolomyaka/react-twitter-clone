import express from "express";
import cloudinary from '../core/cloudinary.js'
import path from "path";

class UploadFileController {
    async upload(req: express.Request, res: express.Response): Promise<void> {

        const files = req.files
        if (!files) {
            res.status(404).json({
                status: 404,
                message: "Ошибка сохранения файла. Попробуйте снова 1"
            })
            return;
        }

        // @ts-ignore
        files.forEach(file => {
            cloudinary.uploader.upload_stream(
                {resource_type: 'auto'}, (error, result) => {
                    console.log(error, result)
                    if (error || !result) {
                        return res.status(500).json({
                            status: 500,
                            message: error || 'Ошибка сохранения файла. Попробуйте снова 2'
                        })
                    }
                    res.status(201).json({
                        status: 201,
                        data: {
                            url: result.url,
                            size: Math.floor(result.bytes / 1024),
                            height: result.height,
                            width: result.width
                        }
                    })
                })
                .end(file.buffer)
        })
    }
}

export const UploadFileCtrl = new UploadFileController()