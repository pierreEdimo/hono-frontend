<script lang="ts">
    import Modal from "./+modal.svelte";

    export let showModal: boolean;
</script>

<Modal title={"filtre"} bind:showModal>
    <div class="filter-modal-body">
        <div class="filter-modal-body-content">
            <slot />
        </div>
    </div>
</Modal>

<style lang="scss">
    .filter-modal-body {
        width: 650px;
        height: auto;
    }

    .filter-modal-body-content {
        padding: 20px;
    }
</style>
