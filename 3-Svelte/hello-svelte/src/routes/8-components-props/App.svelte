<!-- Parent component -->
<script>
  import Component from './Component.svelte';
  let name = 'world';
  	const obj = {
		name: 'lihau',
		email: 'lihau@lihau.com'
	}
  const target = {
    ...obj
  }
</script>

<h1>Hello {name}!</h1>
<Component name={name} />
<Component {name} />
<Component namee={name} />
<Component name="howdy"/>
<!-- <Component name={obj.name} email={obj.email} /> -->
<Component {...obj} />
