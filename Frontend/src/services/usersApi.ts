import {api} from '../core/axios';
import {User} from "../store/slices/User/UserSliceTypes";

interface ResponseApi {
    status: number
    data: User[]
}


export const usersApi = {
    async fetchUsers(): Promise<User[]> {
        const {data} = await api.get<ResponseApi>('/users/')
        console.log(data)
        return data.data
    },

}
