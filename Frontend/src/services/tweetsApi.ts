import {Tweet, TweetContent, TweetsState} from '../store/slices/Tweets/tweetSliceTypes';
import {api} from "../core/axios";

interface Response<T> {
    status: number
    data: T
}


export const tweetsApi = {
    async fetchTweets(): Promise<Tweet[]> {
        const { data } = await api.get<Response<Tweet[]>>('/tweets');
        return data.data;
    },
    // То что в конечном итоге вернет функция (Объяснение типизации в запросах)
    // Возвращает промис с объектом твита
    async fetchCurrentTweet(id: string): Promise<Tweet> {
        // То что нам возвращает запрос
        const { data } = await api.get<Response<Tweet>>(`/tweets/${id}`);
        return data.data;
    },
    async addTweet(payload: TweetContent): Promise<Tweet> {
        const { data } = await api.post<Response<Tweet>>(`/tweets`, {text: payload.text, url: payload.url});
        return data.data;
    },
    async deleteTweet(id: string): Promise<any> {
        const {data} = await api.delete(`/tweets/${id}`);
        return data.data
    }
}

