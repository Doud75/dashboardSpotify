import { getGenderStats, getAgeStats, getPremiumStats } from '@/lib/services/api/userStats.api';

interface AgeStats {
	age_stats: Record<
		string,
		{
			global_percentage: number;
			premium_percentage: number;
		}
	>;
}

interface PremiumStats {
	plan_distribution: Record<
		string,
		{
			count: number;
		}
	>;
	plan_vs_satisfaction: Record<
		string,
		{
			Free: {
				local_percentage: number;
			};
			Premium: {
				local_percentage: number;
			};
		}
	>;
}

interface GenderStats {
	gender_stats: Record<
		string,
		{
			global_percentage: number;
		}
	>;
}

interface BaseChartDataset {
	label: string;
	data: number[];
	backgroundColor: string | string[];
	borderColor: string | string[];
	borderWidth: number;
}

interface RadarChartDataset extends BaseChartDataset {
	pointBackgroundColor: string;
	fill: boolean;
}

interface ChartData {
	labels: string[];
	datasets: BaseChartDataset[];
}

interface RadarChartData {
	labels: string[];
	datasets: RadarChartDataset[];
}

export const load: () => Promise<{
	genderStats: GenderStats;
	ageStats: AgeStats;
	ageBarChartData: ChartData;
	planDonutChartData: ChartData;
	genderPieChartData: ChartData;
	satisfactionRadarChartData: RadarChartData;
	premiumStats: PremiumStats;
}> = async () => {
	const ageStats = await getAgeStats();
	const premiumStats = await getPremiumStats();
	const genderStats = await getGenderStats();

	const ageBarChartData: ChartData = {
		labels: Object.keys(ageStats.age_stats),
		datasets: [
			{
				label: 'Free (%)',
				data: Object.values(ageStats.age_stats).map((stat) => stat.global_percentage),
				backgroundColor: 'rgba(75, 192, 192, 0.5)',
				borderColor: 'rgba(75, 192, 192, 1)',
				borderWidth: 1,
			},
			{
				label: 'Premium (%)',
				data: Object.values(ageStats.age_stats).map((stat) => stat.premium_percentage),
				backgroundColor: 'rgba(153, 102, 255, 0.5)',
				borderColor: 'rgba(153, 102, 255, 1)',
				borderWidth: 1,
			},
		],
	};

	const planDonutChartData: ChartData = {
		labels: Object.keys(premiumStats.plan_distribution),
		datasets: [
			{
				label: 'Distribution des abonnements',
				data: Object.values(premiumStats.plan_distribution).map((plan) => plan.count),
				backgroundColor: ['rgba(54, 162, 235, 0.5)', 'rgba(153, 102, 255, 0.5)'],
				borderColor: ['rgba(54, 162, 235, 1)', 'rgba(153, 102, 255, 1)'],
				borderWidth: 1,
			},
		],
	};

	const genderPieChartData: ChartData = {
		labels: Object.keys(genderStats.gender_stats),
		datasets: [
			{
				label: 'Distribution par genre',
				data: Object.values(genderStats.gender_stats).map((gender) => gender.global_percentage),
				backgroundColor: ['rgba(54, 162, 235, 0.5)', 'rgba(255, 99, 132, 0.5)', 'rgba(255, 206, 86, 0.5)'],
				borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 206, 86, 1)'],
				borderWidth: 1,
			},
		],
	};

	const satisfactionRadarChartData: RadarChartData = {
		labels: Object.keys(premiumStats.plan_vs_satisfaction),
		datasets: [
			{
				label: 'Free',
				data: Object.values(premiumStats.plan_vs_satisfaction).map((stat) => stat.Free.local_percentage),
				backgroundColor: 'rgba(54, 162, 235, 0.2)',
				borderColor: 'rgba(54, 162, 235, 1)',
				borderWidth: 2,
				pointBackgroundColor: 'rgba(54, 162, 235, 1)',
				fill: true,
			},
			{
				label: 'Premium',
				data: Object.values(premiumStats.plan_vs_satisfaction).map((stat) => stat.Premium.local_percentage),
				backgroundColor: 'rgba(153, 102, 255, 0.2)',
				borderColor: 'rgba(153, 102, 255, 1)',
				borderWidth: 2,
				pointBackgroundColor: 'rgba(153, 102, 255, 1)',
				fill: true,
			},
		],
	};

	return {
		genderStats,
		ageStats,
		ageBarChartData,
		planDonutChartData,
		genderPieChartData,
		satisfactionRadarChartData,
		premiumStats,
	};
};
