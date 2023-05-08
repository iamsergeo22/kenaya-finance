<template>
    <div class="relative h-screen flex items-center justify-center">
      <div
        class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-transparent"
      ></div>
      <img
        :src="imageUrl"
        alt="Banner Image"
        class="object-cover w-full h-full opacity-50 filter grayscale invert"
      />
      <div class="relative z-10 text-center">
        <h1 class="text-white text-4xl font-bold tracking-wider mb-4">{{ title }}</h1>
        
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
      subtitle: {
        type: String,
        required: true,
      },
      imageUrl: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  