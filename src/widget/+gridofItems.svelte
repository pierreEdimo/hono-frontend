<script lang="ts">
    import { onMount } from "svelte";
    import type { Item } from "../type/item";
    import ItemContainer from "./+itemContainer.svelte";
    let items: Item[];
    let currentId: number;
    import { currentCategoryId } from "../stores/+category.store";
    import InfoContainer from "./+infoContainer.svelte";

    currentCategoryId.subscribe((id) => {
        currentId = id;
    });

    onMount(async () => {
        const response = await fetch("items.json");
        items = await response.json();
    });

    const getFilteredItems = (id: number) => {
        if (currentId != 0) {
            return items.filter((item) => item.category.id === id);
        } else {
            return items;
        }
    };
</script>

<div class="grid-container">
    {#if items}
        {#if getFilteredItems(currentId).length > 0}
            <div class="grid-item">
                {#each getFilteredItems(currentId) as item}
                    <ItemContainer {item} />
                {/each}
            </div>
        {:else}
            <InfoContainer>
                <p>No Data</p>
            </InfoContainer>
        {/if}
    {:else}
        <p>No data found.</p>
    {/if}
</div>

<style>
    .grid-container {
        width: 100%;
    }

    .grid-item {
        height: 100%;
        position: relative;
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
</style>
