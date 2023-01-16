import {Action} from "redux";
import {LoadingState} from "../../../types";
import {LoginFormModalProps} from "../../../pages/SignIn/components/LoginModal";
import {RegisterFormModalProps} from "../../../pages/SignIn/components/RegisterModal";

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

export interface UserState {
    data: User | undefined
    status: LoadingState
    error_message: string
}

export enum UserActionsType {
    SET_USER_DATA = 'userSlice/setUserData',
    SET_LOADING_STATE = 'userSlice/setUserLoadingState',
    FETCH_SIGN_IN = 'userSlice/fetchSignIn',
    FETCH_SIGN_UP = 'userSlice/fetchSignUp',
    FETCH_USER_DATA = 'userSlice/fetchUserData',
    CONFIRM_USER = 'userSlice/confirmUser'
}

export interface SetUserActionInterface extends Action<UserActionsType> {
    type: UserActionsType.SET_USER_DATA,
    payload: User
}

export interface SetLoadingStateActionInterface extends Action<UserActionsType> {
    type: UserActionsType.SET_LOADING_STATE,
    payload: LoadingState
}

export interface fetchSignIn extends Action<UserActionsType> {
    type: UserActionsType.FETCH_SIGN_IN
    payload: LoginFormModalProps
}

export interface fetchConfirm extends Action<UserActionsType> {
    type: UserActionsType.CONFIRM_USER
    payload: string
}

export interface fetchSignUp extends Action<UserActionsType> {
    type: UserActionsType.FETCH_SIGN_UP
    payload: RegisterFormModalProps
}

