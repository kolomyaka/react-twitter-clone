import axios from 'axios';
import { Tweet } from '../store/slices/Tweets/tweetSliceTypes';



export const tweetsApi = {
    async fetchTweets(): Promise<Tweet[]> {
        const { data } = await axios.get<Tweet[]>('/tweets?_sort=id&_order=desc');
        return data;
    },
    async fetchCurrentTweet(id: string): Promise<Tweet> {
        const { data } = await axios.get<Tweet>(`/tweets?_id=${id}`);
        return data;
    },
    async addTweet(payload: Tweet): Promise<Tweet> {
        const { data } = await axios.post<Tweet>(`/tweets`, payload);
        return data;
    }
}

