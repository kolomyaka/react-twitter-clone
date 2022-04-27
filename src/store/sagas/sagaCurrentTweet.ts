import { call, put, takeEvery } from "redux-saga/effects";
import { tweetsApi } from "../../services/tweetsApi";


function* workGetCurrentTweetData(id: any): any {
    try {
        console.log(id);
        
    } catch (error) {
        
    }
}

function* currentTweetSaga() {
    yield takeEvery('currentTweetSlice/setCurrentTweet', workGetCurrentTweetData);
}

export default currentTweetSaga;