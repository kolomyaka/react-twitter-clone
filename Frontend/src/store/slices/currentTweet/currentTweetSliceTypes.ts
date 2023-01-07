import { Tweet } from './../Tweets/tweetSliceTypes';
import {LoadingState} from "../../../types";



export interface CurrentTweetState {
    data?: Tweet | null;
    currentId?: string;
    loadingStatus: LoadingState;
    errorMessage: string
}

export type setCurrentTweetAction = {
    type: string
    payload: string
}