<script>
  import { tick } from 'svelte';

  let value = '';
  async function onInput(event) {
    const input = this;
    let selectionStart = input.selectionStart;
    let selectionEnd = input.selectionEnd;
    value = input.value.toUpperCase();

    console.log('selectionStart', selectionStart);
    console.log('selectionEnd', selectionEnd);

    await tick();
    input.selectionStart = selectionStart;
    input.selectionEnd = selectionEnd;
  }
</script>

<input on:input={onInput} {value} />

<button on:click={() => {
  setTimeout(() => {
    console.log('timeout');
    value = value.toUpperCase();
  }, 3000)
}}>
  update value
</button>