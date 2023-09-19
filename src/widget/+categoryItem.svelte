<script lang="ts">
    import type { Category } from "../type/category";
    import { currentCategoryId } from "../stores/+category.store";

    export let category: Category;
    let categoryId: number;

    currentCategoryId.subscribe((id) => {
        categoryId = id;
    });

    const setCategoryId = (categoryId: number) => {
        currentCategoryId.update((x) => (x = categoryId));
    };
</script>

<button
    style="border-bottom: {categoryId === category.id
        ? '2px solid #d3d3d3'
        : ''}"
    class="category-container no-border"
    on:click={() => setCategoryId(category.id)}
>
    <img src={category.imageUrl} alt="category" />
    {category.name}
</button>

<style>
    .category-container img {
        height: 20px;
        width: 20px;
    }

    .category-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        cursor: pointer;
        font-size: 15px;
    }

    .category-container:hover {
        color: gray;
    }
</style>
