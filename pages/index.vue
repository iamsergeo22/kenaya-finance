<template>
  <div class="scrollable-container">


    <div class="">
      <div>
        <Slider />
      </div>
    </div>


    <div class="mx-auto flex flex-col px-8 sm:flex-row justify-between py-16 gap-8">

      <div class="sm:text-left items-center">
        <div class="lg:pt-8">
          <h2 class="text-4xl text-blue-800 font-bold pb-2">A Propos de Nous</h2>
          <p class="mb-4 text-xl sm:w-full text-justify lg:w-3/4">

            Nous sommes une Société de transfert de fonds et bureau de change.
            Notre mission est de fournir un service de transfert d'argent rapide, fiable et abordable à nos clients, en
            leur offrant une expérience transparente et sécurisée.Notre objectif est de simplifier les transferts
            d'argent pour nos clients, en leur offrant une solution pratique et facile à utiliser, peu importe où ils se
            trouvent dans le monde.

          </p>


          <div class="mt-4">
            <nuxt-link to="/transaction"
              class="bg-blue-900 hover:bg-green-500 hover:no-underline hover:text-white shadow-2xl rounded-lg px-4 py-3 text-white text-xl font-bold transition-colors duration-300">
              Lancer une transaction
            </nuxt-link>
          </div>

        </div>




      </div>

      <div class="">
        <img src="../assets/img/diplomate.jpg" alt="Image" class="w-full rounded-lg shadow-lg">
      </div>


    </div> <!-- end hero -->

    <h2 class="text-4xl text-blue-800 font-bold text-center">Nos Produits</h2>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 p-8">
      <div class="border rounded shadow-md hover:shadow-lg transition duration-300">
        <img class="rounded-lg shadow-lg" src="../assets/img/MGI__NEW_LOGO_v1.jpg" alt="" />
        <div class="p-4">

          <h2 class="font-bold text-2xl">MoneyGram</h2>
          <p class="mt-2 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in justo nec eros ultricies
            cursus id eu ex. Sed vel sapien tincidunt, pretium ipsum sit amet, aliquet velit.</p>
        </div>
        <div class="p-4">
          <nuxt-link to="/transaction" class="bg-blue-900 hover:no-underline py-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Lancer votre demande</nuxt-link>
        </div>
      </div>
      <div class="border rounded shadow-md hover:shadow-lg transition duration-300">
        <img class="rounded-lg shadow-lg" src="../assets/img/ria-money-transfer.jpg" alt="" />

        <div class="p-4">
          <h2 class="font-bold text-2xl">Ria</h2>
          <p class="mt-2 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in justo nec eros ultricies
            cursus id eu ex. Sed vel sapien tincidunt, pretium ipsum sit amet, aliquet velit.</p>
        </div>
        <div class="p-4">
          <nuxt-link to="/transaction" class="bg-blue-900 hover:no-underline py-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Lancer votre demande</nuxt-link>
        </div>
      </div>
      <div class="border rounded shadow-md hover:shadow-lg transition duration-300">
        <img class="rounded-lg shadow-lg" src="../assets/img/canal.jpg" alt="" />

        <div class="p-4">
          <h2 class="font-bold text-2xl">Canal +</h2>
          <p class="mt-2 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in justo nec eros ultricies
            cursus id eu ex. Sed vel sapien tincidunt, pretium ipsum sit amet, aliquet velit.</p>
        </div>
        <div class="p-4">
          <nuxt-link to="/transaction" class="bg-blue-900 hover:no-underline py-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Lancer votre demande</nuxt-link>
        </div>
      </div>
      <div class="border rounded shadow-md hover:shadow-lg transition duration-300">
        <img class="rounded-lg shadow-lg" src="../assets/img/visa.jpg" alt="" />

        <div class="p-4">
          <h2 class="font-bold text-2xl">Visa</h2>
          <p class="mt-2 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in justo nec eros ultricies
            cursus id eu ex. Sed vel sapien tincidunt, pretium ipsum sit amet, aliquet velit.</p>
        </div>
        <div class="p-4">
          <nuxt-link to="/transaction" class="bg-blue-900 hover:no-underline py-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Lancer votre demande</nuxt-link>
        </div>
      </div>
    </div>





  </div>
</template>

<script>
  export default {}
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