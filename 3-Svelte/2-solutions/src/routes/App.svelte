<h1>My first Svelte component</h1>

<p class="links">
	Hello world
</p>

<div>
	<a href="https://youtube.com/c/lihautan">Link to my youtube</a>
</div>

<Component />

<style>
	:global(h1) {
		color: rebeccapurple;
		animation: zoom 5s infinite;
	}
	:global(p) {
		font-size: 44px;
	}
	.links {
		text-align: right;
	}
	@keyframes -global-zoom {
		0%, 100% { transform: scale(3)}
		50% { transform: scale(0.5)}
	}
</style>

<script>
	let name = 'lihau';
	import Component from './Component.svelte';
</script>