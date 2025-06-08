<script>
	import GrandChild from './GrandChild.svelte';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function onComponentButtonClick(event) {
        // console.log('in child.svelte ', event.detail);
        dispatch('componentButtonClick', event.detail);
    }
</script>

<GrandChild on:componentButtonClick={onComponentButtonClick} />
