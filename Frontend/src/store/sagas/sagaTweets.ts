import { call, put, takeEvery } from 'redux-saga/effects'
import { tweetsApi } from '../../services/tweetsApi';
import {
    getTweetsError,
    getTweetsSuccess,
    addTweet,
    setTweetLoadingState,
    getTweetsFetch, removeTweet
} from '../slices/Tweets/tweetSlice'
import {deleteTweetAction, getTweetsFetchAction, postNewTweetAction, Tweet} from '../slices/Tweets/tweetSliceTypes';
import {LoadingState} from "../../types";

function* workGetTweetsFetch({payload: userId}: getTweetsFetchAction): Iterator<any> {
    try {
        const data = yield call(tweetsApi.fetchTweets, userId);
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

function* addTweetRequest({ payload }: postNewTweetAction): Iterator<any> {
    try {
        console.log(payload, 'saga')
        // Полученный твит отправляем запросом на сервер
        const data = yield call(tweetsApi.addTweet, payload);
        if (data) {
            // В случае если получили данные от сервера добавляем в наш state
            yield put(addTweet(data));
        }
    } catch (error: any) {
        console.log(error.response);
        yield put(setTweetLoadingState(LoadingState.ERROR));
    }
}

function* deleteTweet({ payload: id }: deleteTweetAction): Iterator<any> {
    try {
        // Полученный твит отправляем запросом на сервер
        const data = yield call(tweetsApi.deleteTweet, id);
        if (data) {
            yield put(removeTweet(data));
        }

    } catch (error) {
        console.log(error);
        yield put(setTweetLoadingState(LoadingState.ERROR));
    }
}

function* tweetsSaga() {
    yield takeEvery('tweetsSlice/getTweetsFetch', workGetTweetsFetch);
    yield takeEvery('tweetsSlice/setContentForNewTweet', addTweetRequest);
    yield takeEvery('tweetsSlice/deleteTweetFetch', deleteTweet);
}

export default tweetsSaga;