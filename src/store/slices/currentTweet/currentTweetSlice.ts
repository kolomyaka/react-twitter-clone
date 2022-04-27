import { Tweet } from './../Tweets/tweetSliceTypes';
import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { LoadingState } from "../Tweets/tweetSliceTypes";
import { CurrentTweetState } from "./currentTweetSliceTypes";


const initialState: CurrentTweetState = {
    data: null,
    loadingStatus: LoadingState.NEVER
}

export const currentTweetSlice = createSlice({
    name: 'currentTweetSlice',
    initialState, 
    reducers: {
        setCurrentTweet(state) {
            state.loadingStatus = LoadingState.LOADING;
            state.data = null;
        },
        getCurrentTweetData(state, action: PayloadAction<Tweet>) {
            state.data = action.payload;
            state.loadingStatus = LoadingState.LOADED;
        },
        setCurrentTweetError(state) {
            state.loadingStatus = LoadingState.ERROR;
        }
    }
})

export const { setCurrentTweet, getCurrentTweetData, setCurrentTweetError } = currentTweetSlice.actions;

export default currentTweetSlice.reducer; 