<script lang="ts">
	import Header from '@/lib/components/layouts/Header.svelte';
	import Footer from '@/lib/components/layouts/Footer.svelte';
	import AlertList from '@/lib/components/layouts/AlertList.svelte';
	import Modal from '@/lib/components/widgets/Feedback/Modal.svelte';
	import '@/styles/main.scss';

	export let title: string = 'Dashboard';
	export let subtitle: string = '';
</script>

<Header {title} {subtitle} />
<main class="main">
	<slot />
</main>
<Footer />
<Modal />
<AlertList />

<style lang="scss">
	.main {
		padding: 0 16px;
	}
</style>
