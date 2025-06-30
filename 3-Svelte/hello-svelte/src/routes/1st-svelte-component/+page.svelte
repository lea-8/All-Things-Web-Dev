<h1>My first Svelte component</h1>

<p>
    Hello world
</p>

<div>
    <a href='https://www.youtube.com/@B.L8-kr6dt'>Link to my YouTube</a>
</div>

<Component />

<!-- In a Svelte component you can only have 1(!) style tag and 1(!) script tag!!! -->
<style>
    h1 {
        color: rebeccapurple;
    }
    p {
        font-size: 44px;
    }
</style>

<script>
    let name = "neo";
    console.log(name)

    import Component from './Component.svelte';
</script>