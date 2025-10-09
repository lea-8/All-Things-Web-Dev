<script>
  import Component from './Component.svelte';
  let colours = [
    'red',
    'green',
    'blue'
  ];

  function addColours() {
    colours.splice(2, 0, 'yellow');
    colours = colours;
  }
</script>

<button on:click={addColours}>Click Me</button>

<ul>
  {#each colours as colour (colour)}
    <li>{colour} (key: {colour})</li>
    <Component {colour} />
    {/each}
</ul>
