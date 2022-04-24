
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
        name: string
        avatarUrl: string
        userName: string
    }
}

export interface TweetsState {
    items: Tweet[]
    loadingStatus: LoadingState
}