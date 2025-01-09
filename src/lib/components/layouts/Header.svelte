<script lang="ts">
	import { page } from '$app/stores';

	export let title: string = 'Dashboard';
	export let subtitle: string = '';

	// Navigation items
	const navItems = [
		{ name: 'Home', path: '/' },
		{ name: 'People', path: '/dashboard/user' },
		{ name: 'Track', path: '/dashboard/track' },
	];

	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<header class="header">
	<div class="header-content">
		<div class="title-container">
			<h1>{title}</h1>
			{#if subtitle}
				<p>{subtitle}</p>
			{/if}
		</div>

		<!-- Bouton de bascule pour le menu -->
		<button class="menu-toggle" on:click={toggleMenu} aria-label="Toggle menu">
			{#if isMenuOpen}
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
					<path
						d="M18 6L6 18M6 6l12 12"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			{:else}
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
					<path
						d="M4 6h16M4 12h16M4 18h16"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			{/if}
		</button>

		<!-- Navigation -->
		<nav class="nav" class:open={isMenuOpen}>
			<ul>
				{#each navItems as item}
					<li>
						<a
							href={item.path}
							class:active={$page.url.pathname === item.path}
							on:click={() => (isMenuOpen = false)}
						>
							{item.name}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</header>

<style lang="scss">
	@use '@/styles/variables' as vars;

	.header {
		background-color: vars.$white;
		color: vars.$primary-color;
		padding: vars.$spacing-md vars.$spacing-lg;
		box-shadow: vars.$box-shadow;
		z-index: 2;

		@media (max-width: vars.$breakpoint-mobile) {
			padding: vars.$spacing-md;
		}
	}

	.header-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
	}

	.menu-toggle {
		display: none;
		background: none;
		border: none;
		color: vars.$primary-color;
		cursor: pointer;
		padding: vars.$spacing-xs;

		svg {
			width: 24px;
			height: 24px;
		}

		@media (max-width: vars.$breakpoint-mobile) {
			display: block;
		}
	}

	.nav {
		@media (max-width: vars.$breakpoint-mobile) {
			display: none;
			width: 100%;
			margin-top: vars.$spacing-md;

			&.open {
				display: block;
			}
		}

		ul {
			display: flex;
			list-style: none;

			@media (max-width: vars.$breakpoint-mobile) {
				flex-direction: column;
			}
		}

		li {
			margin-left: vars.$spacing-md;

			@media (max-width: vars.$breakpoint-mobile) {
				margin-left: 0;
				margin-bottom: vars.$spacing-sm;
			}
		}

		a {
			color: vars.$primary-color;
			padding: vars.$spacing-xs vars.$spacing-sm;
			border-radius: vars.$spacing-xs;
			transition: all 0.3s ease;

			&:hover {
				background-color: vars.$white-dark;
				color: vars.$primary-color;
			}

			&.active {
				background-color: vars.$white;
				color: vars.$primary-color;
				font-weight: bold;
			}

			@media (max-width: vars.$breakpoint-mobile) {
				display: block;
				padding: vars.$spacing-sm;
			}
		}
	}
</style>
