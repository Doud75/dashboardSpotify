<script lang="ts">
	export let columns: number = 3;
	export let gap: string = '16px';
</script>

<div class="grid" style="--columns: {columns}; --gap: {gap};">
	<slot />
</div>

<style lang="scss">
	.grid {
		display: grid;
		grid-template-columns: repeat(var(--columns), 1fr);
		gap: var(--gap);
		width: 100%;
	}
</style>
