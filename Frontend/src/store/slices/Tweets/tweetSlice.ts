import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Tweet, TweetContent, TweetsState} from "./tweetSliceTypes";
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
        getTweetsFetch(state, action: PayloadAction<string | undefined>) {
            state.loadingStatus = LoadingState.LOADING;
        },
        getTweetsSuccess(state, action: PayloadAction<Tweet[]>) {
            state.loadingStatus = LoadingState.LOADED;
            state.items = action.payload;
        },
        getTweetsError(state) {
            state.loadingStatus = LoadingState.ERROR;
        },
        setContentForNewTweet(state, action: PayloadAction<TweetContent>) {

        },
        addTweet(state, action: PayloadAction<Tweet>) {
            state.items = [action.payload, ...state.items]
            state.addTweetLoadingStatus = LoadingState.LOADED;
        },
        removeTweet(state, action: PayloadAction<Tweet>) {
            state.items = state.items.filter(item => item._id !== action.payload._id)
            state.loadingStatus = LoadingState.LOADED
        },
        setTweetLoadingState(state, action: PayloadAction<LoadingState>) {
            state.addTweetLoadingStatus = action.payload;
        },
        deleteTweetFetch(state, action) {
            state.loadingStatus = LoadingState.LOADING
        }
    }
})

export const { getTweetsFetch, getTweetsSuccess, getTweetsError, setContentForNewTweet, addTweet, setTweetLoadingState,deleteTweetFetch, removeTweet } = tweetsSlice.actions;

export default tweetsSlice.reducer;