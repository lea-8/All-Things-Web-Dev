<script>
	import Profile from './Profile.svelte';

    // argument used to be called skillPoint, now "event" because of component event listener
    function onSkillPointChanged(event) {
        console.log('onSkillPointsChanged: ', event.detail);
    }
</script>

<Profile
	name="lihautan"
	status="Learning svelte"
    on:skillPointChanged={onSkillPointChanged} 
/>
<!-- {onSkillPointChanged} is prop shorthand -->

<Profile
	name="neo"
	status="confused"
/> 