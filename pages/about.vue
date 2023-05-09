<template>
  <div class="font-poppins">
    <!-- <div class="relative w-full h-full p-24">
    <img class="absolute top-0 left-0 w-full h-full object-cover" src="https://img.freepik.com/premium-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-105129.jpg?size=626&ext=jpg" alt="Banner Image">
    <div class="relative w-full h-full flex flex-col justify-center items-center h-full bg-opacity-60">
      <h1 class="lg:text-4xl sm:text-3xl font-bold text-white">A Propos</h1>
    </div>
  </div> -->

 

  <div>
    <Breadcrumb :crumbs="crumbs" />
  </div>


    <div class="mx-auto bg-gray-300">
      <h2 class="text-3xl text-color pt-4 font-bold uppercase text-center mb-2 mt-2">A Propos</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 p-8">

        <div class="bg-white rounded-lg shadow-lg p-6">
          <h2 class="text-xl font-semibold mb-4 text-justify text-color text-2xl">Notre Histoire</h2>
          <p class="text-black mb-4 text-xl text-justify">

            KENAYA FINANCES est une société d'intermédiation financière fondée à Brazzaville le 19 mars 2019. Nous
            travaillons en partenariat avec plusieurs institutions financières pour proposer une gamme diversifiée de
            produits financiers à nos clients.

          </p>

          <p class="text-black mb-4 text-xl text-justify">
            Parmi ces produits, nous commercialisons notamment des services de transfert d'argent tels que MONEY GRAM et
            RIA, des abonnements à CANAL+, des cartes prépayées UBA et PRESF, ainsi que des services de paiement mobile
            tels que MOBILE MONEY et AIRTEL MONEY

          </p>
          <!-- <a href="#" class="text-color text-xl  hover:text-blue-800 font-semibold">Lire Plus</a> -->
        </div>
        
        <div class="">
        <img src="../assets/img/DIAPO3.jpg" alt="Image" class="w-full rounded-lg shadow-lg">
      </div>
        
      </div>
       

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 mt-12 bg-blue-800 p-8">
        <div class="">
        <img src="../assets/img/DIAPOAIRTEL.jpg" alt="Image" class="w-full rounded-lg shadow-lg">
      </div>
      <div class="bg-white rounded-lg shadow-lg pt-8 p-6">
          <h2 class="text-xl font-semibold mb-4 pt-8 text-color text-2xl">Notre Mission et Valeurs</h2>
          <p class="text-black mb-4 text-xl text-justify">


            Notre mission est de fournir à nos clients des services de transfert d'argent rapides, fiables et sécurisés, tout en offrant un service client exceptionnel et un soutien optimal. Nous sommes guidés par les valeurs fondamentales suivantes : Intégrité, Professionnalisme, Responsabilité et Innovation.


          </p>

          <!-- <a href="#" class="text-color text-xl  hover:text-blue-800 font-semibold">Lire Plus</a> -->
        </div>
      </div>

     
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 mt-8 p-8">
       
        <div class="bg-white rounded-lg shadow-lg p-6 pt-8">
          <h2 class="text-xl font-semibold mb-4 pt-8 text-color text-2xl">Notre Services</h2>
          <p class="text-black mb-4 text-xl text-justify">
            Nous offrons une gamme de services de transfert d'argent pour répondre aux besoins de nos clients, y compris : Transferts d'argent nationaux Transferts d'argent internationaux Transferts d'argent en ligne Transferts d'argent mobiles Paiements de factures Nos services sont rapides, fiables et sécurisés, et nous utilisons les dernières technologies pour garantir que votre argent est transféré rapidement et en toute sécurité.

          </p>
          <!-- <a href="#" class="text-color text-xl hover:text-blue-800 font-bold">Lire Plus</a> -->
        </div>

        <div class="">
        <img src="../assets/img/post6.jpg" alt="Image" class="w-full rounded-lg shadow-lg">
      </div>
      </div>

    </div>
  </div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb.vue';

export default {
  components: {
    Breadcrumb,
  },
  data() {
    return {
      title: 'A Propos Page',

      crumbs: [
        { name: 'A propos', path: '/about' },
        
      ],
      
    }},
  computed: {
   
  },
}
</script>

<style>
  .bg-hero {
    background-image: url("../assets/img/back-image.jpg");
    background-color: #00000081;
    background-size: cover;
  }

  .text-color {
        color: #070A52;
        /* Remove focus outline */
    }
</style>