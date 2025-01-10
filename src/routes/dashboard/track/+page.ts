import { getTopStats } from '@/lib/services/api/dataStats.api';
import { getStatsByLanguage, getStatsByPopularity } from '@/lib/services/api/musicStats.api';

interface Song {
	track_name: string;
	artist_name: string;
}

interface TopStats {
	top_10_songs: Song[];
	top_10_danceable_songs: Song[];
}

interface ChartDataset {
	label: string;
	data: number[];
	backgroundColor: string[];
	borderColor: string[];
	borderWidth: number;
}

interface ChartData {
	labels: string[];
	datasets: ChartDataset[];
}

interface PolarAreaChartOptions {
	scales: {
		r: {
			min: number;
		};
	};
	plugins: {
		legend: {
			display: boolean;
		};
	};
	responsive: boolean;
	maintainAspectRatio: boolean;
}

export const load: () => Promise<{
	chartDataPopularity: ChartData | null;
	mostPopularLanguage: string | null;
	topStats: TopStats;
	danceabilityChartData: ChartData | null;
	barChartData: ChartData | null;
	polarAreaChartOptions: PolarAreaChartOptions;
}> = async () => {
	const topStats = await getTopStats();
	const topLanguages = await getStatsByLanguage();
	const popularityByAccousticness = await getStatsByPopularity();

	const chartDataPopularity: ChartData | null = topLanguages
		? {
				labels: Object.keys(topLanguages.stats_by_language),
				datasets: [
					{
						label: 'Popularité moyenne par langue',
						data: Object.values(topLanguages.stats_by_language).map((lang) => lang.average_popularity),
						backgroundColor: [
							'rgba(255, 99, 132, 0.5)',
							'rgba(54, 162, 235, 0.5)',
							'rgba(255, 206, 86, 0.5)',
							'rgba(75, 192, 192, 0.5)',
							'rgba(153, 102, 255, 0.5)',
							'rgba(255, 159, 64, 0.5)',
							'rgba(199, 199, 199, 0.5)',
						],
						borderColor: [
							'rgba(255, 99, 132, 1)',
							'rgba(54, 162, 235, 1)',
							'rgba(255, 206, 86, 1)',
							'rgba(75, 192, 192, 1)',
							'rgba(153, 102, 255, 1)',
							'rgba(255, 159, 64, 1)',
							'rgba(199, 199, 199, 1)',
						],
						borderWidth: 1,
					},
				],
			}
		: null;

	const danceabilityChartData: ChartData | null = topLanguages
		? {
				labels: Object.keys(topLanguages.stats_by_language),
				datasets: [
					{
						label: 'Dansabilité moyenne par langue',
						data: Object.values(topLanguages.stats_by_language).map((lang) => lang.average_danceability),
						backgroundColor: [
							'rgba(54, 162, 235, 0.5)',
							'rgba(255, 99, 132, 0.5)',
							'rgba(255, 206, 86, 0.5)',
							'rgba(75, 192, 192, 0.5)',
							'rgba(153, 102, 255, 0.5)',
							'rgba(255, 159, 64, 0.5)',
							'rgba(199, 199, 199, 0.5)',
						],
						borderColor: [
							'rgba(54, 162, 235, 1)',
							'rgba(255, 99, 132, 1)',
							'rgba(255, 206, 86, 1)',
							'rgba(75, 192, 192, 1)',
							'rgba(153, 102, 255, 1)',
							'rgba(255, 159, 64, 1)',
							'rgba(199, 199, 199, 1)',
						],
						borderWidth: 1,
					},
				],
			}
		: null;

	const barChartData: ChartData | null = popularityByAccousticness
		? {
				labels: Object.keys(popularityByAccousticness.data),
				datasets: [
					{
						label: 'Acousticness moyenne',
						data: Object.values(popularityByAccousticness.data).map((item) => item.acousticness),
						backgroundColor: [
							'rgba(255, 99, 132, 0.5)',
							'rgba(54, 162, 235, 0.5)',
							'rgba(255, 206, 86, 0.5)',
							'rgba(75, 192, 192, 0.5)',
							'rgba(153, 102, 255, 0.5)',
						],
						borderColor: [
							'rgba(255, 99, 132, 1)',
							'rgba(54, 162, 235, 1)',
							'rgba(255, 206, 86, 1)',
							'rgba(75, 192, 192, 1)',
							'rgba(153, 102, 255, 1)',
						],
						borderWidth: 1,
					},
				],
			}
		: null;

	const mostPopularLanguage: string | null = chartDataPopularity
		? chartDataPopularity.labels[
				chartDataPopularity.datasets[0].data.indexOf(Math.max(...chartDataPopularity.datasets[0].data))
			]
		: null;

	const polarAreaChartOptions: PolarAreaChartOptions = {
		scales: {
			r: {
				min: 0.4,
			},
		},
		plugins: {
			legend: {
				display: true,
			},
		},
		responsive: true,
		maintainAspectRatio: false,
	};

	return {
		topStats,
		chartDataPopularity,
		danceabilityChartData,
		barChartData,
		mostPopularLanguage,
		polarAreaChartOptions,
	};
};
