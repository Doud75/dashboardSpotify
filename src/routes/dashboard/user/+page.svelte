<script>
	import TextCard from '@/lib/components/ui/TextCard.svelte';
	import BarChart from '@/lib/components/widgets/chart/BarChart.svelte';
	import DoughnutChart from '@/lib/components/widgets/chart/DoughnutChart.svelte';
	import PieChart from '@/lib/components/widgets/chart/PieChart.svelte';
	import RadarChart from '@/lib/components/widgets/chart/RadarChart.svelte';
	import { TrendingUp } from 'lucide-svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	let premiumStats = data.premiumStats;
	let ageBarChartData = data.ageBarChartData;
	let planDonutChartData = data.planDonutChartData;
	let genderPieChartData = data.genderPieChartData;
	let satisfactionRadarChartData = data.satisfactionRadarChartData;

	const totalNb = premiumStats.plan_distribution.Free.count + premiumStats.plan_distribution.Premium.count;
	const totalPremium = premiumStats.plan_distribution.Premium.count;

	const barChartOptions = {
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

	const planDonutChartOptions = {
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

	const genderPieChartOptions = {
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

	const satisfactionRadarChartOptions = {
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
				<h2>{totalNb} M</h2>
				<p>utilisateurs actifs</p>
			</TextCard>

			<TextCard title="Abonnés premium">
				<h2>{totalPremium} M</h2>
				<div class="growth-rate">
					<span class="icon">
						<TrendingUp />
					</span>
					<p>10 %</p>
				</div>
			</TextCard>

			<DoughnutChart data={planDonutChartData} options={planDonutChartOptions} title={'Part des abonnements'} />
			<PieChart data={genderPieChartData} options={genderPieChartOptions} title="Répartition par genre" />
		</div>
	</div>
</div>

<style lang="scss">
	@use '@/styles/variables' as vars;
	@use '@/styles/mixins' as mixins;

	.grid-container {
		display: grid;
		grid-template-columns: repeat(2, calc(50% - 0.75rem));
		gap: 1.5rem;
		grid-auto-rows: minmax(100px, auto);

		@include mixins.responsive(vars.$breakpoint-tablet) {
			display: flex;
			flex-direction: column;
		}

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

	.growth-rate {
		color: vars.$success-color;
		display: flex;
		align-items: flex-start;
		gap: 1rem;
	}

	.icon {
		width: 1rem;
		height: 1rem;
	}
</style>
