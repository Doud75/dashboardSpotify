<script>
	import Leaderboard from '@/lib/components/ui/Leaderboard.svelte';
	import PolarAreaChart from '@/lib/components/widgets/chart/PolarAreaChart.svelte';
	import BarChart from '@/lib/components/widgets/chart/BarChart.svelte';
	import TextCard from '@/lib/components/ui/TextCard.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="grid-container">
	<div class="header">
		<TextCard title="Chanson la plus populaire">
			<h4>
				{`${data.topStats.top_10_songs[0].track_name}`}
			</h4>
		</TextCard>
		<TextCard title="Langue la plus populaire">
			<h4>
				{data.mostPopularLanguage}
			</h4>
		</TextCard>
		<TextCard title="Chanson la plus dansante">
			<h4>
				{`${data.topStats.top_10_danceable_songs[0].track_name}`}
			</h4>
		</TextCard>
	</div>

	<div class="main-top">
		<div class="block">
			{#if data.chartDataPopularity}
				<PolarAreaChart data={data.chartDataPopularity} title="Popularité par langue" />
			{:else}
				<p>Aucune donnée disponible pour le graphique.</p>
			{/if}
		</div>
		<div class="block">
			{#if data.danceabilityChartData}
				<PolarAreaChart
					data={data.danceabilityChartData}
					options={data.polarAreaChartOptions}
					title="Dansabilité par langue"
				/>
			{:else}
				<p>Aucune donnée disponible pour le graphique.</p>
			{/if}
		</div>
	</div>

	<div class="main-bottom">
		{#if data.barChartData}
			<BarChart data={data.barChartData} title="Acousticness moyenne par tranche de popularité" />
		{:else}
			<p>Aucune donnée disponible pour le graphique.</p>
		{/if}
	</div>

	<div class="sidebar">
		<Leaderboard title="Top 10 chansons populaires" data={data.topStats.top_10_songs} />
	</div>
</div>

<style>
	.grid-container {
		display: grid;
		grid-template-rows: auto 1fr;
		grid-template-columns: calc(70% - 0.75rem) calc(30% - 0.75rem);

		grid-gap: 1.5rem;
		padding: 1rem;
	}

	.header {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 1rem;
	}

	.main-top {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 1rem;
	}

	.sidebar {
		grid-row: 1 / 4;
		grid-column: 2 / 3;
	}
</style>
