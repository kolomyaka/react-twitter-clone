import { call, put, takeEvery } from 'redux-saga/effects'
import { tweetsApi } from '../../services/tweetsApi';


function* workGetTweetsFetch(): any {
    const data = yield call(tweetsApi.fetchTweets);
    console.log(data);
}

export function* tweetsSaga() {
    yield takeEvery('tweetsSlice/getTweetsFetch', workGetTweetsFetch);
}