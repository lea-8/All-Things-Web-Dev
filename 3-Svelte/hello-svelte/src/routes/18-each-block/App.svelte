<script>
  let colours = [
    { name: 'red', hex: '#f00' }, 
    { name: 'green', hex: '#0f0' }, 
    { name: 'blue', hex: '#00f' }, 
    { name: 'yellow', hex: '#ff0' },
    { name: 'black'}
  ];

  // colours.forEach
  // for (let i = 0; i < colours.length; i++)

  // ! The non-lazy way:
  // for (const colour of colours) {
  //   console.log(colour.nam, colour.hex);
  // }

  // ! The lazy way:
  for (const { name, hex } of colours) {
    console.log(name, hex);
  }
</script>

<ul>
  {#each colours as { name, hex }}
    <!-- <li>{JSON.stringify(colour)}</li> -->
    <li style="color: {hex}">{name}</li>
  {/each}
  <!-- <li>{colours[0]}</li>
  <li>{colours[1]}</li>
  <li>{colours[2]}</li>
  <li>{colours[3]}</li> -->
</ul>