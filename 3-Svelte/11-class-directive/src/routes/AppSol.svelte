<script>
	let profit = 0;
	
	$: negative = profit < 0;
</script>

<!-- class:negative={negative}		  -->
<div 
		 class:negative
		 class:positive={profit > 0}>
	{ profit }
</div>

<button on:click={() => { profit ++ }}>++</button>
<button on:click={() => { profit -- }}>--</button>

<style>
	.negative {
		color: red;
		font-weight: bold;
	}
	.positive {
		color: limegreen;
		font-weight: bold;
	}
</style>