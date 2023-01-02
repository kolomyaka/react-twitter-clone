import {call, put, takeEvery} from "redux-saga/effects";
import {LoadingState} from "../../types";
import {UsersActionsType} from "../slices/Users/UsersSliceTypes";
import {usersApi} from "../../services/usersApi";
import {setUsers, setUsersLoadingState} from "../slices/Users/UsersSlice";

function* fetchUsers(): Iterator<any> {
    try {
        const users = yield call(usersApi.fetchUsers);
        console.log(users)
        if (users) {
            // В случае если получили данные от сервера добавляем в наш state
            yield put(setUsers(users));
        }
    } catch (error:any) {
        yield put(setUsersLoadingState(LoadingState.ERROR));
    }
}

function* usersSaga() {
    yield takeEvery(UsersActionsType.FETCH_USERS, fetchUsers)
}

export default usersSaga;