import {api} from '../core/axios';
import {LoginFormModalProps} from "../pages/SignIn/components/LoginModal";
import {User} from "../store/slices/User/UserSliceTypes";
import {RegisterFormModalProps} from "../pages/SignIn/components/RegisterModal";

interface ResponseApi<T> {
    status: number
    data: T
}

export type ResponseUserData = {
    data: User
    token: string
}

export const authApi = {
    async signIn(postData: LoginFormModalProps): Promise<ResponseUserData> {
        const {data} = await api.post<ResponseApi<ResponseUserData>>('/auth/signin', postData)
        return data.data
    },
    async signUp(postData: RegisterFormModalProps): Promise<ResponseUserData> {
        const {data} = await api.post<ResponseApi<ResponseUserData>>('/auth/signup', postData)
        return data.data
    },
    async getMe(): Promise<ResponseApi<any>> {
        const {data} = await api.get<ResponseApi<any>>('/users/me')
        return data.data
    },
    async confirmUser(hash: string): Promise<Boolean> {
        const {data} = await api.get<ResponseApi<User>>(`/auth/verify/?hash=${hash}`)
        return data.data.confirmed
    }
}
