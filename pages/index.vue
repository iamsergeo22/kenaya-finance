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
          <p class="mb-4 text-xl sm:w-full text-justify">

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

    <div class="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 p-8">

      <div class="flex justify-center">
        <div class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
          <a href="#!">
            <img class="rounded-t-lg" src="../assets/img/moneygram.jpg" alt="" />
          </a>
          <div class="p-6">
            <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Card title
            </h5>
            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button type="button"
              class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              data-te-ripple-init data-te-ripple-color="light">
              Button
            </button>
          </div>
        </div>
      </div>


      <div class="flex justify-center">
        <div class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
          <a href="#!">
            <img class="rounded-t-lg" src="../assets/img/ria.png" alt="" />
          </a>
          <div class="p-6">
            <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Card title
            </h5>
            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button type="button"
              class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              data-te-ripple-init data-te-ripple-color="light">
              Button
            </button>
          </div>
        </div>
      </div>

      <div class="flex justify-center">
        <div class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
          <a href="#!">
            <img class="rounded-t-lg" src="../assets/img/canal.png" alt="" />
          </a>
          <div class="p-6">
            <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Card title
            </h5>
            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button type="button"
              class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              data-te-ripple-init data-te-ripple-color="light">
              Button
            </button>
          </div>
        </div>
      </div>

      <div class="flex justify-center">
        <div class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
          <a href="#!">
            <img class="rounded-t-lg" src="../assets/img/moneygram.jpg" alt="" />
          </a>
          <div class="p-6">
            <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Card title
            </h5>
            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button type="button"
              class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              data-te-ripple-init data-te-ripple-color="light">
              Button
            </button>
          </div>
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