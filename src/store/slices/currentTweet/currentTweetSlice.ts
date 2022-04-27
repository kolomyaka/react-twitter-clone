import { Tweet } from './../Tweets/tweetSliceTypes';
import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { LoadingState } from "../Tweets/tweetSliceTypes";
import { CurrentTweetState } from "./currentTweetSliceTypes";


const initialState: CurrentTweetState = {
    data: undefined,
    loadingStatus: LoadingState.NEVER
}

export const currentTweetSlice = createSlice({
    name: 'currentTweetSlice',
    initialState, 
    reducers: {
        //  getCurrentTweetFetch(state) {
        //      state.loadingStatus = LoadingState.LOADING;
        //      state.data = undefined;
        //  },

        //  getCurrentTweetSuccess(state, action: PayloadAction<Tweet>) {
        //     state.data = action.payload;
        //     state.loadingStatus = LoadingState.LOADED;
        //  },
        //  getCurrentTweetError(state) {
        //      state.loadingStatus = LoadingState.ERROR;
        //  }
    }
})

// export const { getCurrentTweetFetch, getCurrentTweetSuccess, getCurrentTweetError} = currentTweetSlice.actions;

export default currentTweetSlice.reducer; 