<script>
  import { onMount } from 'svelte';
  import greenImage from '$lib/images/green_table.png'
  let src;

  // s.ab. This method for client-side render.
  //  not sure why. Example 1 also seems client-side.
  onMount(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    // console.log(signal)
    fetch(`https://dog.ceo/api/breeds/image/random`, { signal })
      .then(reponse => response.json())
      .then(({ message }) => {src = message});
  });
</script>

<!-- <img {src} alt="dog" style="width: 200px;" /> -->
<img src={greenImage} alt="dog" style="width: 200px;" />