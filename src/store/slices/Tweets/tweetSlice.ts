import { createSlice } from "@reduxjs/toolkit";
import { LoadingState, TweetsState } from "./tweetSliceTypes";



const initialState: TweetsState = {
    items: [],
    loadingStatus: LoadingState.NEVER
}

// Создание slice

export const tweetsSlice = createSlice({
    name: 'tweetsSlice',
    initialState,
    reducers: {}
})

export default tweetsSlice.reducer;