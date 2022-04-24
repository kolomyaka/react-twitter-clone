import { call, put, takeEvery } from 'redux-saga/effects'
import { tweetsApi } from '../../services/tweetsApi';
import { getTweetsSuccess } from '../slices/Tweets/tweetSlice'

function* workGetTweetsFetch(): any {
    console.log('hello');
    
    const data = yield call(tweetsApi.fetchTweets);

    console.log(data);
    yield put(getTweetsSuccess(data));
}

function* tweetsSaga() {
    yield takeEvery('tweetsSlice/getTweetsFetch', workGetTweetsFetch);
}

export default tweetsSaga;