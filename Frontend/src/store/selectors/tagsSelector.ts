import { createSelector } from "@reduxjs/toolkit";
import { TagsState } from "../slices/Tags/tagsSliceTypes";
import { RootState } from "../store";


export const selectTags = (state: RootState): TagsState => state.tags;

export const selectTagsItems = createSelector(selectTags, tags => tags.items);

export const selectTagsLoadingStatus = (state: RootState) => selectTags(state).loadingStatus;