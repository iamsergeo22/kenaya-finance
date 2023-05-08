<template>
    <nav class="flex flex-wrap items-center font-medium text-gray-500">
      <ol class="flex flex-wrap items-center list-none pt-3 pb-3 pr-4 space-x-2 ml-4">
        <li>
          <nuxt-link
            class="text-black hover:text-gray-500 hover:no-underline transition duration-150 ease-in-out"
            :to="{ path: '/' }"
          >
            Home
          </nuxt-link>
        </li>
        <li>
          <span class="text-gray-400">/</span>
        </li>
        <li v-for="(crumb, index) in crumbs" :key="index">
          <nuxt-link
            class="text-gray-600 hover:text-gray-700 hover:no-underline transition duration-150 ease-in-out"
            :to="{ path: crumb.path }"
          >
            {{ crumb.name }}
          </nuxt-link>
          <span v-if="index < crumbs.length - 1" class="text-gray-400">/</span>
        </li>
      </ol>
    </nav>
  </template>
  
  <script>
  export default {
    props: {
      crumbs: {
        type: Array,
        required: true,
      },
    },
  };
  </script>


<style scoped>
nuxt-link {
  text-decoration: none;
}
nuxt-link:hover {
  text-decoration: underline;
}

</style>