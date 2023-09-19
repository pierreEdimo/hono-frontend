<script lang="ts">
    import menu from "../lib/images/menu.png";
    import person from "../lib/images/profile-user.png";
    import ListTile from "./+listTile.svelte";
    let isOpen: boolean = false;
    
    const navigateTo = (route) => {
        window.location.href = route; 
    }
</script>

<div class="menu-container">
    <button on:click={() => (isOpen = !isOpen)} class="button-container">
        <div style="width: 18px"></div>
        <img src={menu} alt="menu-icon" style="width: 15px; height: 15px" />
        <img
            src={person}
            alt="person-icon"
            style="width: 18px; height:  18px;"
        />
    </button>
    <div style="display: {isOpen ? 'block' : 'none'}" class="menu">
        <ListTile
            title={"Se Connecter"}
            onClick={() => navigateTo('/login')}
        />
        <ListTile
            title={"S'enregistrer"}
            onClick={() => navigateTo('/logup')}
        />
        <hr />
        <ListTile
            title={"Mettre ses annonces"}
            onClick={() => console.log('Hello World')}
        />
        <ListTile
            title={"Information"}
            onClick={() => console.log('Hello World')}s
        />
    </div>
</div>

<style>
    .menu-container {
        position: relative;
    }

    .menu {
        display: none;
        position: absolute;
        width: 300px;
        height: auto;
        right: 0;
        margin-top: 10px;
        z-index: 1000;
        background-color: white;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        padding: 3px 0 3px 0;
    }

    .button-container {
        background: white;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        justify-content: center;
        padding: 10px 5px;
        border-radius: 25px;
        border: none;
        cursor: pointer;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    }

    .button-container:hover {
        background-color: #d3d3d3;
    }
</style>
