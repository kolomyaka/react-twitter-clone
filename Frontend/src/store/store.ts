import { configureStore, combineReducers } from '@reduxjs/toolkit';
import tweetsSliceReducer from './slices/Tweets/tweetSlice';
import tagsSliceReducer from './slices/Tags/tagsSlice';
import userSliceReducer from './slices/User/UserSlice'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
import currentTweetSliceReducer from './slices/currentTweet/currentTweetSlice';

const rootReducer = combineReducers({
    tweets: tweetsSliceReducer,
    tags: tagsSliceReducer,
    currentTweet: currentTweetSliceReducer,
    user: userSliceReducer
})

const saga = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    middleware: [saga]
})

saga.run(rootSaga);

// Состояние rootState
export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];