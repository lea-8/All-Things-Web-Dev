<script>
  let option;
  // let extra = "";

  // $: if (option === "2"){
  //   extra = ":)";
  // }
</script>

<label>
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
</label>

<!-- Flavours: {flavours.join(', ') || '-'} -->
Selected option: {option}
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