import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { CurrentTweetState } from '../slices/currentTweet/currentTweetSliceTypes';

export const selectTweet = (state: RootState): CurrentTweetState => state.currentTweet;

export const selectTweetItem = createSelector(selectTweet, currentTweet => currentTweet.data);

export const selectLoadingStatus = (state: RootState) => selectTweet(state).loadingStatus;