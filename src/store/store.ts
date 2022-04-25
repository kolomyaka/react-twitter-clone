import { configureStore, combineReducers } from '@reduxjs/toolkit';
import tweetsSliceReducer from './slices/Tweets/tweetSlice';
import tagsSliceReducer from './slices/Tags/tagsSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';


const rootReducer = combineReducers({
    tweets: tweetsSliceReducer,
    tags: tagsSliceReducer,
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