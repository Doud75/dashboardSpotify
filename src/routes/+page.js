import { getYearSummary } from '@/lib/services/api/yearStats.api.ts';
import { getSummaryStats, getTopStats } from '@/lib/services/api/dataStats.api.ts';
import { getPremiumStats } from '@/lib/services/api/userStats.api.ts';

/** @type {import('./$types').PageLoad} */

export const satisfactionLabel = {
	Ok : "Moyen",
	Satisfied : "Bon",
	["Very Satisfied"] : " Excellent",
	["Very Dissatisfied"] : "Faible",
	Dissatisfied : "Très faible"      
}

export async function load() {
	const yearSummary = await getYearSummary();
	const summaryStats = await getSummaryStats();
	const topStats = await getTopStats();
	const premiumStats = await getPremiumStats();
    const subscriptionDuration = summaryStats.most_common_usage_period === "More than 2 years" ? "+ 2 ans"  : summaryStats.most_common_usage_period

	const subscriptionDoughnutData = {
		labels: Object.keys(premiumStats.plan_distribution),
		datasets: [
			{
				label: 'Distribution des abonnements',
				data: Object.values(premiumStats.plan_distribution).map((plan) => plan.global_percentage),
				backgroundColor: ['rgb(140, 93, 240)', 'rgb(234, 213, 255)'],
			},
		],
	};

	const preferedContentPieData = {
		labels: Object.keys(summaryStats.listening_content_ratio),
		datasets: [
			{
				label: 'Distribution globale (%)',
				data: Object.values(summaryStats.listening_content_ratio).map((stat) => stat),
				backgroundColor: ['rgb(140, 93, 240)', 'rgb(234, 213, 255)'],
			},
		],
	};

	const clientSatisfactionBarData = {
		labels: Object.keys(summaryStats.satisfaction_distribution).map(label=> satisfactionLabel[label]),
		datasets: [
			{
                label : "Satisfaction des clients",
				data: Object.values(summaryStats.satisfaction_distribution).map((satisfaction) => satisfaction),
				backgroundColor: [
                    'rgba(255, 159, 64, 0.2)',
					'rgba(151, 255, 86, 0.2)',
					'rgba(81, 192, 75, 0.41)',
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
				],
				borderColor: [
                    'rgb(255, 159, 64)',
					'rgb(139, 255, 86)',
					'rgb(75, 192, 89)',
					'rgb(255, 99, 132)',
					'rgb(54, 162, 235)',
				],
				borderWidth: 1,
			},
		],
	};

	return {
		yearSummary,
		summaryStats,
		topStats,
		clientSatisfactionBarData,
		preferedContentPieData,
		subscriptionDoughnutData,
        subscriptionDuration
	};
}
