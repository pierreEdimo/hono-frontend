<script lang="ts">
    import MenuButton from "./+menuButton.svelte";
    import SearchContainer from "./+searchContainer.svelte";
    import bell from "../lib/images/bell.png";
    import loupe from "../lib/images/loupe.png";
    export let title: string;
</script>

<header class="app-header">
    <div>
        <p class="title">{title}</p>
    </div>
    <div>
        <SearchContainer />
    </div>
    <div class="menu-container">
        <button class="notification-button">
            <img
                src={bell}
                alt="bell-icon"
                style="height: 1.3rem; width:1.3rem;"
            />
        </button>
        <MenuButton />
    </div>
</header>

<header class="mobile-header">
    <div>
        <p class="title">{title}</p>
    </div>
    <div class="menu-container">
        <button class="notification-button">
            <img
                src={loupe}
                alt="search-icon"
                style="height: 20px; width: 20px; "
            />
        </button>
        <button class="notification-button">
            <img src={bell} alt="bell-icon" style="height: 20px; width:20px;" />
        </button>
        <MenuButton />
    </div>
</header>

<style>
    .title {
        font-weight: bold;
        font-size: 22px;
    }
    .app-header,
    .mobile-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        position: relative;
    }

    .notification-button {
        border-radius: 50%;
        height: 40px;
        width: 40px;
        border: none;
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    .notification-button:hover {
        background-color: #d3d3d3;
    }

    .menu-container {
        display: flex;
        height: inherit;
        align-items: center;
        gap: 1rem;
    }

    @media screen and (max-width: 767px) {
        .app-header {
            display: none;
        }
    }

    @media screen and (min-width: 768px) {
        .mobile-header {
            display: none;
        }
    }
</style>
