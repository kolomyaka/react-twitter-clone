
export enum LoadingState {
    LOADED = 'LOADED',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
    LOADING = 'LOADING'
}

export enum AddTweetLoadingState {
    LOADED = 'LOADED',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
    LOADING = 'LOADING'
}

export interface Tweet {
    _id: string
    text: string
    user: {
        fullname: string
        avatarUrl: string
        username: string
    }
}

export interface TweetsState {
    items: Array<Tweet>
    loadingStatus: LoadingState
    addTweetLoadingStatus: AddTweetLoadingState
}

export interface postNewTweetAction {
    type: 'tweetsSlice/postNewTweet'
    payload: string
}