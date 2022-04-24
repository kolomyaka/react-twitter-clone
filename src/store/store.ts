import { configureStore, combineReducers } from '@reduxjs/toolkit';
import tweetsSliceReducer from './slices/Tweets/tweetSlice'
import createSagaMiddleware from 'redux-saga';
import tweetsSaga from './sagas/sagaTweets';


const rootReducer = combineReducers({
    tweets: tweetsSliceReducer
})

const saga = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    middleware: [saga]
})

saga.run(tweetsSaga);

// Состояние rootState
export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];