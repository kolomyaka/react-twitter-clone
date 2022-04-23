import { configureStore, combineReducers } from '@reduxjs/toolkit';
import tweetsSliceReducer from './slices/Tweets/tweetSlice'


const rootReducer = combineReducers({
    tweetsSliceReducer
})

export const store = configureStore({
    reducer: rootReducer,

}) 