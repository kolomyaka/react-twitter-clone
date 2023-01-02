import {UsersState} from './UsersSliceTypes'
import {LoadingState} from "../../../types";
import {createSlice} from "@reduxjs/toolkit";

const initialState:UsersState = {
    data: undefined,
    status: LoadingState.NEVER,
}

export const usersSlice = createSlice({
    name: "usersSlice",
    initialState,
    reducers: {
        fetchUsers(state) {
            state.status = LoadingState.LOADING
        },
        setUsers(state, action) {
            state.status = LoadingState.SUCCESS
            state.data = action.payload
        },
        setUsersLoadingState(state, action) {
            state.status = action.payload
        }
    }
})

export const {fetchUsers, setUsers, setUsersLoadingState} = usersSlice.actions;

export default usersSlice.reducer;