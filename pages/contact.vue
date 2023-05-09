<template>
    <div class="font-poppins">
        <div class="bg-image py-32">
            <div class="lg:mx-24 p-8 py-4">
                <h2 class="lg:text-4xl sm:text-3xl text-white font-bold uppercase pb-4 text-center mb-8">Contactez-Nous</h2>

            </div>
        </div>
        <div class="bg-gray-200 shadow-xl lg:rounded-md lg:mx-12 transform -translate-y-40 bottom-0 left-0 px-8 py-12">
            <div class="lg:flex lg:flex-row sm:flex sm:flex-col lg:justify-betwen lg:gap-8">

                <div class="text-lg sm:text-lg lg:w-2/3">

                    <form action="#" class="mb-8">
                        <div class="flex flex-wrap mb-6 -mx-4">
                            <div class="w-full md:w-1/2 mb-6 md:mb-0 px-4">
                                <label class="block mb-2 text-black font-bold" for="name">
                                    Noms
                                </label>

                                <input type="text" name="name" id="name" placeholder="Jon Snow"
                                    class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4"
                                    required>
                            </div>

                            <div class="w-full px-4 md:w-1/2">
                                <label class="block text-black font-bold mb-2" for="email">
                                    Email Addresse
                                </label>

                                <input type="email" name="email" id="email" placeholder="email@example.com"
                                    class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4"
                                    required>
                            </div>
                        </div>

                        <div class="flex flex-wrap mb-6 -mx-4">
                            <div class="w-full md:w-1/2 mb-6 md:mb-0 px-4">
                                <label class="block mb-2 text-black font-bold" for="number">
                                    Numero de telephone
                                </label>

                                <input type="number" name="number" id="number" placeholder="+228 90046079"
                                    class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4"
                                    required>
                            </div>

                            <div class="w-full px-4 md:w-1/2">
                                <label class="block text-black font-bold mb-2" for="email">
                                    Sujet
                                </label>

                                <input type="email" name="email" id="email" placeholder="Sujet"
                                    class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4"
                                    required>
                            </div>
                        </div>


                        <div class="w-full mb-8">
                            <label class="block text-black font-bold mb-2" for="message">
                                Message
                            </label>

                            <textarea id="message" rows="5" name="message"
                                class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none appearance-none focus:border-green-700 mb-2 px-4 py-4"
                                placeholder="Enter your message here." required></textarea>
                        </div>

                        <div class="flex justify-start w-full">
                            <input type="submit" value="Envoyer"
                                class="block bg-color hover:bg-blue-800 text-white text-sm font-semibold tracking-wide uppercase shadow rounded cursor-pointer px-6 py-3">
                        </div>
                    </form>
                </div>

                <!-- Map section -->

                <div>
                    <div class="bg-gray-100 rounded-lg shadow-lg px-4 pt-4 items-center">
                        <div class="flex flex-col gap-3 pb-4">
                            <h1 class="font-bold text-2xl text-color">Contact details:</h1>

                            <span class="flex gap-2 text-md">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home"
                                    class="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 576 512">
                                    <path fill="currentColor"
                                        d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z">
                                    </path>
                                </svg>123 Boulevard, Brazzaville, Congo</span>
                            <span class="flex gap-2 text-md">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 mr-4" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" zoomAndPan="magnify" viewBox="0 0 30 30.000001" height="40" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="id1"><path d="M 3.460938 6.5625 L 26.539062 6.5625 L 26.539062 24.707031 L 3.460938 24.707031 Z M 3.460938 6.5625 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#id1)"><path fill="rgb(6.269836%, 5.879211%, 5.099487%)" d="M 24.230469 11.101562 L 15 16.769531 L 5.769531 11.101562 L 5.769531 8.832031 L 15 14.503906 L 24.230469 8.832031 Z M 24.230469 6.5625 L 5.769531 6.5625 C 4.492188 6.5625 3.472656 7.578125 3.472656 8.832031 L 3.460938 22.441406 C 3.460938 23.695312 4.492188 24.707031 5.769531 24.707031 L 24.230469 24.707031 C 25.507812 24.707031 26.539062 23.695312 26.539062 22.441406 L 26.539062 8.832031 C 26.539062 7.578125 25.507812 6.5625 24.230469 6.5625 " fill-opacity="1" fill-rule="nonzero"/></g></svg>info@moneytransferagency.com</span>
                            <span class="flex gap-2 text-md">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone"
                                    class="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512">
                                    <path fill="currentColor"
                                        d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z">
                                    </path>
                                </svg> +242 065918117</span>

                            <span class="flex gap-4 text-md">
                                <svg fill="#000000" viewBox="0 0 32 32" class="w-10" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>time</title> <path d="M11.188 27.188c-6.188 0-11.188-5-11.188-11.188s5-11.219 11.188-11.219 11.219 5.031 11.219 11.219-5.031 11.188-11.219 11.188zM11.188 7.563c-4.625 0-8.375 3.813-8.375 8.438s3.75 8.375 8.375 8.375 8.438-3.75 8.438-8.375-3.813-8.438-8.438-8.438zM14.219 20.281l-3.969-2.906c-0.281-0.219-0.563-0.688-0.563-1.063v-6.344c0-0.344 0.313-0.625 0.688-0.625h1.313c0.344 0 0.625 0.281 0.625 0.625v5c0 0.375 0.281 0.844 0.563 1.063l2.906 2.094c0.281 0.219 0.344 0.656 0.125 0.938l-0.781 1.063c-0.219 0.281-0.625 0.344-0.906 0.156z"></path> </g></svg>
                                Monday - Friday: 9am - 5pm, Saturday: 10am - 2pm, Sunday: Closed</span>


                        </div>
                    </div>


                </div>



            </div> <!-- end hero -->

        </div>

        <div class="rounded-lg">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.417412837234!2d-73.98579178521707!3d40.74844194225139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259d75c5f5c5d%3A0x93a74d47b46dbd65!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1635024562182!5m2!1sen!2sus"
                width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                videoSrc: 'https://web.whatsapp.com/whatsapp-webclient-login_c09223f0813e7c3adc16476cba2a5d0d.mp4'
            }
        }
    }
</script>

<style scoped>
    .bg-image {
        background-image: url(../assets/img/image/331426255_1411753576305242_272167460667299199_n.jpg);
        background-size: top;

    }

    .bg-color {
        background-color: #070A52;
        /* Remove focus outline */
    }

    .text-color {
        color: #070A52;
        /* Remove focus outline */
    }
</style>