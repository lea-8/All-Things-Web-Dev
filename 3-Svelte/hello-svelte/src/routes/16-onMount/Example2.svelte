<script>
	import { onMount } from 'svelte';
	let src;
  // import greenImage from '$lib/images/green_table.png';

  // s.ab. This method for client-side render.
  //  not sure why. Example 1 also seems client-side.
  onMount(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(`https://dog.ceo/api/breeds/image/random`, { signal })
      .then(response => response.json())
      .then(({ message }) => { src = message });
    
    return () => {
      controller.abort();
    }
  });
</script>

<img {src} alt="dog" style="width: 200px;" />
<!-- <img src={greenImage} alt="dog" style="width: 200px;" /> -->