import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	// Récupère le token depuis les cookies
	const token = event.cookies.get('auth_token');
	if (token) {
		event.locals.token = token; // TypeScript reconnaît maintenant `token`
	}

	// Traiter la requête et retourner la réponse
	const response = await resolve(event);

	// Ajouter des en-têtes personnalisés à la réponse si nécessaire
	response.headers.set('X-Custom-Header', 'SvelteKit');

	return response;
};
