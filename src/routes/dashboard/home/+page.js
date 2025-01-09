import { getYearSummary} from '@/lib/services/api/yearStats.api.ts';
import { getSummaryStats,getTopStats} from '@/lib/services/api/dataStats.api.ts';

/** @type {import('./$types').PageLoad} */
export async function load() {
console.log( await getYearSummary());
console.log( await getSummaryStats());
console.log( await getTopStats());
	return {
		yearSummary : await getYearSummary(),
		summaryStats : await getSummaryStats(),
		topStats : await getTopStats(),
	};
}
