export let polarAreaChartData = {
	labels: ['Africa', 'Asia', 'Europe', 'America'],
	datasets: [
		{
			label: 'Population (millions)',
			data: [1200, 2300, 900, 1100],
			backgroundColor: [
				'rgba(75, 192, 192, 0.5)',
				'rgba(255, 99, 132, 0.5)',
				'rgba(255, 205, 86, 0.5)',
				'rgba(201, 203, 207, 0.5)',
			],
		},
	],
};

export let polarAreaChartOptions = {
	plugins: {
		legend: {
			display: true,
		},
	},
};
