<script lang="ts">
    export let showModal: boolean;
    let dialog: HTMLDialogElement;
    $: if (dialog && showModal) dialog.showModal();
    export let title: string;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog
    bind:this={dialog}
    on:close={() => (showModal = false)}
    on:click|self={() => dialog.close()}
>
    <div class="modal-header">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <span on:click={() => dialog.close()} class="modal-icon">&Cross;</span>
        {title}
    </div>
    <slot />
</dialog>

<style lang="scss">
    dialog {
        border-radius: 15px;
        border: none;
        padding: 0;
    }

    .modal-icon {
        width: 35px;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        font-size: 22px;
        cursor: pointer;
    }

    .modal-icon:hover {
        background-color: #d3d3d3;
    }

    .modal-header {
        height: 60px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #d3d3d3;
        padding: 0 20px 0 20px;
        gap: 20px;
    }

    dialog::backdrop {
        background-color: rgba(0, 0, 0, 0.4);
    }

    dialog[open] {
        animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    @keyframes zoom {
        from {
            transform: scale(0.95);
        }
        to {
            transform: scale();
        }
    }

    dialog[open]::backdrop {
        animation: fade 0.2s ease-out;
    }

    @keyframes fade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
</style>
