<script lang="ts">
    import home from "../lib/images/home.png";
    import Navitem from "./+navitem.svelte";
    import chat from "../lib/images/chat.png"; 
    import heart from "../lib/images/heart.png"; 
    import settings from "../lib/images/settings.png"; 
</script>

<nav class="sidenav-wrapper">
    <header class="sidenav-header" />
    <div class="sidenav-content">
        <Navitem route="/" imageIcon={home} />
        <Navitem route="/message" imageIcon={chat}/>
        <Navitem route="/favorite" imageIcon={heart}/>
        <Navitem route="/option" imageIcon={settings}/>
    </div>
</nav>

<style>
    .sidenav-wrapper {
        width: 100%;
    }

    .sidenav-header {
        height: 3.75rem;
        width: inherit;
    }

    .sidenav-content {
        width: inherit;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
    }
</style>
