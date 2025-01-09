<script>
	import Box from '@/lib/components/ui/Box.svelte';
	import { onMount } from 'svelte';
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
	let chart;

	onMount(() => {
		const ctx = document.getElementById('radar-chart').getContext('2d');
		chart = new Chart(ctx, {
			type: 'radar',
			data,
			options,
		});
	});
</script>

<Box>
	<canvas id="radar-chart"></canvas>
</Box>

<style>
	canvas {
		max-width: 100%;
		height: 400px;
	}
</style>
