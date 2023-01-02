import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Tag, TagsState } from "./tagsSliceTypes";
import {LoadingState} from "../../../types";

const initialState: TagsState = {
    items: [],
    loadingStatus: LoadingState.NEVER
}

// Создание slice для тегов
export const tagsSlice = createSlice({
    name: 'tagsSlice',
    initialState,
    reducers: {
        getTagsFetch(state) {
            state.loadingStatus = LoadingState.LOADING;
        },
        getTagsSuccess(state, action: PayloadAction<Tag[]>) {
            state.loadingStatus = LoadingState.LOADED;
            state.items = action.payload;
        },
        getTagsError(state) {
            state.loadingStatus = LoadingState.ERROR;
        }
    }
})

export const { getTagsFetch, getTagsSuccess, getTagsError} = tagsSlice.actions;

export default tagsSlice.reducer;