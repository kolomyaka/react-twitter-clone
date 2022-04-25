import { all } from 'redux-saga/effects';
import tagsSaga from './sagas/sagaTags';
import tweetsSaga from './sagas/sagaTweets';


// Создаем root сагу, в которой объединяем все саги и передаем в стор и там вызываем через run
export default function* rootSaga() {
    yield all([tweetsSaga(), tagsSaga()]);
}