import { call, put, takeEvery } from "redux-saga/effects";
import { tagsApi } from "../../services/tagsApi";
import { getTagsError, getTagsSuccess } from "../slices/Tags/tagsSlice";

function* workGetTagsFetch(): any {
    try {
        const data = yield call(tagsApi.fetchTats);
        // Сохраняем данные в созданный slices
        yield put(getTagsSuccess(data))
    } catch (error) {
        console.log(error);
        yield put(getTagsError())
    }
}

function* tagsSaga() {
    yield takeEvery('tagsSlice/getTagsFetch', workGetTagsFetch);
}

export default tagsSaga;