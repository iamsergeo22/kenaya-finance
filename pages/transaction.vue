<template>
  <div class="">
    <div class="relative w-full h-full p-24">
    <img class="absolute top-0 left-0 w-full h-full object-cover" src="https://img.freepik.com/premium-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-105129.jpg?size=626&ext=jpg" alt="Banner Image">
    <div class="relative w-full h-full flex flex-col justify-center items-center h-full bg-opacity-60">
      <h1 class="text-4xl font-bold text-white">Transactions</h1>
    </div>
  </div>

 

  <div>
    <Breadcrumb :crumbs="crumbs" />
  </div>

  <div class="mx-auto mt-3 pt-4 bg-gray-300">
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfISEwN6tyzKh0VxEEXpc1zk-AV7GMmAGwrCsGA9-65y_GfSA/viewform?embedded=true" width="100%" height="950" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>  </div>

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
      title: 'Transactions Page',

      crumbs: [
        { name: 'Transactions', path: '/transaction' },
        
      ],
      
    }},
  computed: {
   
  },
}
</script>