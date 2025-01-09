import { writable } from 'svelte/store';

interface Alert {
	id: number;
	type: 'success' | 'error' | 'info';
	message: string;
}

const createAlertStore = () => {
	const { subscribe, update } = writable<Alert[]>([]);

	let idCounter = 0;

	return {
		subscribe,
		addAlert: (type: Alert['type'], message: string) => {
			const id = idCounter++;
			update((alerts) => [...alerts, { id, type, message }]);
			setTimeout(() => {
				update((alerts) => alerts.filter((alert) => alert.id !== id));
			}, 5000); // Auto-remove après 5s
		},
		removeAlert: (id: number) => {
			update((alerts) => alerts.filter((alert) => alert.id !== id));
		},
	};
};

// Exporter les alertes et leurs méthodes
export const alerts = createAlertStore();
export const { addAlert, removeAlert } = alerts;
