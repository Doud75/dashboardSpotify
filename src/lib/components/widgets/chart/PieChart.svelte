<script>
	import { onMount } from 'svelte';
	import Box from '@/lib/components/ui/Box.svelte';
	import { Chart, PieController, ArcElement, Tooltip, Legend } from 'chart.js';

	Chart.register(PieController, ArcElement, Tooltip, Legend);

	export let data = {};
	export let options = {};

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
	<div class="canvas-container">
		<canvas bind:this={canvas} use:createChart></canvas>
	</div>
</Box>

<style>
	.canvas-container {
		width: 100%;
		height: 400px;
		position: relative;
	}
</style>
