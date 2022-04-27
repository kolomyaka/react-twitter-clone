import { call, put, takeEvery } from "redux-saga/effects";
import { tweetsApi } from "../../services/tweetsApi";
import { getCurrentTweetData, setCurrentTweetError } from "../slices/currentTweet/currentTweetSlice";
import { setCurrentTweetAction } from "../slices/currentTweet/currentTweetSliceTypes";



function* workGetCurrentTweetData({ payload }: setCurrentTweetAction): Iterator<any> {
    try {
        console.log(payload);
        const data = yield call(tweetsApi.fetchCurrentTweet, payload);
        if (data) {
            yield put(getCurrentTweetData(data[0]));
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