import { httpClient } from '@/lib/services/utils/api.utils';
import { API_URLS } from '@/config/api.config';

export const getFilteredData = async () => {
	return await httpClient(API_URLS.stats.filteredData);
};

export const getAgeStats = async () => {
	return await httpClient(API_URLS.stats.age);
};

export const getTopStats = async () => {
	return await httpClient(API_URLS.stats.top);
};
