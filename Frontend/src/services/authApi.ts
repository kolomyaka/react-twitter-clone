import axios from 'axios';
import {LoginFormModalProps} from "../pages/SignIn/components/LoginModal";

interface ResponseApi {
    status: number
    data: any
}

export const authApi = {
    async signIn(postData: LoginFormModalProps): Promise<ResponseApi> {
        return await axios.post<ResponseApi>('/auth/signin', {username: postData.email})
    }
}