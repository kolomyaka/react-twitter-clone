import { Tweet } from './../Tweets/tweetSliceTypes';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CurrentTweetState } from "./currentTweetSliceTypes";
import {LoadingState} from "../../../types";


const initialState: CurrentTweetState = {
    data: null,
    loadingStatus: LoadingState.NEVER,
    errorMessage: ''
}

export const currentTweetSlice = createSlice({
    name: 'currentTweetSlice',
    initialState,
    reducers: {
        setCurrentTweet(state, action) {
            state.loadingStatus = LoadingState.LOADING;
            state.data = null;
        },
        getCurrentTweetData(state, action: PayloadAction<Tweet>) {
            state.data = action.payload;
            state.loadingStatus = LoadingState.LOADED;
        },
        setCurrentTweetError(state) {
            state.loadingStatus = LoadingState.ERROR;
        },
        setCurrentTweetErrorMessage(state, action) {
            state.errorMessage = action.payload
        }
    }
})

export const { setCurrentTweet, getCurrentTweetData, setCurrentTweetError, setCurrentTweetErrorMessage } = currentTweetSlice.actions;

export default currentTweetSlice.reducer; 