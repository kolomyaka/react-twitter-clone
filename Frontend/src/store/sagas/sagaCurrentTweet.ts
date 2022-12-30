import { call, put, takeEvery } from "redux-saga/effects";
import { tweetsApi } from "../../services/tweetsApi";
import { getCurrentTweetData, setCurrentTweetError } from "../slices/currentTweet/currentTweetSlice";
import { setCurrentTweetAction } from "../slices/currentTweet/currentTweetSliceTypes";
import {Tweet} from "../slices/Tweets/tweetSliceTypes";



function* workGetCurrentTweetData({ payload }: setCurrentTweetAction): Iterator<any> {
    try {
        const data = yield call(tweetsApi.fetchCurrentTweet, payload);
        if (data) {
            yield put(getCurrentTweetData(data));
        }


    } catch (error) {
        console.log(error);
        yield put(setCurrentTweetError());
    }
}

function* currentTweetSaga() {
    yield takeEvery('currentTweetSlice/setCurrentTweet', workGetCurrentTweetData);
}

export default currentTweetSaga;