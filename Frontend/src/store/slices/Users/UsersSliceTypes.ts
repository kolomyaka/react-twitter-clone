import {Action} from "redux";
import {LoadingState} from "../../../types";
import {LoginFormModalProps} from "../../../pages/SignIn/components/LoginModal";

export interface User {
    _id?: string
    email:string
    fullname:string
    username:string
    password:string
    confirmHash:string
    confirmed:boolean
    location?:string
    about?:string
    website?: string
}

export interface UsersState {
    data: User[] | undefined
    status: LoadingState
}

export enum UsersActionsType {
    FETCH_USERS = 'usersSlice/fetchUsers',
    SET_USERS = 'usersSlice/setUsers',
}


