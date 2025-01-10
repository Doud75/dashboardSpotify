<script>
	import Box from '@/lib/components/ui/Box.svelte';
	import BarChart from '@/lib/components/widgets/chart/BarChart.svelte';
	import DoughnutChart from '@/lib/components/widgets/chart/DoughnutChart.svelte';
	import PieChart from '@/lib/components/widgets/chart/PieChart.svelte';
	import TextCard from '@/lib/components/ui/TextCard.svelte';
	import { TrendingUp, Music, Podcast, Users, PlayCircle } from 'lucide-svelte';
	import { plugins } from 'chart.js';

	/** @type {import('./$types').PageData} */
	export let data;

	const {
		yearSummary,
		summaryStats,
		topStats,
		clientSatisfactionBarData,
		preferedContentPieData,
		subscriptionDoughnutData,
		subscriptionDuration,
	} = data;

	const tracksCount = yearSummary.total_tracks;
	const growthRate = yearSummary.year2024_percentage.toFixed(2);
	const year2024TracksCount = yearSummary.year2024_count;
	const artistCount = yearSummary.total_unique_artists;

	const top3Artists = topStats.top_10_artists.splice(0, 3);
</script>

<div class="container">
	<div class="stats-grid">
		<TextCard title="Nouveauté 2024" icon={PlayCircle}>
			<div class="large-text">{year2024TracksCount}</div>
			<div class="growth-rate">
				<span class="icon"><TrendingUp /></span>
				<span>{growthRate}%</span>
			</div>
		</TextCard>

		<TextCard title="Morceaux écoutés" icon={Music}>
			<div class="large-text">{tracksCount}</div>
		</TextCard>

		<TextCard title="Total Artistes" icon={Users}>
			<div class="large-text">{artistCount}</div>
		</TextCard>

		<TextCard title="Engagement" icon={Podcast}>
			<div class="large-text">{subscriptionDuration}</div>
		</TextCard>
	</div>

	<div class="charts-grid">
		<DoughnutChart data={subscriptionDoughnutData} title={'Distribution des abonnements'} />
		<BarChart data={clientSatisfactionBarData} options={{ indexAxis: 'y', plugins:{legend:{display:false}} }} title={'Satisfaction client'} />
		<Box>
			<h3>Top artistes 2024</h3>
			<div class="top-artists-content">
				{#each top3Artists as artist, i}
					<div class="top-artist">
						<img src={artist.artwork_url} alt={artist.artist_name} width="48" height="48" />
						<div class="name">{artist.artist_name}</div>
						<div>{i + 1}</div>
						<div class="bar" style="height: {120 - i * 20}px;"></div>
					</div>
				{/each}
			</div>
		</Box>
		<PieChart data={preferedContentPieData} title={'Préférences de contenu'} />
	</div>
</div>

<style>
	.stats-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1.5rem;
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
	.charts-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(625px, 1fr));
		gap: 24px;
		margin-top: 24px;
	}

	.top-artists-content {
		display: flex;
		align-items: flex-end;
		justify-content: space-around;
		padding-top: 16px;
	}
	.top-artist {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.top-artist img {
		border-radius: 50%;
		margin-bottom: 8px;
	}
	.top-artist .name {
		font-size: 0.875rem;
		font-weight: 500;
	}
	.bar {
		width: 60px;
		background-color: rgb(46, 46, 46);
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;
		margin-top: 8px;
		transition: background-color 0.3s;
	}
	.bar:hover {
		background-color: rgb(0, 0, 0);
	}
</style>
