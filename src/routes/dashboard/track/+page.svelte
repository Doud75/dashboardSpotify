<script lang="ts">
	import Leaderboard from '$lib/components/ui/Leaderboard.svelte';
	import PolarAreaChart from '@/lib/components/widgets/chart/PolarAreaChart.svelte';
	import BarChart from '@/lib/components/widgets/chart/BarChart.svelte';
	import TextCard from '@/lib/components/ui/TextCard.svelte';

	/** @type {import('./$types').PageData} */
	export let data: {
		topStats: {
			top_10_songs: Array<{ track_name: string }>;
			top_10_danceable_songs: Array<{ track_name: string }>;
		};
		mostPopularLanguage: string;
		chartDataPopularity?: object;
		danceabilityChartData?: object;
		polarAreaChartOptions?: object;
		barChartData?: object;
	};
</script>

<div class="grid-container">
	<div>
		<div class="header">
			<TextCard title="Chanson la plus populaire">
				<div class="large-text">
					{data.topStats.top_10_songs[0]?.track_name || 'Aucune donnée'}
				</div>
			</TextCard>
			<TextCard title="Langue la plus populaire">
				<div class="large-text">
					{data.mostPopularLanguage || 'Aucune donnée'}
				</div>
			</TextCard>
			<TextCard title="Chanson la plus dansante">
				<div class="large-text">
					{data.topStats.top_10_danceable_songs[0]?.track_name || 'Aucune donnée'}
				</div>
			</TextCard>
		</div>

		<div class="main">
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
		</div>
	</div>

	<div class="sidebar">
		<Leaderboard title="Top 10 chansons populaires" data={data.topStats.top_10_songs} />
	</div>
</div>

<style>
	.grid-container {
		display: grid;
		grid-template-rows: auto auto 1fr;
		grid-template-columns: 3fr 1fr;
		grid-gap: 1rem;
		padding: 1rem;
	}

	.header {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 1rem;
		margin-bottom: 1rem;
	}

	.main {
		display: grid;
		grid-template-rows: auto 1fr;
		grid-gap: 1rem;
	}

	.main-top {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 1rem;
	}

	.large-text {
		font-size: 1.2rem;
		font-weight: bold;
	}
</style>
