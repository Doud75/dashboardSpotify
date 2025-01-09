<script>
	
	import { getYearSummary } from '@/lib/services/api/yearStats.api';
	import { TrendingUp, Music, Podcast, Users, PlayCircle } from 'lucide-svelte';

	/** @type {import('./$types').PageData} */
	export let data
	const tracksCount=data.yearSummary.total_tracks
	const growthRate=data.yearSummary.year2024_percentage.toFixed(2);
	const year2024TracksCount=data.yearSummary.year2024_count
	const artistCount=data.yearSummary.total_unique_artists
	const top3Artists = data.topStats.top_10_artists.splice(0,3)
  

  </script>
  
  <div class="dashboard">
	<div class="container">
	  <div class="stats-grid">
		<!-- Morceaux 2024 -->
		<div class="card">
		  <div class="card-header">
			<div class="title">Nouveauté 2024</div>
			<div class="icon"><PlayCircle /></div>
		  </div>
		  <div class="card-content">
			<div class="stats">
			  <div class="large-text">{year2024TracksCount}</div>
			  <div class="growth-rate">
				<span class="icon"><TrendingUp /></span>
				<span>{growthRate}%</span>
			  </div>
			</div>
		  </div>
		</div>
  
		<!-- Morceaux Produits -->
		<div class="card">
		  <div class="card-header">
			<div class="title">Morceaux écoutés</div>
			<div class="icon">
				<Music />
			</div>
		  </div>
		  <div class="card-content">
			<div class="large-text">{tracksCount}</div>
		  </div>
		</div>
  
		<!-- Total Artistes -->
		<div class="card">
		  <div class="card-header">
			<div class="title">Total Artistes</div>
			<div class="icon"><Users /></div>
		  </div>
		  <div class="card-content">
			<div class="large-text">{artistCount}</div>
		  </div>
		</div>
  
		<!-- Podcasts -->
		<div class="card">
		  <div class="card-header">
			<div class="title">Engagement </div>
			<div class="icon"><Podcast /></div>
		  </div>
		  <div class="card-content">
			<!-- <div class="large-text">{data.contentPreference.podcast}%</div> -->
		  </div>
		</div>
	  </div>
  
	  <div class="charts-grid">
		<!-- Distribution des Abonnements -->
		<div class="chart-card">
		  <div class="chart-header">
			<div class="title">Distribution des Abonnements</div>
		  </div>
		  <div class="chart-content">

		toto
		  </div>
		</div>
  
		<!-- Préférences de Contenu -->
		<div class="chart-card">
		  <div class="chart-header">
			<div class="title">Préférences de Contenu</div>
		  </div>
		  <div class="chart-content">
		  </div>
		</div>
  
		<!-- Satisfaction Client -->
		<div class="chart-card">
		  <div class="chart-header">
			<div class="title">Satisfaction Client</div>
		  </div>
		  <div class="chart-content">
			<canvas bind:this={satisfactionChartRef}></canvas>
		  </div>
		</div>
		<div class="chart-card">
			<div class="chart-header">
			  <div class="title">Top Artistes 2024</div>
			</div>
			<div class="top-artists-content">
			  {#each top3Artists as artist, i}
				<div class="top-artist">
				  <img src="{artist.artwork_url}" alt="{artist.artist_name}" width="48" height="48" />
				  <div class="name">{artist.artist_name}</div>
				  <div 
					class="bar" 
					style="height: {120 - i * 20}px;"
				  ></div>
				</div>
			  {/each}
			</div>
		  </div>
	  </div>
  
	 
	</div>
  </div>
  
  <style>
	.dashboard {
	  min-height: 100vh;
	  background-color: #f9fafb;
	  padding: 32px;
	}
  
	.container {
	  max-width: 1240px;
	  margin: 0 auto;
	}
  
	.stats-grid {
	  display: grid;
	  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	  gap: 24px;
	}
  
	.card {
	  background: white;
	  border-radius: 8px;
	  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
	  padding: 16px;
	}
  
	.card-header {
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	  margin-bottom: 8px;
	}
  
	.title {
	  font-size: 0.875rem;
	  font-weight: 500;
	}
  

  
	.large-text {
	  font-size: 2rem;
	  font-weight: bold;
	}
  
	.growth-rate {
	  color: #22c55e;
	  display: flex;
	  align-items: center;
	  gap: 10px;
	  font-size: 0.875rem;
	}
  
	.icon {
	  width:1rem;
	  height: 1rem;
	}
  
	.charts-grid {
	  display: grid;
	  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
	  gap: 24px;
	  margin-top: 24px;
	}
  
	.chart-card {
	  background: white;
	  border-radius: 8px;
	  padding: 16px;
	  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
	}
  
	.chart-header {
	  margin-bottom: 8px;
	}
  
	.chart-header .title {
	  font-size: 1rem;
	  font-weight: 500;
	}
  
	.chart-content {
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  height: 300px;
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
  