import { getTopStats } from '$lib/services/api/dataStats.api.ts';
import { getStatsByLanguage, getStatsByPopularity } from '@/lib/services/api/musicStats.api.ts';

/** @type {import('./$types').PageLoad} */
export async function load() {
	const topStats = await getTopStats();
	const topLanguages = await getStatsByLanguage();
	const popularityByAccousticness = await getStatsByPopularity();

	// Préparation des données pour le graphique de popularité par langue
	const chartDataPopularity = topLanguages ? {
		labels: Object.keys(topLanguages.stats_by_language),
		datasets: [{
			label: 'Popularité moyenne par langue',
			data: Object.values(topLanguages.stats_by_language).map(lang => lang.average_popularity),
			backgroundColor: [
				'rgba(255, 99, 132, 0.5)',
				'rgba(54, 162, 235, 0.5)',
				'rgba(255, 206, 86, 0.5)',
				'rgba(75, 192, 192, 0.5)',
				'rgba(153, 102, 255, 0.5)',
				'rgba(255, 159, 64, 0.5)',
				'rgba(199, 199, 199, 0.5)'
			],
			borderColor: [
				'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)',
				'rgba(199, 199, 199, 1)'
			],
			borderWidth: 1
		}]
	} : null;

	// Préparation des données pour le graphique de dansabilité
	const danceabilityChartData = topLanguages ? {
		labels: Object.keys(topLanguages.stats_by_language),
		datasets: [{
			label: 'Dansabilité moyenne par langue',
			data: Object.values(topLanguages.stats_by_language).map(lang => lang.average_danceability),
			backgroundColor: [
				'rgba(54, 162, 235, 0.5)',
				'rgba(255, 99, 132, 0.5)',
				'rgba(255, 206, 86, 0.5)',
				'rgba(75, 192, 192, 0.5)',
				'rgba(153, 102, 255, 0.5)',
				'rgba(255, 159, 64, 0.5)',
				'rgba(199, 199, 199, 0.5)'
			],
			borderColor: [
				'rgba(54, 162, 235, 1)',
				'rgba(255, 99, 132, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)',
				'rgba(199, 199, 199, 1)'
			],
			borderWidth: 1
		}]
	} : null;

	// Préparation des données pour le graphique d'acousticness
	const barChartData = popularityByAccousticness ? {
		labels: Object.keys(popularityByAccousticness.data),
		datasets: [{
			label: 'Acousticness moyenne',
			data: Object.values(popularityByAccousticness.data).map(item => item.acousticness),
			backgroundColor: [
				'rgba(255, 99, 132, 0.5)',
				'rgba(54, 162, 235, 0.5)',
				'rgba(255, 206, 86, 0.5)',
				'rgba(75, 192, 192, 0.5)',
				'rgba(153, 102, 255, 0.5)'
			],
			borderColor: [
				'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)'
			],
			borderWidth: 1
		}]
	} : null;

	// Trouver la langue la plus populaire
	const mostPopularLanguage = chartDataPopularity ?
		chartDataPopularity.labels[
			chartDataPopularity.datasets[0].data.indexOf(
				Math.max(...chartDataPopularity.datasets[0].data)
			)
			] : null;

	return {
		topStats,
		chartDataPopularity,
		danceabilityChartData,
		barChartData,
		mostPopularLanguage,
		polarAreaChartOptions: {
			scales: {
				r: {
					min: 0.4,
				}
			},
			plugins: {
				legend: {
					display: true
				}
			},
			responsive: true,
			maintainAspectRatio: false
		}
	};
}
