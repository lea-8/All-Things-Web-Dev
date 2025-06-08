<script>
	import Parent from './Parent.svelte';
	
	function onElementButtonClick(event) {
		console.log('onElementButtonClick', event.target.dataset.value);
	}
	function onComponentButtonClick(event) {
		console.log('onComponentButtonClick:', event.detail);
	}
</script>

<Parent on:componentButtonClick={onComponentButtonClick} />

<hr />
Element:

<div on:click={onElementButtonClick}>
	<div>
		<button data-value="button1">Element Click Me 1</button>
		<button data-value="button2">Element Click Me 2</button>
	</div>
</div>