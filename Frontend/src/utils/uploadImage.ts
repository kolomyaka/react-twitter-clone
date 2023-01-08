import {api} from "../core/axios";
import {ImageObj} from "../components/AddTweetForm";

export const UploadImage = async (images: ImageObj[]) => {
    const formData = new FormData()

    images.forEach(image => {
        console.log(image.file)
        formData.append('images', image.file);
    });

    const { data } = await api.post('/upload', formData, {
        headers: {
            'Content-Type': "multipart/form-data"
        }
    })

    return data
}