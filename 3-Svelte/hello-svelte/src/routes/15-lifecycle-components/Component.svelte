<script>
	import { onMount, onDestroy, beforeUpdate, afterUpdate } from 'svelte';
  // import { foo } from './foo';
  import markUpdate from './markUpdate';

  const action = markUpdate();
  let count = 0;
  // foo();
	
	onDestroy(() => {
		console.log('onDestroy');
	});
	
	beforeUpdate(() => {
		console.log('beforeUpdate');
	});
	
	afterUpdate(() => {
		console.log('afterUpdate');
    // count++;  // Don't do this. (Potential infinite loop.)
	});
	
	function update() {
		count++;
	}
</script>

<button use:action on:click={update}>Click Me</button>
{count}