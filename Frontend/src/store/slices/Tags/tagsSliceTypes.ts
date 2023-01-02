import {LoadingState} from "../../../types";

export interface Tag {
    name: string
    count: number
}

export interface TagsState {
    items: Tag[]
    loadingStatus: LoadingState
}