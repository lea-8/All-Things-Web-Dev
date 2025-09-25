<script>
  import { onDestroy, onMount } from 'svelte';
  let count = 0;

  // ! Below causes memory leak
  /* onMount(() => {
    let intervalId = setInterval(() => {
      console.log('count', ++count);
    }, 1000);
  }); */

  // ! Instead:
  // let intervalId;
  /* onMount(() => {
    intervalId = setInterval(() => {
      console.log('count', ++count);
    }, 1000);
  });
  onDestroy(() => {
    clearInterval(intervalId);
  }); */

  // ! Simplifying this common pattern with Svelte:
  onMount(() => {
    let intervalId = setInterval(() => {
      console.log('count', ++count);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    }
  });
</script>

{count}