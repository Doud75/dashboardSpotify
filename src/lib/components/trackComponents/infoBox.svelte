<script>
	export let title; // Le titre de la boîte (ex : "Chanson la plus populaire")
	export let data; // Le contenu principal (ex : "Flowers by Miley Cyrus")
</script>

<div class="info-box">
	<h3>{title}</h3>
	<p>{data}</p>
</div>

<style>
	.info-box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		background: #f9f9f9;
		padding: 1rem;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	h3 {
		margin: 0;
		font-size: 1.2rem;
		font-weight: bold;
		color: #333;
	}

	p {
		margin: 0.5rem 0 0;
		font-size: 1.5rem;
		font-weight: bold;
		color: #555;
	}
</style>
