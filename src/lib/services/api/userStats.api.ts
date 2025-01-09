import { httpClient } from '@/lib/services/utils/api.utils';
import { API_URLS } from '@/config/api.config';

export const getGenderStats = async () => {
	return await httpClient(API_URLS.stats.gender);
};

export const getPremiumStats = async () => {
	return await httpClient(API_URLS.stats.premium);
};