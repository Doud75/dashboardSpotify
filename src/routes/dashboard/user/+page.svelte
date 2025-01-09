<script>
	import TextCard from '@/lib/components/ui/TextCard.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	let genderStats = data.genderStats;
	let ageStats = data.ageStats;
	let premiumStats = data.premiumStats;
	console.log(genderStats);
	console.log(ageStats);
	console.log(premiumStats);

	const totalNb = premiumStats.plan_distribution.Free.count + premiumStats.plan_distribution.Premium.count;
	const totalPremium = premiumStats.plan_distribution.Premium.count;
</script>

<div class="dashboard">
	<h1 class="dashboard-title">Statistiques utilisateurs</h1>
	<div class="grid-container">
		<TextCard
			className="span-1-1"
			title="Nombres d'utilisateurs"
			value="{totalNb} M"
			description="Utilisateurs actifs en 2024"
		/>
		<TextCard
			className="span-1-1"
			title="Abonnés premium"
			value="{totalPremium} M"
			description="Augmentation de 10%"
		/>
		<div class="span-1-3"></div>
		<div class="span-1-3"></div>
		<div class="span-2-4"></div>
		<div class="span-2-2"></div>
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

		.span-1-1 {
			grid-column: span 1;
			grid-row: span 1;
			background-color: #1db954;
		}

		.span-2-2 {
			grid-column: span 2;
			grid-row: span 2;
			background-color: #1db954;
		}

		.span-2-4 {
			grid-column: span 2;
			grid-row: span 4;
			background-color: #1db954;
		}
		.span-1-3 {
			grid-column: span 1;
			grid-row: span 3;
			background-color: #1db954;
		}
	}
</style>
