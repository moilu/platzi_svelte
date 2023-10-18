import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Moises',
		lastName: 'Luna'
	}
});

export default app;