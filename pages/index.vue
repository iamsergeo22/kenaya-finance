<template>
  <div class="scrollable-container">
    
    
    <div class="">
      <div>
      <Slider />
    </div>
    </div>


    <div class="container mx-auto flex flex-col sm:flex-row justify-between py-16 gap-8">

      <div class="sm:text-left items-center">
        <div class="lg:pt-8">
          <h2 class="text-4xl text-blue-800 font-bold pb-2">A Propos de Nous</h2>
          <p class="mb-4 text-xl sm:w-full text-justify">

            Nous sommes une Société de transfert de fonds et bureau de change.
            Notre mission est de fournir un service de transfert d'argent rapide, fiable et abordable à nos clients, en
            leur offrant une expérience transparente et sécurisée.Notre objectif est de simplifier les transferts
            d'argent pour nos clients, en leur offrant une solution pratique et facile à utiliser, peu importe où ils se
            trouvent dans le monde.

          </p>


          <div class="mt-4">
            <nuxt-link to="/transaction"
              class="bg-blue-900 hover:bg-green-500 hover:no-underline hover:text-white shadow-2xl rounded-lg px-8 py-2 text-white text-xl font-bold transition-colors duration-300">
              Lancer une transaction
            </nuxt-link>
          </div>

        </div>


      </div>

      <div class="">
        <img src="../assets/img/diplomate.jpg" alt="Image" class="w-full rounded-lg shadow-lg">
      </div>


    </div> <!-- end hero -->

  </div>
</template>

<script>
  export default {
  }
</script>


<style scoped>
  .bg-hero {
    background-image: url("../assets/img/DIAPO2.jpg");
    background-size: cover;
  }

  .color {
    background-color: rgb(163 230 53);
  }

  i {
    font-size: 1.5rem;
  }

  button:focus {
    outline: none;
    /* Remove focus outline */
  }



</style>