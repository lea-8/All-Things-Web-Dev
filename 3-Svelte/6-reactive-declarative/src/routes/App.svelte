<script>
	let count = 1;
  // let double = count * 2;
  $: double = count *2;
	
	function increment() {
		count ++;
    // double = count * 2;
	}
	function decrement() {
		count --;
    // double = count * 2;
	}
  function multiply() {
    count = count * count;
    // double = count *2;
  }

  function doSomething() {
    console.log(double);
  }
</script>

<button on:click={decrement}>-</button>
{count} * 2 = {double}
<button on:click={increment}>+</button>
<button on:click={multiply}>scale</button>

<button on:click={doSomething}>Click Me</button>