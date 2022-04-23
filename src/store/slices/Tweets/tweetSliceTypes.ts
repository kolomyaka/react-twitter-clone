
export enum LoadingState {
    LOADED = 'LOADED',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
}

export interface Tweet {
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