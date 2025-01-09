<script lang="ts">
	import Header from '@/lib/components/layouts/Header.svelte';
	import Footer from '@/lib/components/layouts/Footer.svelte';
	import AlertList from '@/lib/components/layouts/AlertList.svelte';
	import Modal from '@/lib/components/widgets/Feedback/Modal.svelte';
	import '@/styles/main.scss';

	export let title: string = 'Dashboard';
	export let subtitle: string = '';
</script>

<div class="layout">
	<Header {title} {subtitle} />
	<main class="main">
		<slot />
	</main>
	<Footer class="footer" />
	<Modal />
	<AlertList />
</div>

<style lang="scss">
	@use '@/styles/variables' as vars;
	@use '@/styles/mixins' as mix;

	:global(.layout) {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background-color: vars.$white;

		.main {
			flex: 1;
			padding: vars.$spacing-xl;
			background-color: vars.$white-dark;

			@include mix.responsive(vars.$breakpoint-tablet) {
				padding: vars.$spacing-lg;
			}

			@include mix.responsive(vars.$breakpoint-mobile) {
				padding: vars.$spacing-md;
			}
		}

		.footer {
			background: vars.$primary-color;
			padding: vars.$spacing-sm;
		}
	}
</style>
