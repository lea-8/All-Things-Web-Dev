import { onMount } from 'svelte';

export function foo() {
  onMount(() => {
    console.log('onMount');
  });
};