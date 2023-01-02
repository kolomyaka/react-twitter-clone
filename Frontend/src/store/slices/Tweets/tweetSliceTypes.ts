import {LoadingState} from "../../../types";

export interface Tweet {
    _id: string
    text: string
    createdAt: Date
    updatedAt: Date
    user: {
        fullname: string
        avatarUrl: string
        username: string
    }
}

export interface TweetsState {
    items: Array<Tweet>
    loadingStatus: LoadingState
    addTweetLoadingStatus: LoadingState
}

export interface postNewTweetAction {
    type: 'tweetsSlice/postNewTweet'
    payload: string
}