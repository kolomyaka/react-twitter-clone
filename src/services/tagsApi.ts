import axios from 'axios';
import { Tag } from '../store/slices/Tags/tagsSliceTypes';

export const tagsApi = {
    async fetchTats(): Promise<Tag[]> {
        const { data } = await axios.get('/tags'); 
        return data;
    }
}