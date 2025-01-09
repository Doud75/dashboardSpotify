<script>
	import TextCard from '@/lib/components/ui/TextCard.svelte';
	import BarChart from '@/lib/components/widgets/chart/BarChart.svelte';
	import DoughnutChart from '@/lib/components/widgets/chart/DoughnutChart.svelte';
	import PieChart from '@/lib/components/widgets/chart/PieChart.svelte';
	import RadarChart from '@/lib/components/widgets/chart/RadarChart.svelte';

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
	<h1 class="dashboard-title">Statistiques utilisateurs</h1>
	<div class="grid-container">
		<div class="span-2-4">
			<BarChart data={ageBarChartData} options={barChartOptions} />
		</div>
		<div class="span-1-1">
			<TextCard title="Nombres d'utilisateurs" value="{totalNb} M" description="Utilisateurs actifs en 2024" />
		</div>
		<div class="span-1-1">
			<TextCard title="Abonnés premium" value="{totalPremium} M" description="Augmentation de 10%" />
		</div>
		<div class="span-1-3">
			<DoughnutChart data={planDonutChartData} options={planDonutChartOptions} />
		</div>
		<div class="span-1-3">
			<PieChart data={genderPieChartData} options={genderPieChartOptions} />
		</div>
		<div class="span-2-2">
			<RadarChart data={satisfactionRadarChartData} options={satisfactionRadarChartOptions} />
		</div>
	</div>
</div>

<style lang="scss">
	.dashboard {
		background-color: #f3f4f6;
		padding: 0 2rem;

		&-title {
			font-size: 2.5rem;
			font-weight: bold;
			margin-bottom: 2rem;
		}
	}

	.grid-container {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1.5rem; // gap-6 equivalent
		grid-auto-rows: minmax(100px, auto);

		.span-2-2 {
			grid-column: span 2;
			grid-row: span 2;
		}

		.span-2-4 {
			grid-column: span 2;
			grid-row: span 4;
		}
		.span-1-3 {
			grid-column: span 1;
			grid-row: span 3;
		}
	}
</style>
