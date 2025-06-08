<script>
    import { createEventDispatcher } from 'svelte';

	export let name;
	export let status;
    // export let onSkillPointChanged 
    // = () => {};
    // export let onSkillPointChanged;

    const dispatch = createEventDispatcher();
	
	let skillPoint = 5; 

    $: skillPoint, dispatch('skillPointChanged', skillPoint);
    // $: skillPoint, dispatch('skillPointChanged');
    // $: dispatch('skillPointChanged', skillPoint);
    // $: if (onSkillPointChanged) onSkillPointChanged(skillPoint);
    // $: onSkillPointChanged(skillPoint);
    // $: if (typeof onSkillPointChanged === 'function')
    //     onSkillPointChanged(skillPoint);
	
	function decrementSkillPoint() {
        // createEventDispatcher();  <- error
		if (skillPoint > 0) {
			skillPoint --;
		}
        // onSkillPointChanged(skillPoint);
	}
	function incrementSkillPoint() {
		skillPoint ++;
        // onSkillPointChanged(skillPoint);
	}
</script>

<section>
	<dl>
		<dt>Name</dt>
		<dd>{name}</dd>
		<dt>Status</dt>
		<dd>{status}</dd>
	</dl>
	
	<button on:click={decrementSkillPoint}>
		-
	</button>
	{ skillPoint }
	<button on:click={incrementSkillPoint}>
		+
	</button>
</section>

<style>
	section {
		padding: 10px;
	}
	dd {
		color: rebeccapurple;
	}
</style>