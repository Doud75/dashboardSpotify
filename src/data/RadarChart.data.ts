export let radarChartData = {
	labels: ['Speed', 'Power', 'Accuracy', 'Agility', 'Endurance'],
	datasets: [
		{
			label: 'Player 1',
			data: [80, 60, 70, 90, 50],
			backgroundColor: 'rgba(255, 99, 132, 0.2)',
			borderColor: 'rgba(255, 99, 132, 1)',
			pointBackgroundColor: 'rgba(255, 99, 132, 1)',
		},
		{
			label: 'Player 2',
			data: [70, 85, 60, 80, 65],
			backgroundColor: 'rgba(54, 162, 235, 0.2)',
			borderColor: 'rgba(54, 162, 235, 1)',
			pointBackgroundColor: 'rgba(54, 162, 235, 1)',
		},
	],
};

export let radarChartOptions = {
	scales: {
		r: {
			beginAtZero: true,
		},
	},
	plugins: {
		legend: {
			display: true,
		},
	},
};
