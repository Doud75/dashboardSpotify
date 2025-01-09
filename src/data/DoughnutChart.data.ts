export let doughnutChartData = {
	labels: ['Red', 'Blue', 'Yellow'],
	datasets: [
		{
			label: 'Dataset',
			data: [300, 500, 200],
			backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)'],
			borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
			borderWidth: 1,
		},
	],
};

export let doughnutChartOptions = {
	plugins: {
		legend: {
			display: true,
		},
	},
};
