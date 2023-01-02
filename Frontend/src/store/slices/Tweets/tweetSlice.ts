import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Tweet, TweetsState } from "./tweetSliceTypes";
import {LoadingState} from "../../../types";



const initialState: TweetsState = {
    items: [],
    loadingStatus: LoadingState.NEVER,
    addTweetLoadingStatus: LoadingState.NEVER,
}

// Создание slice

export const tweetsSlice = createSlice({
    name: 'tweetsSlice',
    initialState,
    reducers: {
        getTweetsFetch(state) {
            state.loadingStatus = LoadingState.LOADING;
        },
        getTweetsSuccess(state, action: PayloadAction<Tweet[]>) {
            state.loadingStatus = LoadingState.LOADED;
            state.items = action.payload;
        },
        getTweetsError(state) {
            state.loadingStatus = LoadingState.ERROR;
        },
        setTextForNewTweet(state, action: PayloadAction<string>) {
            state.addTweetLoadingStatus = LoadingState.LOADING;
        },
        addTweet(state, action: PayloadAction<Tweet>) {
            state.items = [action.payload, ...state.items]
            state.addTweetLoadingStatus = LoadingState.LOADED;
        },
        setTweetLoadingState(state, action: PayloadAction<LoadingState>) {
            state.addTweetLoadingStatus = action.payload;
        }
    }
})

export const { getTweetsFetch, getTweetsSuccess, getTweetsError, setTextForNewTweet, addTweet, setTweetLoadingState } = tweetsSlice.actions;

export default tweetsSlice.reducer;