<script>
	import Box from '@/lib/components/ui/Box.svelte';
	import { onMount } from 'svelte';
	import { Chart, PieController, ArcElement, Tooltip, Legend } from 'chart.js';

	Chart.register(PieController, ArcElement, Tooltip, Legend);

	export let data = {};
	export let options = {};
	let chart;

	onMount(() => {
		const ctx = document.getElementById('pie-chart').getContext('2d');
		chart = new Chart(ctx, {
			type: 'pie',
			data,
			options,
		});
	});
</script>

<Box>
	<canvas id="pie-chart"></canvas>
</Box>

<style>
	canvas {
		max-width: 100%;
		height: 400px;
	}
</style>
