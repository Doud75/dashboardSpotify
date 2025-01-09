import type { HandleClientError } from '@sveltejs/kit';

export const handleError: HandleClientError = ({ error }) => {
	// Vérifie si `error` est une instance d'Error avant d'accéder à `message`
	if (error instanceof Error) {
		console.error('Client Error:', error);
		return {
			message: error.message,
		};
	}

	// Gestion des erreurs génériques
	console.error('Client Error:', error);
	return {
		message: 'An unknown error occurred.',
	};
};
