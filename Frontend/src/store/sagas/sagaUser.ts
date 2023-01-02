import {call, put, takeEvery} from "redux-saga/effects";
import {authApi, ResponseUserData} from "../../services/authApi";
import {fetchSignIn, UserActionsType, UserState} from "../slices/User/UserSliceTypes";
import {setUserData, setUserErrorMessage, setUserLoadingState} from "../slices/User/UserSlice";
import {LoadingState} from "../../types";

function* fetchSignInRequest({payload}:fetchSignIn): Iterator<any> {
    try {
        // В случае вызова редюсера с авторизацией пользователя отрабатывает воркер с запросом
        const userData = yield call(authApi.signIn, payload);

        if (userData) {
            // В случае если получили данные от сервера добавляем в наш state
            yield put(setUserData(userData));
            window.localStorage.setItem('token', userData['token'])
        }

    } catch (error:any) {
        yield put(setUserLoadingState(LoadingState.ERROR));
        if (error) {yield put(setUserErrorMessage(error?.response.data.message))}
    }
}

function* userSaga() {
    yield takeEvery(UserActionsType.FETCH_SIGN_IN, fetchSignInRequest)
}

export default userSaga;