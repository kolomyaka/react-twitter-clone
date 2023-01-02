import {api} from '../core/axios';
import { Tag } from '../store/slices/Tags/tagsSliceTypes';

export const tagsApi = {
    async fetchTats(): Promise<Tag[]> {
        const { data } = await api.get('/tags');
        return data;
    }
}