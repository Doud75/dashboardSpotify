import { writable } from 'svelte/store';

interface ModalOptions {
	isVisible: boolean;
	title?: string;
	message?: string;
	inputRequired?: boolean;
	onConfirm?: (inputValue?: string) => void;
	onClose?: () => void;
}

const initialState: ModalOptions = { isVisible: false };

export const modal = writable<ModalOptions>(initialState);

export const showModal = (options: Omit<ModalOptions, 'isVisible'>) => {
	modal.set({ ...options, isVisible: true });
};

export const closeModal = () => {
	modal.set(initialState);
};
