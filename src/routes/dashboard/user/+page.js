import { getGenderStats, getAgeStats, getPremiumStats } from '@/lib/services/api/userStats.api.ts';

/** @type {import('./$types').PageLoad} */
export async function load() {

	return {
		genderStats : await getGenderStats(),
		ageStats : await getAgeStats(),
		premiumStats : await getPremiumStats(),
	};
}
