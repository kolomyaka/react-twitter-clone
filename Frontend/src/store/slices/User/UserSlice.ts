import {UserState} from './UserSliceTypes'
import {LoadingState} from "../../../types";
import {createSlice} from "@reduxjs/toolkit";

const initialState:UserState = {
    data: undefined,
    status: LoadingState.NEVER,
    error_message: '',
}

export const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        setUserData(state, action) {
            state.data = action.payload
            state.error_message = ''
        },
        setUserLoadingState(state,action) {
            state.status = action.payload
        },
        setUserErrorMessage(state,action) {
            state.error_message = action.payload
        },
        fetchSignIn(state, action) {
            state.status = LoadingState.LOADING
        },
        fetchSignUp(state,action) {
            state.status = LoadingState.LOADING
        },
        fetchUserData(state) {
            state.status = LoadingState.LOADING
        }
    }
})

export const {setUserData, setUserLoadingState, fetchSignIn, setUserErrorMessage, fetchSignUp, fetchUserData} = userSlice.actions;

export default userSlice.reducer;