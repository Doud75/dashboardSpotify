export let pieChartData = {
	labels: ['Product A', 'Product B', 'Product C'],
	datasets: [
		{
			label: 'Sales',
			data: [100, 300, 150],
			backgroundColor: ['rgba(153, 102, 255, 0.5)', 'rgba(255, 159, 64, 0.5)', 'rgba(255, 99, 132, 0.5)'],
			borderColor: ['rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 99, 132, 1)'],
			borderWidth: 1,
		},
	],
};

export let pieChartOptions = {
	plugins: {
		legend: {
			display: true,
		},
	},
};
