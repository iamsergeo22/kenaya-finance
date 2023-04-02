<template>
    <div class="mx-auto px-10 my-10">
      <h1 class="text-3xl font-bold mb-8">Latest Posts</h1>
  
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="border border-gray-300 rounded-lg overflow-hidden">
          <img class="w-full" src="/images/post1.jpg" alt="Post 1" />
          <div class="p-6">
            <h2 class="text-xl font-bold mb-2">Post 1 Title</h2>
            <p class="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a href="#" class="text-blue-500 hover:text-blue-700">Read More</a>
          </div>
        </div>
  
        <div class="border border-gray-300 rounded-lg overflow-hidden">
          <img class="w-full" src="/images/post2.jpg" alt="Post 2" />
          <div class="p-6">
            <h2 class="text-xl font-bold mb-2">Post 2 Title</h2>
            <p class="text-gray-700 mb-4">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <a href="#" class="text-blue-500 hover:text-blue-700">Read More</a>
          </div>
        </div>
  
        <div class="border border-gray-300 rounded-lg overflow-hidden">
          <img class="w-full" src="/images/post3.jpg" alt="Post 3" />
          <div class="p-6">
            <h2 class="text-xl font-bold mb-2">Post 3 Title</h2>
            <p class="text-gray-700 mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <a href="#" class="text-blue-500 hover:text-blue-700">Read More</a>
          </div>
        </div>
  
        <div class="border border-gray-300 rounded-lg overflow-hidden">
          <img class="w-full" src="/images/post4.jpg" alt="Post 4" />
          <div class="p-6">
            <h2 class="text-xl font-bold mb-2">Post 4 Title</h2>
            <p class="text-gray-700 mb-4">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <a href="#" class="text-blue-500 hover:text-blue-700">Read More</a>
          </div>
        </div>
  
        <div class="border border-gray-300 rounded-lg overflow-hidden">
          <img class="w-full" src="/images/post5.jpg" alt="Post 5" />
          <div class="p-6">
            <h2 class="text-xl font-bold mb-2">Post 5 Title</h2>
            <p class="text-gray-700
            mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <a href="#" class="text-blue-500 hover:text-blue-700">Read More</a>
    </div>
  </div>

  <div class="border border-gray-300 rounded-lg overflow-hidden">
    <img class="w-full" src="/images/post6.jpg" alt="Post 6" />
    <div class="p-6">
      <h2 class="text-xl font-bold mb-2">Post 6 Title</h2>
      <p class="text-gray-700 mb-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
      <a href="#" class="text-blue-500 hover:text-blue-700">Read More</a>
    </div>
  </div>
</div>
</div>
</template>
<script>
export default {
  head() {
    return {
      title: 'Blog',
      meta: [
        { hid: 'description', name: 'description', content: 'The latest blog posts.' },
      ],
    }
  },
}
</script>
<style>
/* Add any custom styles here */
</style>  