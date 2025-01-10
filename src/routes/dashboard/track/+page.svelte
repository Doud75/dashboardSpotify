<script>
	import InfoBox from '$lib/components/trackComponents/InfoBox.svelte';
	import Leaderboard from '$lib/components/trackComponents/Leaderboard.svelte';
	import PolarAreaChart from '@/lib/components/widgets/chart/PolarAreaChart.svelte';
	import BarChart from '@/lib/components/widgets/chart/BarChart.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="grid-container">
	<div class="title">Données sur les Tracks</div>

	<div>
		<div class="header">
			<InfoBox
				title="Chanson la plus populaire"
				data={`${data.topStats.top_10_songs[0].track_name} by ${data.topStats.top_10_songs[0].artist_name}`}
			/>
			<InfoBox title="Langue la plus populaire" data={data.mostPopularLanguage} />
			<InfoBox
				title="Chanson la plus dansante"
				data={`${data.topStats.top_10_danceable_songs[0].track_name} by ${data.topStats.top_10_danceable_songs[0].artist_name}`}
			/>
		</div>

		<div class="main">
			<div class="main-top">
				<div class="block">
					<h3>Popularité par langue</h3>
					{#if data.chartDataPopularity}
						<PolarAreaChart data={data.chartDataPopularity} />
					{:else}
						<p>Aucune donnée disponible pour le graphique.</p>
					{/if}
				</div>
				<div class="block">
					<h3>Dansabilité par langue</h3>
					{#if data.danceabilityChartData}
						<PolarAreaChart data={data.danceabilityChartData} options={data.polarAreaChartOptions} />
					{:else}
						<p>Aucune donnée disponible pour le graphique.</p>
					{/if}
				</div>
			</div>

			<div class="main-bottom">
				<h3>Acousticness moyenne par tranche de popularité</h3>
				{#if data.barChartData}
					<BarChart data={data.barChartData} />
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

	.title {
		grid-column: span 2;
		text-align: center;
		font-size: 1.8rem;
		font-weight: bold;
		margin-bottom: 1rem;
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

	.main-bottom {
		background: #fff;
		padding: 1rem;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.sidebar {
		background: #f9f9f9;
		padding: 1rem;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		height: auto;
		align-self: start;
	}

	.block {
		background: #fff;
		padding: 1rem;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}
</style>
