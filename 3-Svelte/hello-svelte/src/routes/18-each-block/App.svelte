<script>
  let colours = [
    { name: 'red', hex: '#f00' }, 
    // { name: 'green', hex: '#0f0' }, 
    // { name: 'blue', hex: '#00f' }, 
    // { name: 'yellow', hex: '#ff0' },
    // { name: 'black'}
  ];

  // colours.forEach
  // for (let i = 0; i < colours.length; i++)

  // ! The non-lazy way:
  // for (const colour of colours) {
  //   console.log(colour.nam, colour.hex);
  // }

  // ! The lazy way:
  for (const { name, hex = 'purple' } of colours) {
    for (const character of hex) {
      console.log(character);
    }
    // console.log(name, hex || 'purple');
    console.log(name, hex);
  }

  colours.forEach(({ name, hex = 'purple' }, index) => {
    console.log(index);
  });
</script>

<ul>
  {#each colours as { name, hex = 'purple' }, index}
    <!-- <li>{JSON.stringify(colour)}</li> -->
    <!-- <li style="color: {hex || 'purple'}">{name}</li> -->
    <li style="color: {hex}">{name} - {index}</li>
    {#each hex as character}
      <li>{character}</li>
    {/each}
  {:else}
    <li>the list is empty</li>
  {/each}
  <!-- <li>{colours[0]}</li>
  <li>{colours[1]}</li>
  <li>{colours[2]}</li>
  <li>{colours[3]}</li> -->
</ul>