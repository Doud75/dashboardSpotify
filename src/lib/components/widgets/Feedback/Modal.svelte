<script lang="ts">
	import { fade, slide } from 'svelte/transition';

	export let isVisible: boolean = false;
	export let title: string = 'Titre';
	export let message: string = '';
	export let inputRequired: boolean = false;
	export let onConfirm: (inputValue?: string) => void = () => {};
	export let onClose: () => void = () => {};

	let inputValue: string = '';
</script>

{#if isVisible}
	<div class="modal-overlay">
		<div class="modal-content" transition:fade>
			<h2>{title}</h2>
			<p>{message}</p>

			{#if inputRequired}
				<input type="text" bind:value={inputValue} placeholder="Entrez une valeur" />
			{/if}

			<div class="modal-buttons">
				<button
					on:click={() => {
						onConfirm(inputRequired ? inputValue : undefined);
						onClose();
					}}
				>
					Confirmer
				</button>
				<button on:click={onClose}>Annuler</button>
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	@use '@/styles/variables' as vars;
	@use '@/styles/mixins' as mix;

	.modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(vars.$black, 0.7);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
	}

	.modal-content {
		background: vars.$white;
		border-radius: vars.$spacing-xs;
		padding: vars.$spacing-lg;
		text-align: center;
		max-width: 500px;
		width: 90%;
		@include mix.box-shadow;

		h2 {
			color: vars.$primary-color;
			margin-bottom: vars.$spacing-md;
		}

		p {
			color: vars.$gray-dark;
			margin-bottom: vars.$spacing-md;
		}

		input {
			width: 100%;
			padding: vars.$spacing-sm;
			border: 1px solid vars.$gray-light;
			border-radius: vars.$spacing-xs;
			margin-bottom: vars.$spacing-md;
		}

		.modal-buttons {
			display: flex;
			justify-content: center;
			gap: vars.$spacing-md;

			button {
				padding: vars.$spacing-sm vars.$spacing-lg;
				border: none;
				border-radius: vars.$spacing-xs;
				cursor: pointer;
				font-family: vars.$font-family;

				&:first-child {
					background-color: vars.$success-color;
					color: vars.$white;
				}

				&:last-child {
					background-color: vars.$danger-color;
					color: vars.$white;
				}
			}
		}
	}
</style>
