<script>
	export let title;
	export let data = []; // Liste des chansons (top 10)

	// Fonction pour tronquer le texte si sa longueur dépasse `maxLength`
	function truncateText(text, maxLength) {
		return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
	}
</script>

<div class="top-songs-container">
	<h3>{title}</h3>
	<div class="songs-list">
		{#each data as song, i}
			<div class="song-card">
				<div class="ranking">{i + 1}</div>
				<img src={song.artwork_url} alt={song.track_name} class="artwork" />
				<div class="song-info">
					<p class="track-name">{truncateText(song.track_name, 10)}</p>
					<p class="artist-name">{song.artist_name}</p>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.top-songs-container {
		padding: 1rem;
		background: #fff;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	h3 {
		margin-bottom: 1rem;
		font-size: 1.2rem;
		color: #333;
	}

	.songs-list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.song-card {
		display: flex;
		align-items: center;
		padding: 0.5rem;
		background: #f9f9f9;
		border-radius: 8px;
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
	}

	.ranking {
		font-size: 1.5rem;
		font-weight: bold;
		color: #555;
		margin-right: 1rem;
	}

	.artwork {
		width: 50px;
		height: 50px;
		border-radius: 4px;
		object-fit: cover;
		margin-right: 1rem;
	}

	.song-info {
		display: flex;
		flex-direction: column;
	}

	.track-name {
		font-size: 1rem;
		font-weight: bold;
		color: #222;
		margin: 0;
	}

	.artist-name {
		font-size: 0.9rem;
		color: #666;
		margin: 0;
	}
</style>
