import axios from 'axios';
import { Tweet } from '../store/slices/Tweets/tweetSliceTypes';



export const tweetsApi = {
    async fetchTweets(): Promise<Tweet[]> {
        const { data } = await axios.get<Tweet[]>('/tweets');
        return data;
    }
}

