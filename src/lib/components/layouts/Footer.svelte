<footer class="footer">
	<p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
</footer>

<style lang="scss">
	@use '@/styles/variables' as vars;

	.footer {
		padding: vars.$spacing-lg;
		background-color: vars.$gray-dark;
		color: vars.$white;
		text-align: center;

		p {
			margin: 0;
			font-size: 0.9rem;
		}
	}
</style>
