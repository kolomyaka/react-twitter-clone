import {Tweet, TweetsState} from '../store/slices/Tweets/tweetSliceTypes';
import {axios} from "../core/axios";

interface Response<T> {
    status: number
    data: T
}

export const tweetsApi = {
    async fetchTweets(): Promise<Tweet[]> {
        const { data } = await axios.get<Response<Tweet[]>>('/tweets');
        return data.data;
    },
    // То что в конечном итоге вернет функция (Объяснение типизации в запросах)
    // Возвращает промис с объектом твита
    async fetchCurrentTweet(id: string): Promise<Tweet> {
        // То что нам возвращает запрос
        const { data } = await axios.get<Response<Tweet>>(`/tweets/${id}`);
        return data.data;
    },
    async addTweet(payload: string): Promise<Tweet> {
        const { data } = await axios.post<Response<Tweet>>(`/tweets`, {text: payload});
        return data.data;
    }
}

