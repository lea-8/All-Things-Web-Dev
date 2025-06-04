<script>
  let obj = [];
  let count = 0;
	
	function increment() {
    // 1. assisngment
    // count = 10;
    // 2. update statements
		// count ++;
    count += 2;
    // 3. updating / assigning a propoerty
    // obj.count++;
    // obj.count = 10;

    // not an update to svelte
    const data = obj;
    data.count++;

    console.log(count)

    // calling a method
    obj.push(33);
	}

  function doSomethingElse() {
    obj.foo = 1;
  }
</script>

{JSON.stringify(obj)}

<button on:click={increment}>
  Click me
</button>

{count}

<button on:click={doSomethingElse}>Something else</button>