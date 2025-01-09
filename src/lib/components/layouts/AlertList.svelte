<script lang="ts">
	import { onMount } from 'svelte';
	import { alerts, removeAlert } from '@/lib/stores/Alert.store.ts';
	import Alert from '@/lib/components/widgets/Feedback/Alert.svelte';

	export let animationDelay = 100;
</script>

<div class="alert-list">
	{#each $alerts as alert, index (alert.id)}
		<Alert
			type={alert.type}
			message={alert.message}
			on:close={() => removeAlert(alert.id)}
			style="animation-delay: {index * animationDelay}ms"
		/>
	{/each}
</div>

<style lang="scss">
	@use '@/styles/variables' as vars;

	.alert-list {
		position: fixed;
		bottom: vars.$spacing-lg;
		left: vars.$spacing-lg;
		display: flex;
		flex-direction: column;
		width: 300px;
		z-index: 1000;

		.alert {
			margin-bottom: vars.$spacing-sm;
		}
	}
</style>
