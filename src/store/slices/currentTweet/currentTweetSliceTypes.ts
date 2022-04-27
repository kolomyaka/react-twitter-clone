import { Tweet } from './../Tweets/tweetSliceTypes';
import { LoadingState } from './../Tags/tagsSliceTypes';



export interface CurrentTweetState {
    data?: Tweet;
    currentId? : string;
    loadingStatus: LoadingState
}