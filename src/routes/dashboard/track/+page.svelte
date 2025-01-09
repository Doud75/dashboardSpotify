<script>
	import { onMount } from 'svelte';
	import InfoBox from '$lib/components/trackComponents/InfoBox.svelte';
	import Leaderboard from '$lib/components/trackComponents/Leaderboard.svelte';
	import PolarAreaChart from '@/lib/components/widgets/chart/PolarAreaChart.svelte';

	import { getTopStats } from '$lib/services/api/dataStats.api.ts';
	import { getStatsByLanguage } from '@/lib/services/api/musicStats.api.ts';

	let topStats = null; // Données pour les chansons/artistes
	let topLanguages = null; // Données par langue
	let isLoading = true;

	let chartDataPopularity = null; // Données pour le PolarAreaChart
	let danceabilityChartData;

	// Fonction pour récupérer les données de l'API
	async function fetchStats() {
		try {
			topStats = await getTopStats();
			topLanguages = await getStatsByLanguage();

			if (topLanguages) {
				chartDataPopularity = {
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
				};

				danceabilityChartData = {
					labels: Object.keys(topLanguages.stats_by_language),
					datasets: [
						{
							label: 'Dansabilité moyenne par langue',
							data: Object.values(topLanguages.stats_by_language).map(
								(lang) => lang.average_danceability
							),
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
				};
			}

			console.log('ChartData correctly initialized:', chartDataPopularity);
		} catch (error) {
			console.error('Erreur lors de la récupération des données :', error);
		} finally {
			isLoading = false;
		}
	}
	let polarAreaChartOptions = {
		scales: {
			r: {
				min: 0.4, // Définit la valeur minimale de l'échelle
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

	// Appeler l'API au montage du composant
	onMount(() => {
		fetchStats();
	});
</script>

{#if isLoading}
	<div class="loading">
		<p>Chargement des données...</p>
	</div>
{:else}
	<div class="grid-container">
		<!-- Titre principal -->
		<div class="title">Données sur les Tracks</div>

		<!-- Colonne principale -->
		<div>
			<!-- Header : Trois boîtes -->
			<div class="header">
				<InfoBox
					title="Chanson la plus populaire"
					data={`${topStats.top_10_songs[0].track_name} by ${topStats.top_10_songs[0].artist_name}`}
				/>
				<InfoBox title="Langue la plus populaire" data="English" />
				<InfoBox
					title="Chanson la plus dansante"
					data={`${topStats.top_10_danceable_songs[0].track_name} by ${topStats.top_10_danceable_songs[0].artist_name}`}
				/>
			</div>

			<!-- Section principale -->
			<div class="main">
				<!-- Deux blocs côte à côte -->
				<div class="main-top">
					<div class="block">
						<h3>Popularité par langue</h3>
						{#if chartDataPopularity}
							<PolarAreaChart data={chartDataPopularity} />
						{:else}
							<p>Aucune donnée disponible pour le graphique.</p>
						{/if}
					</div>
					<div class="block">
						<h3>Dansabilité par langue</h3>
						{#if chartDataPopularity}
							<PolarAreaChart data={danceabilityChartData} options={polarAreaChartOptions} />
						{:else}
							<p>Aucune donnée disponible pour le graphique.</p>
						{/if}
					</div>
				</div>

				<!-- Nouveau bloc pour le graphique -->
				<div class="main-bottom">
					<h3>Graphique principal</h3>
					<p>Contenu du graphique principal (ex : graphique interactif).</p>
				</div>
			</div>
		</div>

		<!-- Sidebar : Leaderboard -->
		<div class="sidebar">
			<Leaderboard title="Top 10 chansons populaires" data={topStats.top_10_songs} />
		</div>
	</div>
{/if}

<style>
	/* Grille principale avec un header pour le titre */
	.grid-container {
		display: grid;
		grid-template-rows: auto auto 1fr; /* Une rangée pour le titre, une pour les InfoBox, et une pour le contenu */
		grid-template-columns: 3fr 1fr; /* Colonne principale (3fr) et sidebar (1fr) */
		grid-gap: 1rem;
		padding: 1rem;
	}

	.title {
		grid-column: span 2; /* Le titre s'étend sur les deux colonnes */
		text-align: center;
		font-size: 1.8rem;
		font-weight: bold;
		margin-bottom: 1rem;
	}

	.header {
		display: grid;
		grid-template-columns: repeat(3, 1fr); /* Trois colonnes pour les InfoBox */
		grid-gap: 1rem;
		margin-bottom: 1rem;
	}

	.main {
		display: grid;
		grid-template-rows: auto 1fr; /* Une rangée pour les deux blocs côte à côte, une pour le graphique */
		grid-gap: 1rem;
	}

	.main-top {
		display: grid;
		grid-template-columns: 1fr 1fr; /* Deux blocs côte à côte */
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
		height: auto; /* La hauteur est limitée au contenu */
		align-self: start; /* Reste alignée en haut */
	}

	.block {
		background: #fff;
		padding: 1rem;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}
</style>
