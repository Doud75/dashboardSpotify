import { API_URLS } from '@/config/api.config';
import { httpClient } from '@/lib/services/utils/api.utils';

export const getGenderStats = async () => {
	return await httpClient(API_URLS.stats.gender);
};

export const getAgeStats = async () => {
	return await httpClient(API_URLS.stats.age);
};

export const getPremiumStats = async () => {
	return await httpClient(API_URLS.stats.premium);
};
