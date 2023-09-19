<script lang="ts">
    export let gap: string;
    export let alignment: string; 
</script>

<div style="gap: {gap ? gap : '0px'}; align-items: {alignment}" class="row">
    <slot/>
</div>

<style lang="scss">
  .row {
    display: flex;
    width: 100%;
    height: 100%;
  }
</style>