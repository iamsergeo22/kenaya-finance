<template>
  <div class="scrollable-container font-poppins">


    <div class="">
      <div>
        <Slider />
      </div>
    </div>


    <div class="mx-auto flex flex-col px-8 sm:flex-row justify-between py-16 gap-8">

      <div class="sm:text-left items-center">
        <div class="lg:pt-8">
          <h2 class="text-4xl text-color font-bold pb-2">A Propos de Nous</h2>
          <p class="mb-4 text-xl sm:w-full text-justify lg:w-3/4">

            Nous sommes une Société de transfert de fonds et bureau de change.
            Notre mission est de fournir un service de transfert d'argent rapide, fiable et abordable à nos clients, en
            leur offrant une expérience transparente et sécurisée. Notre objectif est de simplifier les transferts
            d'argent pour nos clients, en leur offrant une solution pratique et facile à utiliser, peu importe où ils se
            trouvent dans le monde.

          </p>


          <div class="mt-4">
            <nuxt-link to="/transaction"
              class="bg-color button hover:no-underline hover:text-white shadow-2xl rounded-lg px-4 py-3 text-white text-xl font-bold transition-colors duration-300">
              Lancer une transaction
            </nuxt-link>
          </div>

        </div>




      </div>

      <div class="">
        <img src="../assets/img/diplomate.jpg" alt="Image" class="w-full rounded-lg shadow-lg">
      </div>


    </div> <!-- end hero -->

    <h2 class="text-4xl text-color font-bold text-center bg-gray-200 pt-4">Nos Produits</h2>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 p-8 bg-gray-200">
      <div class="border rounded bg-white hover:shadow-lg">
        <img class="rounded-lg shadow-lg" src="../assets/img/MGI__NEW_LOGO_v1.jpg" alt="" />
        <div class="p-4">

          <h2 class="font-bold text-3xl text-color">MoneyGram</h2>
          <p class="mt-2 text-justify">
            MoneyGram est un service de transfert d'argent rapide et sûr pour envoyer de l'argent à des proches et des amis dans le monde entier.
          </p>
        </div>
        <div class="p-4">
          <nuxt-link to="/transaction" class="bg-color hover:no-underline py-3 button text-white font-bold py-2 px-3 rounded-lg">Lancer votre demande</nuxt-link>
        </div>
      </div>
      <div class="border rounded bg-white hover:shadow-lg">
        <img class="rounded-lg shadow-lg" src="../assets/img/ria-money-transfer.jpg" alt="" />

        <div class="p-4">
          <h2 class="font-bold text-3xl text-color">Ria</h2>
          <p class="mt-2 text-justify">
            RIA est un service de transfert d'argent international rapide et sûr qui permet d'envoyer de l'argent à des proches dans le monde entier.
          </p>
        </div>
        <div class="p-4">
          <nuxt-link to="/transaction" class="bg-color hover:no-underline py-3 button text-white font-bold py-2 px-3 rounded-lg">Lancer votre demande</nuxt-link>
        </div>
      </div>
      <div class="border bg-white rounded hover:shadow-lg">
        <img class="rounded-lg shadow-lg" src="../assets/img/canal.jpg" alt="" />

        <div class="p-4">
          <h2 class="font-bold text-3xl text-color">Canal +</h2>
          <p class="mt-2 text-justify">
            Faites vos abonnenments et Réabonnements Canal dans nos agences et béneficier des programmes exclusifs de Canal+          </p>
        </div>
        <div class="p-4">
          <nuxt-link to="/transaction" class="bg-color hover:no-underline py-3 button text-white font-bold py-2 px-3 rounded-lg">Lancer votre demande</nuxt-link>
        </div>
      </div>
      <div class="border bg-white rounded hover:shadow-lg">
        <img class="rounded-lg shadow-lg" src="../assets/img/visa.jpg" alt="" />

        <div class="p-4">
          <h2 class="font-bold text-3xl text-color">Visa</h2>
          <p class="mt-2 text-justify">
            Rechargé votre carte Visa dans nos agences et profiter des services financiers digitales de votre choix          </p>
        </div>
        <br>
        <div class="p-4">
          <nuxt-link to="/transaction" class="bg-color hover:no-underline py-3 button font-normal	 text-white font-bold py-2 px-3 rounded-lg">Lancer votre demande</nuxt-link>
        </div>
      </div>
    </div>


   <div class="pb-4">
    <agences></agences>
   </div>



  </div>
</template>

<script>
import Agences from '../components/Agences.vue'
  export default {
  components: { Agences },}
</script>


<style scoped>
  .bg-hero {
    background-image: url("../assets/img/DIAPO2.jpg");
    background-size: cover;
  }

  .bg-color {
        background-color: #070A52;
        /* Remove focus outline */
    }

    .text-color {
        color: #070A52;
        /* Remove focus outline */
    }

  
  i {
    font-size: 1.5rem;
  }

  .button:hover {
    background-color: #b4e41c;
    /* Remove focus outline */
  }
</style>