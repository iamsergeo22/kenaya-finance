<template>
    <div class="bg-color rounded pb-4">
        <h2 class="text-4xl text-blue-800 font-bold text-center pt-4">Nos Agences</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 pt-4">
            <div class="flex flex-col  items-center space-y-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>
                <p class="text-black font-bold">123 Main Street, Anytown USA</p>
            </div>
            <div class="flex flex-col  items-center space-y-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>
                <p class="text-black font-bold">123 Main Street, Anytown USA</p>
            </div>
            <div class="flex flex-col  items-center space-y-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>
                <p class="text-black font-bold">123 Main Street, Anytown USA</p>
            </div>
            <div class="flex flex-col  items-center space-y-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>
                <p class="text-black font-bold">123 Main Street, Anytown USA</p>
            </div>



        </div>

        <div class="col-span-4 sm:col-span-4 md:col-span-4 lg:col-span-4 xl:col-span-4 mt-4">

            <div v-show="showMore" class="grid grid-cols-1 md:grid-cols-4 gap-4 bg-color">
                <div class="flex flex-col  items-center space-y-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                        <circle cx="12" cy="10" r="3" />
                    </svg>
                    <p class="text-black font-bold">123 Main Street, Anytown USA</p>
                </div>
                <div class="flex flex-col  items-center space-y-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                        <circle cx="12" cy="10" r="3" />
                    </svg>
                    <p class="text-black font-bold">123 Main Street, Anytown USA</p>
                </div>
                <div class="flex flex-col  items-center space-y-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                        <circle cx="12" cy="10" r="3" />
                    </svg>
                    <p class="text-black font-bold">123 Main Street, Anytown USA</p>
                </div>
                <div class="flex flex-col  items-center space-y-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                        <circle cx="12" cy="10" r="3" />
                    </svg>
                    <p class="text-black font-bold">123 Main Street, Anytown USA</p>
                </div>
            </div>
        </div>


        <h2 @click="showMore = !showMore"
            class="text-xl text-blue-800 cursor-pointer mt-2 font-bold text-center flex gap-2 justify-center">
            Voir Plus
            <svg xmlns="http://www.w3.org/2000/svg" v-show="!showMore" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>



            <svg xmlns="http://www.w3.org/2000/svg" v-show="showMore" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
            </svg></h2>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                showMore: false
            };
        }
    };
</script>



<style scoped>
    .bg-color {
        background-color: #CCD5AE;
        /* Remove focus outline */
    }

    .button:hover {
  background-color: #b4e41c;
 
}
</style>