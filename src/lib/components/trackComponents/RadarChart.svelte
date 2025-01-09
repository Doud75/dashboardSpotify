<script>
    import { Radar } from "svelte-chartjs";
    export let title;
    export let data = {};
    export let metric;

    const chartData = {
        labels: Object.keys(data),
        datasets: [
            {
                label: title,
                data: Object.values(data).map((d) => d[metric]),
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                borderColor: "rgba(54, 162, 235, 1)",
            },
        ],
    };

    const options = {
        responsive: true,
    };
</script>

<div>
    <Radar {chartData} {options} />
</div>
