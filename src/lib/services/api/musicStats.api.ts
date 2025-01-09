import { httpClient } from '@/lib/services/utils/api.utils';
import { API_URLS } from '@/config/api.config';

export const getStatsByPopularity = async () => {
	return await httpClient(API_URLS.stats.popularity);
};

export const getStatsByLanguage = async () => {
	return await httpClient(API_URLS.stats.language);
};
