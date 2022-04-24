
export enum LoadingState {
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
}