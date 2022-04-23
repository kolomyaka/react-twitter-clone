import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoadingState, TweetsState } from "./tweetSliceTypes";



const initialState: TweetsState = {
    items: [],
    loadingStatus: LoadingState.NEVER
}

// Создание slice

export const tweetsSlice = createSlice({
    name: 'tweetsSlice',
    initialState,
    reducers: {
        getTweetsFetch(state) {
            state.loadingStatus = LoadingState.LOADING;
        },
        getTweetsSuccess(state, action) {
            state.loadingStatus = LoadingState.LOADED
            state.items = action.payload;
        },
        getTweetsError(state) {
            state.loadingStatus = LoadingState.ERROR
        }
    }
})

export const { getTweetsFetch, getTweetsSuccess, getTweetsError } = tweetsSlice.actions;

export default tweetsSlice.reducer;