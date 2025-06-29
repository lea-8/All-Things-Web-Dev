<script>
	import Child from './Child.svelte';
	// import { createEventDispatcher } from 'svelte';

	// const dispatch = createEventDispatcher();

	// function componentButtonClick(event) {
	// 	console.log("in parent.svelte", event.detail);
  //   dispatch('componentButtonClick', event.detail);
	// }
</script>

<!-- <Child on:componentButtonClick={componentButtonClick} /> -->
<Child on:componentButtonClick on:click />
