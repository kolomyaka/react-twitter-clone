import {api} from '../core/axios';
import {User} from "../store/slices/User/UserSliceTypes";

interface ResponseApi<T> {
    status: number
    data: T
}


export const usersApi = {
    async fetchUsers(): Promise<User[]> {
        const {data} = await api.get<ResponseApi<User[]>>('/users/')
        return data.data
    },
    async getUserInfo(userId: string | undefined): Promise<User> {
        const {data} = await api.get<ResponseApi<User>>(`/users/${userId}`)
        return data.data
    }

}
