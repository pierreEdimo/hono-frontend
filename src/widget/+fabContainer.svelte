<script></script>

<div class="fab-container">
    <slot></slot>
</div>

<style>
    .fab-container{
        position: fixed;
        right: 60px;
        bottom: 90px;
    }

    @media screen and (max-width:600px){
        .fab-container{
            right: 15px;
        }
    }
</style>