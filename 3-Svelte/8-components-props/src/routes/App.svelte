<!-- Parent component -->
<script>
  import Component from './Component.svelte';
  let name = 'world';
</script>

<h1>Hello {name}!</h1>
<Component name={name} />
<Component {name} />
<Component namee={name} />
<Component name="howdy"/>
