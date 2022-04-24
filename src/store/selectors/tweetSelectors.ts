import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Tweet, TweetsState } from './../slices/Tweets/tweetSliceTypes';

export const selectTweets = (state: RootState): TweetsState => state.tweets;

export const selectTweetsItems = createSelector(selectTweets, tweets => tweets.items); 

export const loadingState = (state: RootState) => selectTweets(state).loadingStatus;