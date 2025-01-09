export let barChartData = {
	labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
	datasets: [
		{
			label: 'Revenue (in USD)',
			data: [1200, 1900, 3000, 5000, 2400, 2800],
			backgroundColor: ['rgba(75, 192, 192, 0.5)'],
			borderColor: ['rgba(75, 192, 192, 1)'],
			borderWidth: 1,
		},
	],
};

export let barChartOptions = {
	scales: {
		y: {
			beginAtZero: true,
		},
	},
};
