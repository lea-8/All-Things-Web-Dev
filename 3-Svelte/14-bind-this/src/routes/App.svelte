<script>
  import Component from './Component.svelte'
  // import { onMount } from 'svelte';
  let element;

  // onMount(() => {
  //   console.log(element);
  // })

  function reset() {
    // element.value = '';
    // console.log(element.count);
    element.reset();
  }
</script>

<!-- <input bind:this={element} /> -->
<Component bind:this={element} />

<hr />
<button on:click={reset}>Reset</button>

<!-- my try -->
<!-- <button on:click={element.inc}>Try accessing inc</button> -->