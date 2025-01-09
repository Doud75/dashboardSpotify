<script lang="ts">
	export let title: string = 'Dashboard';
	export let subtitle: string = '';
</script>

<header class="header">
	<h1>{title}</h1>
	{#if subtitle}
		<p>{subtitle}</p>
	{/if}
</header>

<style lang="scss">
	@use '@/styles/variables' as vars;

	.header {
		padding: vars.$spacing-lg;
		background-color: vars.$primary-color;
		color: vars.$white;
		text-align: center;

		h1 {
			margin: 0;
			font-size: 2rem;
		}

		p {
			margin: vars.$spacing-sm 0 0;
			font-size: 1.2rem;
			color: vars.$white-dark;
		}
	}
</style>
