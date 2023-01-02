import { all } from 'redux-saga/effects';
import currentTweetSaga from './sagas/sagaCurrentTweet';
import tagsSaga from './sagas/sagaTags';
import tweetsSaga from './sagas/sagaTweets';
import userSaga from "./sagas/sagaUser";
import usersSaga from "./sagas/sagaUsers";


// Создаем root сагу, в которой объединяем все саги и передаем в стор и там вызываем через run
export default function* rootSaga() {
    yield all([tweetsSaga(), tagsSaga(), currentTweetSaga(), userSaga(), usersSaga()]);
}