import { API_URLS } from '@/config/api.config';
import { httpClient } from '@/lib/services/utils/api.utils';

export const getYearSummary = async () => {
	return await httpClient(API_URLS.year.summary);
};

export const getYearDistribution = async () => {
	return await httpClient(API_URLS.year.distribution);
};

export const getTopArtistsByYearAndDecade = async () => {
	return await httpClient(API_URLS.year.topArtists);
};

export const getAveragePopularityStats = async () => {
	return await httpClient(API_URLS.year.popularity);
};

export const getArtistDiversityStats = async () => {
	return await httpClient(API_URLS.year.artistDiversity);
};

export const getFeatureAveragesByYear = async () => {
	return await httpClient(API_URLS.year.featureAverages);
};
