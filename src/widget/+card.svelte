<script lang="ts">
    export let style: string
</script>

<div style={style} class="card">
    <slot />
</div>

<style lang="scss">
    .card {
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 5px;
        backdrop-filter: blur(10px);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
</style>
