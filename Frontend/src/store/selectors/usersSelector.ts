import {RootState} from "../store";
import {UserState} from "../slices/User/UserSliceTypes";
import {LoadingState} from "../../types";
import {UsersState} from "../slices/Users/UsersSliceTypes";

export const selectUsersState = (state: RootState): UsersState => state.users

export const selectUsersItems = (state: RootState): UsersState['data'] => selectUsersState(state).data

export const selectUsersStatus = (state:RootState): UsersState['status'] => selectUsersState(state).status