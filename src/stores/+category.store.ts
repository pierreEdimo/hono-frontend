import { writable } from "svelte/store";

const currentCategoryId = writable(0);

export { currentCategoryId }; 