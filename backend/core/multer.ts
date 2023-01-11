import multer from 'multer';

const fileFilter = (req: Express.Request, file: any, cb: any) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true)
    } else {
        //reject file
        cb({message: 'Неподдерживаемый тип файла'}, false)
    }
}


const storage = multer.memoryStorage()
const upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 },
    fileFilter: fileFilter
})

module.exports = upload;