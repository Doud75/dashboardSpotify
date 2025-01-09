<script lang="ts">
	export let type: 'success' | 'error' | 'info' = 'info';
	export let message: string = '';
	export let duration: number = 3000; // Durée en ms avant de masquer
	export let onClose: () => void = () => {};

	let visible = true;

	const hideAlert = () => {
		visible = false;
		onClose();
	};

	// Auto-hide après `duration` ms
	setTimeout(hideAlert, duration);
</script>

{#if visible}
	<div class="alert {type}" role="alert" on:click={hideAlert}>
		<span class="alert-message">{message}</span>
	</div>
{/if}

<style lang="scss">
	@use '@/styles/variables' as vars;

	.alert {
		padding: vars.$spacing-md;
		border-radius: 6px;
		color: white;
		font-weight: bold;
		text-align: center;
		cursor: pointer;

		&.success {
			background-color: vars.$success-color;
		}

		&.error {
			background-color: vars.$danger-color;
		}

		&.info {
			background-color: vars.$primary-color;
		}
	}
</style>
