import { Tweet } from './../Tweets/tweetSliceTypes';
import { LoadingState } from './../Tags/tagsSliceTypes';



export interface CurrentTweetState {
    data?: Tweet | null;
    currentId?: string;
    loadingStatus: LoadingState
}

export type setCurrentTweetAction = {
    type: string
    payload: string
}