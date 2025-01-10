<script>
	export let style = '';
	export let animation = '';
</script>

<div class="box {animation}" {style}>
	<slot />
</div>

<style lang="scss">
	@use 'sass:map';
	@use '@/styles/variables' as vars;
	@use '@/styles/mixins' as mix;
	@use '@/styles/animations' as anim;

	.box {
		background-color: vars.$white;
		border-radius: 8px;
		padding: vars.$spacing-md;
		box-shadow: vars.$box-shadow;
		height: 100%;
		width: 100%;

		@include mix.responsive(vars.$breakpoint-mobile) {
			padding: vars.$spacing-sm;
		}

		&.fade-in {
			@include mix.fade-in(0.5s);
		}

		&.slide-in-bounce {
			@include mix.slide-in-bounce(0.6s);
		}
	}
</style>
