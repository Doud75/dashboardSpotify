<script>
	import Box from '@/lib/components/ui/Box.svelte';
	import { onMount } from 'svelte';
	import { Chart, PolarAreaController, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';

	Chart.register(PolarAreaController, RadialLinearScale, ArcElement, Tooltip, Legend);

	export let data = {};
	export let options = {};
	let chart;

	onMount(() => {
		const ctx = document.getElementById('polar-area-chart').getContext('2d');
		chart = new Chart(ctx, {
			type: 'polarArea',
			data,
			options,
		});
	});
</script>

<Box>
	<canvas id="polar-area-chart"></canvas>
</Box>

<style>
	canvas {
		max-width: 100%;
		height: 400px;
	}
</style>
