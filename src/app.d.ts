// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		interface Locals {
			token?: string; // Déclare la propriété `token` comme optionnelle
		}
	}
}

export {};
