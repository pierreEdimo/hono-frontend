<script lang="ts">
    import Card from "./+card.svelte";

    export let images: string[];
    let index = 0;
    const next = () => {
        index = (index + 1) % images.length;
    };

    const previous = () => {
        index = (index - 1 + images.length) % images.length;
    };
</script>

<Card>
    <div class="slider">
        {#each [images[index]] as src (index)}
            <img {src} alt="" />
        {/each}
        <button
            class="controller prev"
            on:click|stopPropagation={previous}
            style="display: {index <= 0 ? 'none' : 'block'} ;"
            type="button"
        >
            <span class="carousel-control-icon">&lt;</span>
        </button>
        <button
            class="controller next"
            style="display: {index === images.length - 1 ? 'none' : 'block'} ;"
            on:click|stopPropagation={next}
            type="button"
        >
            <span class="carousel-control-icon">&gt;</span>
        </button>
    </div>
</Card>

<style>
    .slider {
        width: 100%;
        position: relative;
        height: calc(350px * 3 / 4);
        display: flex;
        overflow-x: hidden;
    }

    .slider img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        object-fit: cover;
    }

    .controller {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1;
        background-color: rgba(0, 0, 0, 0.5);
        color: #fff;
        text-decoration: none;
        transition: background-color 0.3s;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
    }

    .controller:hover {
        background-color: rgba(0, 0, 0, 0.8);
    }

    .carousel-control-icon {
        display: inline-block;
    }

    .controller.prev {
        left: 10px;
    }

    .controller.next {
        right: 10px;
    }

    .carousel-control-icon {
        display: inline-block;
        color: white;
        font-size: 28px;
    }
</style>
