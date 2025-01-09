<script lang="ts">
	export let size: string = '40px';
	export let color: string = 'vars.$primary-color';
</script>

<div class="loader" style="--size: {size}; --color: {color};"></div>

<style lang="scss">
	.loader {
		width: var(--size);
		height: var(--size);
		border: 4px solid rgba(0, 0, 0, 0.1);
		border-top-color: var(--color);
		border-radius: 50%;
		animation: spin 1s linear infinite;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
