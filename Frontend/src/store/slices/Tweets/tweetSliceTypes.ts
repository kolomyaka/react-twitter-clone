import {LoadingState} from "../../../types";
import {Action} from "redux";
import {UserActionsType} from "../User/UserSliceTypes";

export interface Tweet {
    _id: string
    text: string
    createdAt: Date
    updatedAt: Date
    images: string[]
    user: {
        fullname: string
        avatarUrl: string
        username: string
        _id: string
    }
}

export enum TweetsActionsType {
    FETCH_TWEETS = 'tweetsSlice/fetchTweets'
}

export interface TweetsState {
    items: Array<Tweet>
    loadingStatus: LoadingState
    addTweetLoadingStatus: LoadingState
}

export interface postNewTweetAction {
    type: 'tweetsSlice/postNewTweet'
    payload: TweetContent
}

export interface TweetContent {
    text: string
    url: string[]
}

export interface getTweetsFetchAction extends Action<TweetsActionsType> {
    type: TweetsActionsType.FETCH_TWEETS,
    payload?: string | undefined
}


export interface deleteTweetAction {
    type: 'tweetsSlice/deleteTweetFetch'
    payload: string
}