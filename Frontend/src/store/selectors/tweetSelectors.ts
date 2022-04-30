import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { TweetsState } from './../slices/Tweets/tweetSliceTypes';
import { LoadingState, AddTweetLoadingState } from '../slices/Tweets/tweetSliceTypes';

export const selectTweets = (state: RootState): TweetsState => state.tweets;

export const selectTweetsItems = createSelector(selectTweets, tweets => tweets.items);

export const selectloadingStatus = (state: RootState): LoadingState => selectTweets(state).loadingStatus;

export const selectAddTweetLoadingStatus = (state: RootState): AddTweetLoadingState => selectTweets(state).addTweetLoadingStatus;