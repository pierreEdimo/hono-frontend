<script lang="ts"></script>

<div class="center">
    <slot/>
</div>

<style lang="scss">
    .center{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
</style>