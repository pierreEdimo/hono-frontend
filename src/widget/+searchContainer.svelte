<script>
    import search from "../lib/images/loupe.png";
</script>

<form class="search-container">
    <select>
        <option>Louer</option>
        <option>Acheter</option>
    </select>
    <input type="search" placeholder="Entrer la ville ou quartier" />
    <button type="submit">
        <img
            src={search}
            alt="search-icon"
            style="height: 15px; width: 15px;"
        />
    </button>
</form>

<style>
    .search-container {
        display: flex;
        background-color: white;
        border-radius: 25px;
        padding: 4px;
        border: none;
        box-shadow: 0 2px 4px 0 rgba(0,0,0, 0.2);
    }

    input,
    select {
        background-color: transparent;
        border: none;
    }

    select {
        border-right: 1px solid #f3f3f3;
    }

    .search-container button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background-color: #f3f3f3;
        border-radius: 50%;
        height: 35px;
        width: 35px;
        cursor: pointer;
    }

    .search-container button:hover {
        background-color: #d3d3d3;
    }
</style>
