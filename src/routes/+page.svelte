<script lang="ts">
	import AppHeader from "../widget/+appHeader.svelte";
	import { onMount } from "svelte";
	import type { Category } from "../type/category";
	import CategoryItem from "../widget/+categoryItem.svelte";
	import filter from "../lib/images/filter.png";
	import list from "../lib/images/list.png";
	import { currentCategoryId } from "../stores/+category.store";
	import GridofItems from "../widget/+gridofItems.svelte";
	import FilterModal from "../widget/+filterModal.svelte";

	let showModal: boolean = false;
	let currentId: number;
	let categories: Category[];

	onMount(async () => {
		const response = await fetch("categories.json");
		categories = await response.json();
	});

	const setCurrentCategoryId = (id: number) => {
		currentCategoryId.update((x) => (x = id));
	};

	currentCategoryId.subscribe((id) => {
		currentId = id;
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<FilterModal bind:showModal>
	<p>test</p>
</FilterModal>

<div class="main-body-content">
	<div class="header-wrapper">
		<AppHeader title="Honorine" />
	</div>
	<div class="category-container">
		{#if categories && categories.length > 0}
			<div class="name-category">
				<button
					style="border-bottom: {currentId === 0
						? '2px solid #d3d3d3'
						: ''}"
					on:click={() => setCurrentCategoryId(0)}
					class="category-container-item no-border"
				>
					<img
						src={list}
						alt="menu-icon"
						style="width: 20px; height: 20px"
					/>
					Toutes
				</button>
				{#each categories as category}
					<CategoryItem {category} />
				{/each}
			</div>
		{:else}
			<p>No data found.</p>
		{/if}
		<button on:click={() => (showModal = true)} class="filter-button">
			<img src={filter} alt="filter" style="height: 18px; width: 18px;" />
			filtrer
		</button>
	</div>
	<br />
	<main class="custom-row">
		<div class="item-container">
			<!--this is the part where there will be grid of the announces -->
			<GridofItems />
		</div>
		<div class="map-container">
			<!--this is the part where i will hopefully add the map.-->
		</div>
	</main>
</div>

<style>
	.category-container-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 5px;
		font-size: 15px;
		cursor: pointer;
	}

	.category-container-item:hover {
		color: gray;
	}

	.category-container {
		margin: auto;
		width: 95%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		height: 70px;
		position: sticky;
		top: 0;
		z-index: 10;
		background-color: #f3f3f3;
	}

	.custom-row {
		width: 95%;
		margin: auto;
		display: flex;
		gap: 1rem;
	}

	.item-container {
		flex: 1;
	}

	.map-container {
		display: none;
	}

	.name-category {
		display: flex;
		align-items: center;
		flex: 1;
		gap: 1rem;
		height: inherit;
	}
	
	.filter-button {
		background-color: transparent;
		border: 1px solid #d3d3d3;
		padding: 10px 15px;
		border-radius: 5px;
		cursor: pointer;
		display: flex;
		align-items: center;
		gap: 5px;
	}

	@media screen and (max-width: 767px) {
		.name-category {
			width: 10px;
			overflow: auto;
		}
	}
</style>
