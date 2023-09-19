<script lang="ts">
    import Center from '../../widget/+center.svelte';
    import Row from "../../widget/+row.svelte";
    import Card from "../../widget/+card.svelte";
    
    const navigateToLogup = () => {
        window.location.href = '/logup';
    }
</script>

<Center>
   <div class="login-container">
       <Row alignment="center" gap="20px">
          <div style="flex: 1">
              <h3>Honorine</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
          </div>
           <div style="flex: 1">
               <Card>
                   <form on:submit={()=> window.location.href="/"} class="login-form">
                       <input type="email" placeholder="E-mail" required>
                       <input type="password" placeholder="Mot de passe" required>
                       <button type="submit">Se Connecter</button>
                       <a href="/">mot de passe oublie ?</a>
                       <hr/>
                       <button on:click={navigateToLogup} type="button">Creer votre compte</button>
                   </form>
               </Card>
           </div>
       </Row>
   </div>
</Center>

<style>
    .login-container{
        width: 900px;
    }
    
    .login-form{
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 10px;
    }
    
    .login-form input{
        padding: 14px 10px;
        border: 1px solid #d3d3d3;
        border-radius: 5px;
    }
    
    .login-form button{
        padding: 14px 10px;
        border: none;
        background: #f3f3f3;
        cursor: pointer;
        font-weight: bold;
    }
    
    .login-form button:hover{
        background: #d3d3d3;
    }
</style>