<script lang="ts">
    export let title: string;
    export let onClick: svelte.JSX.MouseEventHandler<HTMLButtonElement>;
</script>

<button class="menu-button" on:click={onClick} type="button">
    {title}
</button>

<style>
    .menu-button {
        cursor: pointer;
        padding:  15px 10px; 
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        background: transparent;
        border: none;
    }

    .menu-button:hover {
        background-color: #d3d3d3;
    }
</style>
