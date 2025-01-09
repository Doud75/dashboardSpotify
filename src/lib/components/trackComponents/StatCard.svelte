<script>
    export let title;
    export let data = [];
    console.log(data,'oi');
</script>

<div>
    <h3>{title}</h3>
    <ul>
        {#each data as item, i}
            <li>
                {i + 1}. {item.title} - {item.artist} ({item.popularity})
            </li>
        {/each}
    </ul>
</div>

<style>
    h3 {
        margin-bottom: 1rem;
    }

    li {
        margin-bottom: 0.5rem;
    }
</style>