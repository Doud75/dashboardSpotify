<script>
	import Box from '@/lib/components/ui/Box.svelte';
	import BarChart from '@/lib/components/widgets/chart/BarChart.svelte';
	import DoughnutChart from '@/lib/components/widgets/chart/DoughnutChart.svelte';
	import PieChart from '@/lib/components/widgets/chart/PieChart.svelte';
	import PolarAreaChart from '@/lib/components/widgets/chart/PolarAreaChart.svelte';
	import RadarChart from '@/lib/components/widgets/chart/RadarChart.svelte';

	import { barChartData, barChartOptions } from '@/data/BarChart.data.ts';
	import { doughnutChartData, doughnutChartOptions } from '@/data/DoughnutChart.data.ts';
	import { pieChartData, pieChartOptions } from '@/data/PieChart.data.ts';
	import { polarAreaChartData, polarAreaChartOptions } from '@/data/PolarAreaChart.data.ts';
	import { radarChartData, radarChartOptions } from '@/data/RadarChart.data.ts';
</script>

<BarChart data={barChartData} options={barChartOptions} />
<DoughnutChart data={doughnutChartData} options={doughnutChartOptions} />
<PieChart data={pieChartData} options={pieChartOptions} />
<PolarAreaChart data={polarAreaChartData} options={polarAreaChartOptions} />
<RadarChart data={radarChartData} options={radarChartOptions} />

<style>
</style>
