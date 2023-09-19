<script lang="ts">
    export let click: svelte.JSX.MouseEventHandler<HTMLButtonElement>;
</script>

<button on:click={click} class="rounded-button">
    <slot/>
</button>

<style lang="scss">
    .rounded-button{
      width: 45px;
      height: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #f3f3f3;
      border-radius: 50%;
      border: none;
      cursor: pointer;
      font-size: 32px;
    }
    
    .rounded-button:hover{
      background: #d3d3d3;
    }
</style>