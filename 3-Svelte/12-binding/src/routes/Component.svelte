<script>
  import { createEventDispatcher } from 'svelte';
	export let count = 0;

  const dispatch = createEventDispatcher();
  $: dispatch('countChanged', count);
</script>

<button on:click={() => { count ++; }}>Increment</button>
<div>count: {count}</div>
