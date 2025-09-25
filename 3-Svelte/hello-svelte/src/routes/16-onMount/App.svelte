<script>
  import Example1 from './Example1.svelte';
  import Example2 from './Example2.svelte';

  let show = false;
</script>

<input bind:checked={show} type="checkbox" />

{#if show}
  <Example1 />
  <Example2 />
{/if}