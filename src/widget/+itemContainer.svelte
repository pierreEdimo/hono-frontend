<script lang="ts">
    import type { Item } from "../type/item";
    import here from "../lib/images/you-are-here.png";
    import Carousel from "./+carousel.svelte";
    import ActionButton from "./+actionButton.svelte"; 
    export let item: Item; 
</script>

<ActionButton click={() => window.location.href = `/items/${item.id}`}>
    <div class="item-container">
        <Carousel images={item.imageList} />
        <div style="width: 100%; display:flex; justify-content: flex-start">
            <h3 class="title-container" style="margin: 0">
                {item.title}
            </h3>
        </div>
        <div class="info-container" style="align-items: center;display:flex;">
            <img src={here} alt="here" style="width: 15px; height:15px" />
            {item.address}, {item.city}
        </div>
        <div style="display: flex; width: 100%; gap: 10px; ">
            <div class="info-container">
                {#if item.sellingPrice === null}
                    <p style="font-weight: 500;">
                        <span>loyer:</span>
                        {item.rentPrice}
                    </p>
                {:else}
                    <p style="font-weight: 500;">
                        <span>prix: </span>
                        {item.sellingPrice}
                    </p>
                {/if} FCFA
            </div>
            <div class="info-container">
                {item.surface} m2
            </div>
            <div class="info-container">
                {#if item.category.name === "Immeuble"}
                    <p>{item.floorsNumber} <span>etages</span></p>
                {:else if item.numberOfRooms}
                    <p>{item.numberOfRooms} <span>pieces</span></p>
                {/if}
            </div>
        </div>
    </div>
</ActionButton>

<style>
    .title-container {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .info-container {
        display: flex;
        gap: 3px;
        font-size: 15px;
    }

    .item-container {
        height: 350px;
    }

    ::-webkit-scrollbar {
        display: none;
    }

    ::-webkit-scrollbar-thumb {
        display: none;
    }
</style>
