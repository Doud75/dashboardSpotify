<script>
	import { onMount } from 'svelte';
	import Box from '@/lib/components/ui/Box.svelte';
	import {
		Chart,
		RadarController,
		RadialLinearScale,
		PointElement,
		LineElement,
		Filler,
		Tooltip,
		Legend,
	} from 'chart.js';

	Chart.register(RadarController, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

	export let data = {};
	export let options = {};
	export let title;

	let canvas;
	let chart;

	function createChart(node) {
		const ctx = node.getContext('2d');
		chart = new Chart(ctx, {
			type: 'radar',
			data,
			options: {
				...options,
				responsive: true,
				maintainAspectRatio: false,
			},
		});

		return {
			destroy() {
				console.log('Destroying radar chart');
				chart.destroy();
			},
		};
	}

	$: if (chart && data) {
		chart.data = data;
		chart.update();
		console.log('Radar chart updated with new data');
	}
</script>

<Box>
	{#if title}
		<h3>{title}</h3>
	{/if}
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
