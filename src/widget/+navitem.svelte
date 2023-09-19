<script lang="ts">
    export let imageIcon: string;
    export let route: string;
    import { page } from "$app/stores";
</script>

<a
    href={route}
    style="background-color: {$page.url.pathname === route
        ? '#d3d3d3'
        : 'transparent'};"
    class="icon-container"
>
    <img
        src={imageIcon}
        alt="icon"
        class="image-icon"
        style="width: 1.3rem; height: 1.3rem;"
    />
</a>

<style></style>
