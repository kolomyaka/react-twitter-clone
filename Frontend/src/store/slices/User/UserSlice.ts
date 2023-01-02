import {UserState} from './UserSliceTypes'
import {LoadingState} from "../../../types";
import {createSlice} from "@reduxjs/toolkit";

const initialState:UserState = {
    data: undefined,
    token: '',
    status: LoadingState.NEVER
}

export const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        setUserData(state, action) {
            state.data = action.payload
            state.status = LoadingState.SUCCESS
        },
        setUserLoadingState(state,action) {
            state.status = action.payload
        },
        fetchSignIn(state, action) {

        }
    }
})

export const {setUserData, setUserLoadingState, fetchSignIn} = userSlice.actions;

export default userSlice.reducer;