<script>
	let content = 'Hello world!';
	let src = 'https://svelte.dev/svelte-logo-horizontal.svg';
	
// 	function foo () {
// 		let content = 'Bye world!'
// 	}
</script>

<h1>{content}</h1>

<img alt="logo" {src}>
<img alt="logo" src={src}>