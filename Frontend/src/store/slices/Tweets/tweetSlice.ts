import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoadingState, Tweet, TweetsState, AddTweetLoadingState } from "./tweetSliceTypes";



const initialState: TweetsState = {
    items: [],
    loadingStatus: LoadingState.NEVER,
    addTweetLoadingStatus: AddTweetLoadingState.NEVER,
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
            state.addTweetLoadingStatus = AddTweetLoadingState.LOADING;
        },
        addTweet(state, action: PayloadAction<Tweet>) {
            state.items = [action.payload, ...state.items]
            state.addTweetLoadingStatus = AddTweetLoadingState.LOADED;
        },
        setTweetLoadingState(state, action: PayloadAction<AddTweetLoadingState>) {
            state.addTweetLoadingStatus = action.payload;
        }
    }
})

export const { getTweetsFetch, getTweetsSuccess, getTweetsError, setTextForNewTweet, addTweet, setTweetLoadingState } = tweetsSlice.actions;

export default tweetsSlice.reducer;