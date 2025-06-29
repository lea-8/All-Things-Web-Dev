<script>
  import Component from './Component.svelte';

  // let value = '';

  // function onInput(event) {
  //   value = this.value;
  // }

  let count;
</script>

<!-- <input on:input={onInput} value={foo} /> -->
<!-- <input bind:value={foo} /> -->
<!-- <input bind:value />

<div>value: "{value}"</div>

<button on:click={() => value = 'asdf'}>Click Me</button> -->

<!-- <Component   
  on:countChanged={(event) => {count = event.detail }} 
  {count} 
/> -->
<!-- <Component bind:count={count} /> -->
<Component bind:count />

<button on:click={() => {count = 999}}>Click</button>

{count}