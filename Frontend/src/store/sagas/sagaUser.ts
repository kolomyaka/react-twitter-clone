import {call, put, takeEvery} from "redux-saga/effects";
import {authApi} from "../../services/authApi";
import {fetchConfirm, fetchSignIn, fetchSignUp, UserActionsType} from "../slices/User/UserSliceTypes";
import {setUserData, setUserErrorMessage, setUserLoadingState} from "../slices/User/UserSlice";
import {LoadingState} from "../../types";

function* fetchSignInRequest({payload}:fetchSignIn): Iterator<any> {
    try {
        // В случае вызова редюсера с авторизацией пользователя отрабатывает воркер с запросом
        const userData = yield call(authApi.signIn, payload);

        if (userData) {
            // В случае если получили данные от сервера добавляем в наш state
            yield put(setUserData(userData['user']));
            yield put(setUserLoadingState('SUCCESS'))
            window.localStorage.setItem('token', userData['token'])
        }

    } catch (error:any) {
        yield put(setUserLoadingState(LoadingState.ERROR));
        if (error) {yield put(setUserErrorMessage(error?.response.data.message))}
    }
}

function* fetchSignUpRequest({payload}:fetchSignUp): Iterator<any> {
    try {
        // В случае вызова редюсера с авторизацией пользователя отрабатывает воркер с запросом
        const userData = yield call(authApi.signUp, payload);

        if (userData) {
            // В случае если получили данные от сервера добавляем в наш state
            yield put(setUserData(userData));
            yield put(setUserLoadingState('LOADED'))
        }

    } catch (error:any) {
        yield put(setUserLoadingState(LoadingState.ERROR));
        if (error) {yield put(setUserErrorMessage(error.response.data.errors[0].msg))}
    }
}

function* fetchUserDataRequest(): Iterator<any> {
    try {
        // В случае вызова редюсера с авторизацией пользователя отрабатывает воркер с запросом
        const userData = yield call(authApi.getMe);

        if (userData) {
            // В случае если получили данные от сервера добавляем в наш state
            yield put(setUserData(userData));
            yield put(setUserLoadingState(LoadingState.SUCCESS))
        }

    } catch (error:any) {
        yield put(setUserLoadingState(LoadingState.ERROR));
        if (error) {yield put(setUserErrorMessage(error.response.data.message))}
    }
}

function* fetchConfirmRequest({payload}: fetchConfirm): Iterator<any> {
    try {
        const userConfirmed = yield call(authApi.confirmUser, payload)

        if (userConfirmed) {
            yield put(setUserLoadingState(LoadingState.CONFIRMED))
        }
    } catch (e) {

    }
}

function* userSaga() {
    yield takeEvery(UserActionsType.FETCH_SIGN_IN, fetchSignInRequest)
    yield takeEvery(UserActionsType.FETCH_SIGN_UP, fetchSignUpRequest)
    yield takeEvery(UserActionsType.FETCH_USER_DATA, fetchUserDataRequest)
    yield takeEvery(UserActionsType.CONFIRM_USER, fetchConfirmRequest)
}

export default userSaga;