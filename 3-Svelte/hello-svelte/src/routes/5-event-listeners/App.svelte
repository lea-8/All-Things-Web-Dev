<script>
	function onClick(event) {
    if (event.target === element) {
      // do something
      console.log("do something.")
    }
	}
	// Vanilla JS:
	//  LiHao: Remember to then remove h1 if you no longer need it
	// h1.addEventListener('click', onClick, )
</script>

<!-- <h1 on:click={() => {console.log('click again')}}>Event listeners</h1> -->
<h1 on:click|preventDefault|stopPropagation={onClick}>Event listeners</h1>

<div on:click|self={() => console.log('parent')}>
	parent
	<div on:click={() => {console.log('child')}}>
		child
	</div>
</div>