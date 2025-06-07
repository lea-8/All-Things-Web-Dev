<script>
	let count = 1;
  // let double = count * 2;
  $: console.log('double - before re-assignment:', double);
  $: double = count * 2;
  
  // s. ab. Svelte will re-order stuff to make sure it's up-to-date
  $: quadruple = double * 2;  // quadruple -> double
  
  $: console.log('count', count );
  // double with no lag.
  $: console.log('double - reactive no lag:', double);
  $: console.log('double 2:', double);

  // $: doSomething(a, b);  // depends on: doSomething, a, b
  // function doSomething() {
  //   console.log(a, b, count);
  // }
  // --- ^ ---
  // s.ab. just because count changes, does not mean doSomething will be invoked reactively.
	
	function increment() {
		count ++;
    $: double = count * 2;

    // value lags behind, but don't get the explanation.
    console.log('double with lag:', double);
	}
	function decrement() {
		count --;
    double = count * 2;
	}
  function multiply() {
    count = count * count;
    // double = count * 2;
  }

  function doSomething() {
    console.log(double);
  }
</script>

<button on:click={decrement}>-</button>
{count} * 2 = {double} * 2 = {quadruple}
<button on:click={increment}>+</button>
<button on:click={multiply}>scale</button>

<button on:click={doSomething}>Click Me</button>