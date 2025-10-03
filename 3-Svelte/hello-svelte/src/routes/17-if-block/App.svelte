<script>
  let condition1 = true;
  let condition2 = true;
  let condition3 = true;
  
  function toggleCondition1() {
    condition1 = !condition1;
  }
  function toggleCondition2() {
    condition2 = !condition2;
  }
  function check(condition1, condition2) {
    return condition1 || condition2;
  }
</script>

<button on:click={toggleCondition1}>Condition 1: {condition1}</button>
<button on:click={toggleCondition2}>Condition 2: {condition2}</button>
<hr />

{#if condition1 && condition2}
  <p>condition 1 and 2 are true</p>
  {#if condition3}
    <div>Content again</div>
    <div>Another div</div>
  {/if}
{:else if check(condition1, condition2)}
  <p>condition 1 or 2 are true</p>
  {#if condition3}
    <p>Some more content</p>
  {/if}
{:else}
  <p>both condition 1 and 2 are false</p>
{/if}
