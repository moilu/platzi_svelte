<script>
	import About from "./components/About.svelte";
	import Text  from "./components/Text.svelte";
	import Person from "./components/Person.svelte";
	import Skills from "./components/Skills.svelte";

	export let name;
	export let lastName;

	const data = {
		name: 'Moises',
		lastName: 'Luna',
		age: 31
	}
</script>

<main>
	<h1>Hello {name} {lastName}!</h1>
	<About />
	<Text anotherText={'Hola!'} />
	<Text />
	<Person {...data}/>
	<Skills />
</main>

<style>
	:global(body) {
		background-color: #f2eee2;
		color: #0084f6;
	}
	:global(:root) {
		--theme-color: purple;
	}
	:global(body.dark-mode) {
		background-color: #1d3040;
		color: #bfc2c7;
	}
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>