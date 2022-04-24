import axios from 'axios';
import { Tweet } from '../store/slices/Tweets/tweetSliceTypes';



export const tweetsApi = {
    fetchTweets(): Promise<Tweet[]> {
        return axios.get('https://trycode.pw/c/S2F9Q.json').then(({data}) => data);
    }
}

