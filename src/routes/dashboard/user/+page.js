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
				label: 'Free (%)',
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
					'rgba(54, 162, 235, 0.5)',
					'rgba(153, 102, 255, 0.5)'
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
					'rgba(54, 162, 235, 0.5)',
					'rgba(255, 99, 132, 0.5)',
					'rgba(255, 206, 86, 0.5)'
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

	const satisfactionRadarChartData = {
		labels: Object.keys(premiumStats.plan_vs_satisfaction),
		datasets: [
			{
				label: 'Free',
				data: Object.values(premiumStats.plan_vs_satisfaction).map(stat => stat.Free.local_percentage),
				backgroundColor: 'rgba(54, 162, 235, 0.2)',
				borderColor: 'rgba(54, 162, 235, 1)',
				borderWidth: 2,
				pointBackgroundColor: 'rgba(54, 162, 235, 1)',
				fill: true
			},
			{
				label: 'Premium',
				data: Object.values(premiumStats.plan_vs_satisfaction).map(stat => stat.Premium.local_percentage),
				backgroundColor: 'rgba(153, 102, 255, 0.2)',
				borderColor: 'rgba(153, 102, 255, 1)',
				borderWidth: 2,
				pointBackgroundColor: 'rgba(153, 102, 255, 1)',
				fill: true
			}
		]
	};

	return {
		genderStats,
		ageStats,
		ageBarChartData,
		planDonutChartData,
		genderPieChartData,
		satisfactionRadarChartData,
		premiumStats
	};
}
