<script lang="ts">
	import TextCard from '@/lib/components/ui/TextCard.svelte';
	import BarChart from '@/lib/components/widgets/chart/BarChart.svelte';
	import DoughnutChart from '@/lib/components/widgets/chart/DoughnutChart.svelte';
	import PieChart from '@/lib/components/widgets/chart/PieChart.svelte';
	import RadarChart from '@/lib/components/widgets/chart/RadarChart.svelte';
	import { TrendingUp } from 'lucide-svelte';
	import type { ChartOptions } from 'chart.js';

	/** @type {import('./$types').PageData} */
	export let data: PageData;
	let premiumStats = data.premiumStats;
	let ageBarChartData = data.ageBarChartData;
	let planDonutChartData = data.planDonutChartData;
	let genderPieChartData = data.genderPieChartData;
	let satisfactionRadarChartData = data.satisfactionRadarChartData;

	const totalNb: number = premiumStats.plan_distribution.Free.count + premiumStats.plan_distribution.Premium.count;
	const totalPremium: number = premiumStats.plan_distribution.Premium.count;

	const barChartOptions: ChartOptions<'bar'> = {
		scales: {
			y: {
				beginAtZero: true,
				max: 100,
				title: {
					display: true,
					text: 'Pourcentage (%)',
				},
			},
		},
		plugins: {
			legend: {
				position: 'bottom',
			},
		},
	};

	const planDonutChartOptions: ChartOptions<'doughnut'> = {
		plugins: {
			legend: {
				display: true,
				position: 'bottom',
			},
			title: {
				display: true,
				text: 'Distribution des abonnements',
			},
		},
	};

	const genderPieChartOptions: ChartOptions<'pie'> = {
		plugins: {
			legend: {
				display: true,
				position: 'bottom',
			},
			title: {
				display: true,
				text: 'Distribution par genre',
			},
		},
	};

	const satisfactionRadarChartOptions: ChartOptions<'radar'> = {
		scales: {
			r: {
				beginAtZero: true,
				max: 100,
				ticks: {
					stepSize: 20,
				},
			},
		},
		plugins: {
			legend: {
				position: 'bottom',
			},
			title: {
				display: true,
				text: "Distribution de la satisfaction par type d'abonnement",
			},
		},
	};
</script>

<div class="dashboard">
	<div class="grid-container">
		<div class="sous-container-left">
			<RadarChart
				data={satisfactionRadarChartData}
				options={satisfactionRadarChartOptions}
				title="Satisfaction des utilisateurs"
			/>
			<BarChart data={ageBarChartData} options={barChartOptions} title={"Abonnements par tranche d'âge (%)"} />
		</div>

		<div class="sous-container-right">
			<TextCard title="Nombres d'utilisateurs">
				<div class="large-text">{totalNb} M</div>
				<p>utilisateurs actifs</p>
			</TextCard>

			<TextCard title="Abonnés premium">
				<div class="large-text">{totalPremium} M</div>
				<div class="growth-rate">
					<span class="icon">
						<TrendingUp />
					</span>
					<span> 10 % </span>
				</div>
			</TextCard>

			<DoughnutChart data={planDonutChartData} options={planDonutChartOptions} title={'Part des abonnements'} />
			<PieChart data={genderPieChartData} options={genderPieChartOptions} title="Répartition par genre" />
		</div>
	</div>
</div>

<style lang="scss">
	.dashboard {
		background-color: #f3f4f6;

		&-title {
			font-size: 2.5rem;
			font-weight: bold;
			margin-bottom: 2rem;
		}
	}
	.large-text {
		font-size: 2rem;
		font-weight: bold;
	}
	.growth-rate {
		color: #22c55e;
		display: flex;
		align-items: flex-start;
		gap: 1rem;
		font-size: 0.875rem;
	}
	.icon {
		width: 1rem;
		height: 1rem;
	}
	.grid-container {
		display: grid;
		grid-template-columns: repeat(2, calc(50% - 0.75rem));
		gap: 1.5rem;
		grid-auto-rows: minmax(100px, auto);

		.sous-container-left {
			display: flex;
			flex-direction: column;
			gap: 1.5rem;
		}

		.sous-container-right {
			display: grid;
			grid-template-columns: repeat(2, calc(50% - 0.75rem));
			grid-template-rows: auto 1fr;
			gap: 1.5rem;
		}
	}
</style>
