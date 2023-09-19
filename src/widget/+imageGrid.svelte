<script lang="ts">
    import {onMount} from "svelte";

    export let imageUrls: string[];
    let items: any[];

    onMount(() => {
        const insertedItems: any[] = [];
        for (let i = 0; i < 5; i++) {
            insertedItems.push({
                imageUrl: imageUrls !== null ? `../../../${imageUrls[i]}` : null,
                class: i === 0 ? 'block bigger' : 'block'
            });
        }
        items = insertedItems;
    })
</script>

{#if items && items.length > 0}
    <div class="image-grid">
        {#each items as item}
            <div class={item.class}>
                {#if item.imageUrl !== null}
                    <img class="item-image" src={item.imageUrl} alt="icon">
                {/if}
            </div>
        {/each}
    </div>
{:else }
    <p>No data found</p>
{/if}
<style>
    .image-grid {
        display: grid;
        width: 100%;
        height: 500px;
        background: transparent;
        border-radius: 5px;
        gap: 15px;
        grid-auto-rows: 1fr;
        grid-template-columns: 1.5fr 1fr 1fr;
        overflow: hidden;
    }

    .bigger {
        grid-row: 1/3;
        grid-column: 1/1;
    }

    .block {
        background: red;
    }

    .item-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

</style>