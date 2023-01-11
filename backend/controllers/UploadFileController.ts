import express from "express";
import cloudinary, {uploads} from '../core/cloudinary.js'
import path from "path";

class UploadFileController {
    async upload(req: express.Request, res: express.Response): Promise<void> {
        const uploader = async (path:string) => await uploads(path, 'Avatars');

        const urls = []
        const files = req.files;

        if (!files) {
            res.status(404).json({
                status: 404,
                message: "Ошибка сохранения файла. Не удалось получить файл в запросе"
            })
            return;
        }

        // @ts-ignore
        for (let file of files) {
            const { buffer } = file;
            const fileUrl = await uploader(buffer)
            urls.push(fileUrl)
        }

        res.status(201).json({
            status: 201,
            data: urls
        })

    }
}

export const UploadFileCtrl = new UploadFileController()