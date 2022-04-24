import { call, put, takeEvery } from 'redux-saga/effects'
import { tweetsApi } from '../../services/tweetsApi';
import { getTweetsError, getTweetsSuccess } from '../slices/Tweets/tweetSlice'

function* workGetTweetsFetch(): any {
    try {
        const data = yield call(tweetsApi.fetchTweets);
        // Сохраняем данные полученные от сервера в slice
        yield put(getTweetsSuccess(data));
    } catch (error) {
        console.log(error);
        // Выводим ошибку в консоль, а так же уведовляем наш slice об ошибке
        yield put(getTweetsError())
    }

}

function* tweetsSaga() {
    yield takeEvery('tweetsSlice/getTweetsFetch', workGetTweetsFetch);
}

export default tweetsSaga;