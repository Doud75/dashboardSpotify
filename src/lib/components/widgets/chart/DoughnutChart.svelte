<script>
	import Box from '@/lib/components/ui/Box.svelte';
	import { onMount } from 'svelte';
	import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js';

	Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

	export let data = {};
	export let options = {};
	let chart;

	onMount(() => {
		const ctx = document.getElementById('doughnut-chart').getContext('2d');
		chart = new Chart(ctx, {
			type: 'doughnut',
			data,
			options,
		});
	});
</script>

<Box>
	<canvas id="doughnut-chart"></canvas>
</Box>

<style>
	canvas {
		max-width: 100%;
		height: 400px;
	}
</style>
