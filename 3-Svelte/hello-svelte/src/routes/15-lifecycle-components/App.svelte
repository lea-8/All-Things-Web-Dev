<script>
  import Component from './Component.svelte';
  let condition;
</script>

<input type="checkbox" bind:checked={condition} />

{#if condition}
  <Component />
{/if}