import {RootState} from "../store";
import {UserState} from "../slices/User/UserSliceTypes";
import {LoadingState} from "../../types";
import {selectUsersState} from "./usersSelector";

export const selectUserState = (state: RootState): UserState => state.user

export const selectUserData = (state: RootState): UserState['data'] => selectUserState(state).data

export const selectIsAuth = (state:RootState): boolean => !!selectUserState(state).data?.confirmed

export const selectUserErrorMessage = (state:RootState): UserState['error_message'] => selectUserState(state).error_message

export const selectUserStatus = (state:RootState): UserState['status'] => selectUserState(state).status;