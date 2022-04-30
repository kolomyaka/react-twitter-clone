export enum LoadingState {
    LOADED = 'LOADED',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
    LOADING = 'LOADING'
}


export interface Tag {
    name: string
    count: number
}

export interface TagsState {
    items: Tag[]
    loadingStatus: LoadingState
}