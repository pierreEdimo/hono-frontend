<script lang="ts">
    import Center from "../../widget/+center.svelte";
    import Card from '../../widget/+card.svelte';
    import CustomInput from '../../widget/+customInput.svelte'; 
    import Row from '../../widget/+row.svelte';
    import RoundedButton from '../../widget/+roundedButton.svelte'; 
</script>

<Center>
    <Card>
        <div class="logup-container">
            <div class="card-header">
                <div class="card-header-content">
                    <div>
                        <h3 style="margin: 0">Creer un compte</h3>
                        <p style="font-size: 13px; color: gray">C'est facile et rapide</p>
                    </div>
                    <RoundedButton click={() => window.history.back()} class>
                        <p style="font-size: 22px">&#10005;</p>
                    </RoundedButton>
                </div>
            </div>
            <form class="logup-form">
                <Row gap="10px">
                    <CustomInput style="width: 50%" placeholder="Nom" inputType="text"/>
                    <CustomInput style="width: 50%" placeholder="Prenom" inputType="text"/>
                </Row>
                <CustomInput placeholder="E-mail" inputType="email"/>
                <CustomInput placeholder="Mot de passe" inputType="password"/>
                <CustomInput placeholder="Répéter le mot de passe" inputType="password"/>
                <p style="font-size: 12px">En cliquant sur "S'inscrire", tu acceptes nos conditions d'utilisation. Notre politique de confidentialité t'explique comment nous collectons, utilisons et partageons tes données. Notre politique en matière de cookies explique comment nous utilisons les cookies et les technologies similaires. Il se peut que nous t'envoyions des notifications par SMS, auxquelles tu peux te désabonner à tout moment.</p>
                <div>
                    <button type="submit" class="action-button" style="float: right">
                        s'inscrire
                    </button>
                </div>
            </form>
        </div>
    </Card>
</Center>

<style>
    .logup-container{
        width: 450px;
    }
    
    .card-header {
        padding: 10px;
        border-bottom: 1px solid #d3d3d3;
    }

    .logup-form {
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    
    .action-button{
        padding: 14px 10px;
        background: #f3f3f3;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    
    .action-button:hover{
        background: #d3d3d3;
    }
    
    .card-header-content{
        display: flex;
        justify-content: space-between;
    }
</style>