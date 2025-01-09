<script>
	import Box from '@/lib/components/ui/Box.svelte';
	export let title;
	export let value;
	export let description = '';
</script>

<Box>
	<div class="container">
		<div class="header">
			<div class="title">{title}</div>
		</div>
		<div class="body">
			<div class="value">{value}</div>
			{#if description}
				<p class="description">{description}</p>
			{/if}
		</div>
	</div>
</Box>

<style lang="scss">
	.container {
		width: 100%;
		height: 100%;
	}

	.header {
		padding: 1rem;
	}

	.title {
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--muted-foreground);
	}

	.body {
		padding: 0 1rem 1rem;
	}

	.value {
		font-size: 1.5rem;
		font-weight: 700;
	}

	.description {
		font-size: 0.75rem;
		color: var(--muted-foreground);
		margin-top: 0.25rem;
	}
</style>
