<script>
  import {onMount} from 'svelte';

  export let colour;

  let initialColour = colour;

  onMount(() => {
    console.log(colour);
  });
</script>

<p>Colour: {colour}, initial colour: {initialColour}</p>