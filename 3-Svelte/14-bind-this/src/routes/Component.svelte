<svelte:options accessors />
<script>
  export let count = 0;

  export function reset() {
    count = 0;
  }
  function inc() {
    count++;
    console.log("inc: ", count)
  }
</script>

<button on:click={inc}>{count}</button>