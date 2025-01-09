import { API_URLS } from '@/config/api.config';
import { httpClient } from '@/lib/services/utils/api.utils';

export const getStatsByPopularity = async () => {
	return await httpClient(API_URLS.stats.popularity);
};

export const getStatsByLanguage = async () => {
	return await httpClient(API_URLS.stats.language);
};
