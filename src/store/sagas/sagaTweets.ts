import { call, put, takeEvery } from 'redux-saga/effects'
import { tweetsApi } from '../../services/tweetsApi';


function* workGetTweetsFetch() {
    const data = yield call(tweetsApi.fetchTweets);
}

export function* tweetsSaga() {
    yield takeEvery('tweetsSlice/getTweetsFetch', workGetTweetsFetch);
}