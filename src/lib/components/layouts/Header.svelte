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
</script>

<header class="header">
	<div class="header-content">
		<h1>{title}</h1>
		{#if subtitle}
			<p>{subtitle}</p>
		{/if}
	</div>

	<nav class="nav">
		<ul>
			{#each navItems as item}
				<li>
					<a href={item.path} class:active={$page.url.pathname === item.path}>
						{item.name}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<style lang="scss">
	@use '@/styles/variables' as vars;
	@use '@/styles/mixins' as mix;

	.header {
		padding: vars.$spacing-lg;
		background-color: vars.$primary-color;
		color: vars.$white;

		.header-content {
			text-align: center;

			h1 {
				margin: 0;
				font-size: 2rem;
			}

			p {
				margin: vars.$spacing-sm 0 0;
				font-size: 1.2rem;
				color: vars.$white-dark;
			}
		}

		.nav {
			margin-top: vars.$spacing-md;

			ul {
				display: flex;
				justify-content: center;
				gap: vars.$spacing-lg;
				list-style: none;
				padding: 0;
			}

			a {
				color: vars.$white;
				text-decoration: none;
				padding: vars.$spacing-sm vars.$spacing-md;
				border-radius: vars.$spacing-xs;
				transition: background-color 0.3s ease;

				&:hover {
					background-color: vars.$white-dark;
					color: vars.$primary-color;
				}

				&.active {
					background-color: vars.$white;
					color: vars.$primary-color;
					font-weight: bold;
				}
			}
		}
	}
</style>
