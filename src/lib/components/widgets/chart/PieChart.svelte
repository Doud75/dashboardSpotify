<script>
	import { onMount } from 'svelte';
	import Box from '@/lib/components/ui/Box.svelte';
	import { Chart, PieController, ArcElement, Tooltip, Legend } from 'chart.js';

	Chart.register(PieController, ArcElement, Tooltip, Legend);

	export let data = {};
	export let options = {};
	export let title;

	let canvas;
	let chart;

	function createChart(node) {
		const ctx = node.getContext('2d');
		chart = new Chart(ctx, {
			type: 'pie',
			data,
			options: {
				...options,
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					legend: {
						position: 'bottom',
					},
				},
			},
		});

		return {
			destroy() {
				console.log('Destroying pie chart');
				chart.destroy();
			},
		};
	}

	$: if (chart && data) {
		chart.data = data;
		chart.update();
		console.log('Pie chart updated with new data');
	}
</script>

<Box>
	<div class="box-chart">
		{#if title}
			<h3 cl>{title}</h3>
		{/if}
		<div class="canvas-container">
			<canvas bind:this={canvas} use:createChart></canvas>
		</div>
	</div>
</Box>

<style>
	.box-chart {
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 100%;
	}
	.canvas-container {
		flex: 1;
	}
</style>
