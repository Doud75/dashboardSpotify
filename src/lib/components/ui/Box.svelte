<script>
	export let style = '';
</script>

<div class="box" {style}>
	<slot />
</div>

<style>
	.box {
		background-color: #ffffff; /* Fond blanc */
		border: 1px solid #e5e7eb; /* Bordure légère */
		border-radius: 8px; /* Coins arrondis */
		padding: 16px; /* Espacement interne */
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Ombre douce */
		margin-bottom: 16px; /* Espacement en bas */
	}
</style>
