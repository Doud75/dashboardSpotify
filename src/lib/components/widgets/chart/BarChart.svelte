<script>
	import Box from '@/lib/components/ui/Box.svelte';
	import { onMount } from 'svelte';
	import { Chart, BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

	Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

	export let data = {};
	export let options = {};
	let chart;

	onMount(() => {
		const ctx = document.getElementById('bar-chart').getContext('2d');
		chart = new Chart(ctx, {
			type: 'bar',
			data,
			options,
		});
	});
</script>

<Box>
	<canvas id="bar-chart"></canvas>
</Box>

<style>
	canvas {
		max-width: 100%;
		height: 400px;
	}
</style>
