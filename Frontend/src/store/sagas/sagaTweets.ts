import { call, put, takeEvery } from 'redux-saga/effects'
import { tweetsApi } from '../../services/tweetsApi';
import { getTweetsError, getTweetsSuccess, addTweet, setTweetLoadingState } from '../slices/Tweets/tweetSlice'
import { postNewTweetAction, Tweet} from '../slices/Tweets/tweetSliceTypes';
import {LoadingState} from "../../types";

function* workGetTweetsFetch(): Iterator<any> {
    try {
        const data = yield call(tweetsApi.fetchTweets);
        // Сохраняем данные полученные от сервера в slice
        if (data) {
            yield put(getTweetsSuccess(data));
        }
    } catch (error) {
        console.log(error);
        // Выводим ошибку в консоль, а так же уведовляем наш slice об ошибке
        yield put(getTweetsError())
    }
}

function* addTweetRequest({ payload: text }: postNewTweetAction): Iterator<any> {
    try {
        // Полученный твит отправляем запросом на сервер
        const data = yield call(tweetsApi.addTweet, text);
        if (data) {
            // В случае если получили данные от сервера добавляем в наш state
            yield put(addTweet(data));
        }
    } catch (error) {
        console.log(error);
        yield put(setTweetLoadingState(LoadingState.ERROR));
    }
}

function* tweetsSaga() {
    yield takeEvery('tweetsSlice/getTweetsFetch', workGetTweetsFetch);
    yield takeEvery('tweetsSlice/setTextForNewTweet', addTweetRequest);
}

export default tweetsSaga;