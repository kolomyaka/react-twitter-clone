import { call, put, takeEvery } from "redux-saga/effects";
import { tweetsApi } from "../../services/tweetsApi";
// import { getCurrentTweetError, getCurrentTweetSuccess } from "../slices/currentTweet/currentTweetSlice";

function* workGetCurrentTweet(): any {
// try {
//     console.log('hello');
    
//     const data = yield call(tweetsApi.fetchCurrentTweet, '6265b16dbc894e19029b6325')
//     yield put(getCurrentTweetSuccess(data));
// } catch (error) {
//     console.log(error);
    
//     yield put(getCurrentTweetError());
// }
}

function* currentTweetSaga() {
    // yield takeEvery('currentTweetSlice/getCurrentTweetFetch', workGetCurrentTweet);
}

export default currentTweetSaga;