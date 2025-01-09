import { API_URLS } from '@/config/api.config';
import { httpClient } from '@/lib/services/utils/api.utils';

export const getFilteredData = async () => {
	return await httpClient(API_URLS.stats.filteredData);
};

export const getTopStats = async () => {
	return await httpClient(API_URLS.stats.top);
};
