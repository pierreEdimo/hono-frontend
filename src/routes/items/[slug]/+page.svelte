<script lang="ts">
    import RoundedButton from '../../../widget/+roundedButton.svelte';
    import InnerLayout from '../../../widget/+innerLayout.svelte';
    import {page} from '$app/stores';
    import {onMount} from "svelte";
    import type {Item} from "../../../type/item";
    import axios from 'axios';
    import Row from '../../../widget/+row.svelte';
    import Card from '../../../widget/+card.svelte';
    import AvatarContainer from '../../../widget/+avatarContainer.svelte';
    import UserIcon from '../../../lib/images/user_icon.png';
    import Placeholder from '../../../lib/images/placeholder.png';
    import {FormatterService} from "../../../services/formatter.service";
    import Check from '../../../lib/images/tick.png';
    import ImageGrid from '../../../widget/+imageGrid.svelte'; 

    let id = $page.params.slug;
    let item: Item;

    const formatterService = new FormatterService();

    onMount(async () => {
        const response = await axios.get<Item>(`../../${id}.json`);
        item = await response.data;
    })
</script>

<div class="header-wrapper">
    <div class="inner-header">
        <RoundedButton click={() => window.history.back()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left"
                 viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
        </RoundedButton>
    </div>
</div>
<InnerLayout>
    {#if !item}
        <p>No data</p>
    {:else }
        <h2 style="font-weight: bold;">{item.title}</h2>
        <div style="display: flex; justify-content: space-between; margin-bottom: 10px">
            <p>a {item.address}, {item.city}, {item.country}</p>
            <button class="action-button">
                Enregistrer
            </button>
        </div>
        <ImageGrid imageUrls={item.imageList}/>
        <br/>
        <Row gap="20px">
            <div style="flex: 1">
                <div>
                    <h2 style="font-weight: bold; margin: 0">{item.category.name}</h2>
                    <br/>
                    <div class="info-flex">
                        <div class="info-column">
                            {#if item.option.name === 'louer'}
                                <p class="item-price">{item.rentPrice} FCFA</p>
                                <p class="info-description">Loyer par mois</p>
                            {:else }
                                <p class="item-price">{item.sellingPrice} FCFA</p>
                                <p class="info-description">Prix de vente</p>
                            {/if}
                        </div>
                        <div class="info-column">
                            <p>{item.surface} m²</p>
                            <p class="info-description">Surface habitable env.</p>
                        </div>
                        <div class="info-column">
                            {#if item.numberOfRooms !== null}
                                <p>{item.numberOfRooms}</p>
                                <p class="info-description">Pieces</p>
                            {/if}
                        </div>
                        <div class="info-column">
                            {#if item.floorsNumber !== null}
                                <p>{item.floorsNumber}</p>
                                <p class="info-description">Etages</p>
                            {/if}
                        </div>
                    </div>
                </div>
                <br/>
                <div class="item-info">
                    <h3>Adresse</h3>
                    <div style="display: flex; gap: 20px; align-items: center">
                        <img src={Placeholder} style="height: 40px; width: 40px" alt="icon"/>
                        <div>
                            <p>{item.address}</p>
                            <p style="font-weight: bold">{item.city}</p>
                        </div>
                    </div>
                </div>
                <br/>
                <div class="item-info">
                    <h3>Description de l'objet</h3>
                    <p>{item.description}</p>
                </div>
                <br/>
                <div class="item-info">
                    <h3>Prix et couts</h3>
                    <div style="display: flex; justify-content:space-between; align-items: center;">
                        {#if item.option.name === 'louer'}
                            <p>Loyer:</p>
                            <p style="font-weight: bold">{item.rentPrice} FCFA</p>
                        {:else}
                            <p>Prix d'achat:</p>
                            <p style="font-weight: bold">{item.sellingPrice} FCFA</p>
                        {/if}
                    </div>
                    <br/>
                    {#if item.caution != null}
                        <div style="display: flex; justify-content:space-between; align-items: center;">
                            <p>Caution:</p>
                            <p style="font-weight: bold">{item.caution} FCFA</p>
                        </div>
                    {/if}
                </div>
                <br/>
                <div class="item-info">
                    <h3>Informations additionnelles</h3>
                    <div style="display: flex; align-items: center; justify-content: space-between">
                        <div class="info-column">
                            <p class="info-description">Categorie</p>
                            <p>{item.category.name}</p>
                        </div>
                        <div>
                            {#if item.category.name === 'Appartement'}
                                <p class="info-description">Situation du logement</p>
                                <p>1er Etage</p>
                            {:else if item.category.name === 'Maison'}
                                <p class="info-description">Annee de construction</p>
                                <p>1990</p>
                            {/if}
                        </div>
                        {#if item.availabilityDate != null}
                            <div class="info-column">
                                <p class="info-description">Disponible</p>
                                <p>{formatterService.customValueFormatterForDate(item.availabilityDate)}</p>
                            </div>
                        {/if}
                    </div>
                    <br/>
                    <div>
                        <div style="display: flex; gap: 10px; align-items: center">
                            <img src={Check} style="height: 18px; width: 18px" alt="icon"/>
                            <p>Lorem</p>
                        </div>
                        <div style="display: flex; gap: 10px; align-items: center">
                            <img src={Check} style="height: 18px; width: 18px" alt="icon"/>
                            <p>Lorem</p>
                        </div>
                        <div style="display: flex; gap: 10px; align-items: center">
                            <img src={Check} style="height: 18px; width: 18px" alt="icon"/>
                            <p>Lorem</p>
                        </div>
                        <div style="display: flex; gap: 10px; align-items: center">
                            <img src={Check} style="height: 18px; width: 18px" alt="icon"/>
                            <p>Lorem</p>
                        </div>
                        <div style="display: flex; gap: 10px; align-items: center">
                            <img src={Check} style="height: 18px; width: 18px" alt="icon"/>
                            <p>Lorem</p>
                        </div>
                        <div style="display: flex; gap: 10px; align-items: center">
                            <img src={Check} style="height: 18px; width: 18px" alt="icon"/>
                            <p>Lorem</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contact-container">
                <div class="sticky-container">
                    <Card style="
                background: white; 
                position: relative;
                height:150px;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                gap: 20px;
                display: flex;
                padding: 20px">
                        <div style="position: absolute; top: 25px; left: 50%; transform: translate(-50%, -50%)">
                            <AvatarContainer>
                                <img src={UserIcon} alt="icon" style="width: 32px; height: 32px">
                            </AvatarContainer>
                        </div>
                        <p style="margin-top: 70px">Pierre Edimo NKoe</p>
                        <button class="contact-button">
                            Contacter le Prestataire
                        </button>
                    </Card>
                </div>
            </div>
        </Row>
    {/if}
</InnerLayout>


<style lang="scss">
  .inner-header {
    height: inherit;
    display: flex;
    align-items: center;
  }

  .action-button {
    background: #f3f3f3;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
  }

  .action-button:hover {
    background: #d3d3d3;
  }

  .contact-button {
    padding: 14px 10px;
    width: 100%;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    background: #f3f3f3;
  }

  .contact-button:hover {
    background: #d3d3d3;
  }

  .info-flex {
    display: flex;
    width: 100%;
    gap: 20px;
  }

  .info-column {
    display: flex;
    flex-direction: column;
  }

  .item-price {
    font-weight: bold;
  }

  .info-description {
    font-size: 14px;
    color: gray;
  }

  .item-info {
    background: white;
    padding: 20px 40px;
    border-radius: 5px;
  }

  .contact-container {
    margin-top: 20px;
    width: 320px;
  }
  
  .sticky-container{
    position: sticky;
    top: 20px;
  }
</style>