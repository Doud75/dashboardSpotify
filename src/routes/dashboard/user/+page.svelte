<div class="dashboard">
	<h1 class="dashboard-title">Spotify User Statistics</h1>
	<div class="grid-container">
		<div class="span-1-1"></div>
		<div class="span-1-1"></div>
		<div class="span-1-3"></div>
		<div class="span-1-3"></div>
		<div class="span-2-4"></div>
		<div class="span-2-2"></div>
	</div>
</div>

<style lang="scss">
  .dashboard {
    min-height: 100vh;
    background-color: #f3f4f6; // bg-gray-100 equivalent
    padding: 2rem;

    &-title {
      font-size: 2.5rem;
      font-weight: bold;
      margin-bottom: 2rem;
    }
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem; // gap-6 equivalent
    grid-auto-rows: minmax(100px, auto);

    .span-1-1 {
      grid-column: span 1;
      grid-row: span 1;
			background-color: #1DB954;
    }

    .span-2-1 {
      grid-column: span 2;
      grid-row: span 1;
			background-color: #1DB954;
    }

    .span-1-2 {
      grid-column: span 1;
      grid-row: span 2;
			background-color: #1DB954;
    }

    .span-2-2 {
      grid-column: span 2;
      grid-row: span 2;
			background-color: #1DB954;
    }

    .span-2-4 {
      grid-column: span 2;
      grid-row: span 4;
			background-color: #1DB954;
    }
		.span-1-3 {
      grid-column: span 1;
      grid-row: span 3;
      background-color: #1DB954;
		}
  }
</style>
