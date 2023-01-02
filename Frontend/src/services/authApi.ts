import {api} from '../core/axios';
import {LoginFormModalProps} from "../pages/SignIn/components/LoginModal";
import {User} from "../store/slices/User/UserSliceTypes";

interface ResponseApi {
    status: number
    data: ResponseUserData
}

export type ResponseUserData = {
    data: User
    token: string
}

export const authApi = {
    async signIn(postData: LoginFormModalProps): Promise<ResponseUserData> {
        const {data} = await api.post<ResponseApi>('/auth/signin', {username: postData.email, password: postData.password})
        return data.data
    },
    async getMe(): Promise<ResponseApi> {
        const {data} = await api.get<ResponseApi>('/users/me')
        return data
    }
}