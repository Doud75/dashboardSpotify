import { getGenderStats, getAgeStats, getPremiumStats } from '@/lib/services/api/userStats.api.ts';

/** @type {import('./$types').PageLoad} */
export async function load() {
	const ageStats = await getAgeStats();
	const premiumStats = await getPremiumStats();
	const genderStats = await getGenderStats();

	const ageBarChartData = {
		labels: Object.keys(ageStats.age_stats),
		datasets: [
			{
				label: 'Distribution globale (%)',
				data: Object.values(ageStats.age_stats).map(stat => stat.global_percentage),
				backgroundColor: 'rgba(75, 192, 192, 0.5)',
				borderColor: 'rgba(75, 192, 192, 1)',
				borderWidth: 1
			},
			{
				label: 'Premium (%)',
				data: Object.values(ageStats.age_stats).map(stat => stat.premium_percentage),
				backgroundColor: 'rgba(153, 102, 255, 0.5)',
				borderColor: 'rgba(153, 102, 255, 1)',
				borderWidth: 1
			}
		]
	};

	const planDonutChartData = {
		labels: Object.keys(premiumStats.plan_distribution),
		datasets: [
			{
				label: 'Distribution des abonnements',
				data: Object.values(premiumStats.plan_distribution).map(plan => plan.count),
				backgroundColor: [
					'rgba(54, 162, 235, 0.5)',  // Bleu pour Free
					'rgba(153, 102, 255, 0.5)'  // Violet pour Premium
				],
				borderColor: [
					'rgba(54, 162, 235, 1)',
					'rgba(153, 102, 255, 1)'
				],
				borderWidth: 1
			}
		]
	};

	const genderPieChartData = {
		labels: Object.keys(genderStats.gender_stats),
		datasets: [
			{
				label: 'Distribution par genre',
				data: Object.values(genderStats.gender_stats).map(gender => gender.global_percentage),
				backgroundColor: [
					'rgba(54, 162, 235, 0.5)',  // Bleu pour Male
					'rgba(255, 99, 132, 0.5)',  // Rose pour Female
					'rgba(255, 206, 86, 0.5)'   // Jaune pour Others
				],
				borderColor: [
					'rgba(54, 162, 235, 1)',
					'rgba(255, 99, 132, 1)',
					'rgba(255, 206, 86, 1)'
				],
				borderWidth: 1
			}
		]
	};

	return {
		genderStats,
		ageStats,
		ageBarChartData,
		planDonutChartData,
		genderPieChartData,
		premiumStats
	};
}
