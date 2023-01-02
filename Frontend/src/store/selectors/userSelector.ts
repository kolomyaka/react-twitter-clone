import {RootState} from "../store";
import {UserState} from "../slices/User/UserSliceTypes";
import {LoadingState} from "../../types";

export const selectUserState = (state: RootState): UserState => state.user

export const selectUserData = (state: RootState): UserState['data'] => selectUserState(state).data

export const selectUserStatus = (state:RootState): UserState['status'] => selectUserState(state).status;