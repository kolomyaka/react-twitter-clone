import { call, put, takeEvery } from 'redux-saga/effects'
import { tweetsApi } from '../../services/tweetsApi';
import { getTweetsError, getTweetsSuccess, addTweet } from '../slices/Tweets/tweetSlice'
import { postNewTweetAction } from '../slices/Tweets/tweetSliceTypes';

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

function* addTweetRequest({ payload }: postNewTweetAction): Iterator<any> {
    try {
        // Создаем наш твит и заполняем его данными (Временно)
        const tweetData = {
            _id: Math.random().toString(36).substring(2),
            text: payload,
            user: {
                fullname: 'test user',
                username: 'test',
                avatarUrl: `https://i.pravatar.cc/45?u=$4`
            }
        }
        // Полученный твит отправляем запросов на сервер
        const data = yield call(tweetsApi.addTweet, tweetData);
        if (data) {
            // В случае если получили данные от сервера добавляем в наш state
            yield put(addTweet(data));
        }
    } catch (error) {
        console.log(error);
    }
}

function* tweetsSaga() {
    yield takeEvery('tweetsSlice/getTweetsFetch', workGetTweetsFetch);
    yield takeEvery('tweetsSlice/setTextForNewTweet', addTweetRequest);
}

export default tweetsSaga;