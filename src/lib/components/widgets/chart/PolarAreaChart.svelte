<script>
	import { onMount } from 'svelte';
	import Box from '@/lib/components/ui/Box.svelte';
	import { Chart, PolarAreaController, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';

	Chart.register(PolarAreaController, RadialLinearScale, ArcElement, Tooltip, Legend);

	export let data = {};
	export let options = {};

	let canvas;
	let chart;

	function createChart(node) {
		const ctx = node.getContext('2d');
		chart = new Chart(ctx, {
			type: 'polarArea',
			data,
			options: {
				...options,
				responsive: true,
				maintainAspectRatio: false,
			},
		});

		return {
			destroy() {
				console.log('Destroying polar area chart');
				chart.destroy();
			},
		};
	}

	$: if (chart && data) {
		chart.data = data;
		chart.update();
		console.log('Polar Area chart updated with new data');
	}

	console.log('Data passed to PolarAreaChart:', data);

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
