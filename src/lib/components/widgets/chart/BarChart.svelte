<script>
	import Box from '@/lib/components/ui/Box.svelte';
	import { Chart, BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

	Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

	export let data = {};
	export let options = {};
	export let title;

	let canvas;
	let chart;

	function createChart(node) {
		const ctx = node.getContext('2d');
		chart = new Chart(ctx, {
			type: 'bar',
			data,
			options: {
				...options,
				responsive: true,
				maintainAspectRatio: false,
			},
		});

		return {
			destroy() {
				console.log('Destroying chart');
				chart.destroy();
			},
		};
	}

	$: if (chart && data) {
		chart.data = data;
		chart.update();
		console.log('Chart updated with new data');
	}
</script>

<Box>
	{#if title}
		<h3 cl>{title}</h3>
	{/if}
	<div class="canvas-container">
		<canvas bind:this={canvas} use:createChart></canvas>
	</div>
</Box>

<style>
	.canvas-container {
		padding-top: 1rem;
		position: relative;
	}
</style>
