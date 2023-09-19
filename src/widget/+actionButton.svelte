<script lang="ts">
    export let click: svelte.JSX.MouseEventHandler<HTMLButtonElement>;
</script>


<button on:click|stopPropagation={click} class="action-button">
    <slot/>
</button>


<style>
    .action-button{
        background: transparent;
        padding: 0;
        border: none;
        cursor: pointer;
    }
</style>