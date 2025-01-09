<script>
    import { Bar } from "svelte-chartjs";
    export let title;
    export let data = [];
    export let xKey;
    export let yKey;

    const chartData = {
        labels: data.map((d) => d[xKey]),
        datasets: [
            {
                label: title,
                data: data.map((d) => d[yKey]),
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            x: { title: { display: true, text: xKey } },
            y: { title: { display: true, text: yKey } },
        },
    };
</script>

<div>
    <Bar {chartData} {options} />
</div>
