<script>
  let options = ["10"];
	let options2 = ["3"];
  // let extra = "";

  // $: if (option === "2"){
  //   extra = ":)";
  // }
</script>

<button on:click={() => {
	options = ['4', '1'];
}}>
	reset
</button>

<label>
	<input type="checkbox" name="foo" bind:group={options} value="1"> 1
</label>
<label>
	<input type="checkbox" name="foo" bind:group={options} value="2"> 2
</label>
<label>
	<input type="checkbox" name="foo" bind:group={options2} value="3"> 3
</label>
<label>
	<input type="checkbox" name="foo" bind:group={options2} value="4"> 4
</label>

<!-- Flavours: {flavours.join(', ') || '-'} -->
<!-- Selected option: {options} -->
Selected option: {options.join(', ')}
<!-- {extra} -->

<!-- <label>
	<input type="radio" name="foo" bind:group={option} value="1"> 1
</label>
<label>
	<input type="radio" name="foo" bind:group={option} value="2"> 2
</label>
<label>
	<input type="radio" name="foo" bind:group={option} value="3"> 3
</label>
<label>
	<input type="radio" name="foo" bind:group={option} value="4"> 4
</label> -->