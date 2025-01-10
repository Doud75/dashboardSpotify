<script lang="ts">
	import Box from '@/lib/components/ui/Box.svelte';

	export let title;
	export let icon;
</script>

<Box>
	{#if title || icon}
		<div class="card-header">
			{#if title}
				<small>{title}</small>
			{/if}
			{#if icon}
				<svelte:component this={icon} />
			{/if}
		</div>
	{/if}
	<slot />
</Box>

<style>
	.card-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 8px;
	}
</style>
