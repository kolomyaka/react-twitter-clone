import {api} from "../core/axios";

export const UploadImage = async (image: any) => {
    const formData = new FormData()
    formData.append('image', image)

    const { data } = await api.post('upload', formData, {
        headers: {
            'Content-Type': "multipart/form-data"
        }
    })

    return data
}