<script>
	import { mockStats } from './mockData.js';
	import InfoBox from '$lib/components/trackComponents/InfoBox.svelte';
	import Leaderboard from '$lib/components/trackComponents/Leaderboard.svelte';
	import { onMount } from 'svelte';
	import { getTopStats } from '$lib/services/api/dataStats.api.Ts'; // Import de la fonction

	let stats = null; // Les données de l'API
	let isLoading = true;

	// Fonction pour récupérer les données via getTopStats
	async function fetchStats() {
		try {
			stats = await getTopStats();
			console.log('Données récupérées depuis getTopStats :', stats);
		} catch (error) {
			console.error('Erreur lors de la récupération des données :', error);
		} finally {
			isLoading = false;
		}
	}

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
					data={`${stats.top_10_songs[0].track_name} by ${stats.top_10_songs[0].artist_name}`}
				/>
				<InfoBox title="Langue la plus populaire" data={stats.most_popular_language} />
				<InfoBox
					title="Chanson la plus dansante"
					data={`${stats.top_10_artists[0].track_name} by ${stats.top_10_songs[0].artist_name}`}
				/>
			</div>

			<!-- Section principale -->
			<div class="main">
				<!-- Deux blocs côte à côte -->
				<div class="main-top">
					<div class="block">
						<h3>Premier bloc</h3>
						<p>Contenu du premier bloc (ex : graphique, texte, etc.).</p>
					</div>
					<div class="block">
						<h3>Deuxième bloc</h3>
						<p>Contenu du deuxième bloc (ex : graphique, texte, etc.).</p>
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
			<Leaderboard title="Top 10 chansons populaires" data={stats.top_10_songs} />
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
