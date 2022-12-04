import type { AxiosResponse } from 'axios';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export const useWord = () => {
	return useQuery<AxiosResponse<string[]>, Error>({
		queryKey: [window.location.origin, 'words'],
		staleTime: 1000 * 60 * 60 * 24,
		queryFn: async () =>
			axios.get<string[]>('/data/words.json', {
				baseURL: window.location.origin,
			}),
	});
};
