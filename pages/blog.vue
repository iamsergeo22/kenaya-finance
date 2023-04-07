<template>
  <div class="mx-auto py-16 px-16">
    <div class="post-container grid gap-8 grid-cols-1 md:grid-cols-3">
      <div v-for="(post,index) in posts" :key="index" class="border-gray-400 border-b shadow-2xl rounded">
        <img :src=post.image :alt="post.title" class="w-full rounded-lg shadow-lg mb-3">
        <h2 class="text-3xl font-bold mb-2 px-4">
          <nuxt-link :to="`/posts/${post.slug}`" class="text-blue-600">{{ post.title }}</nuxt-link>
        </h2>
        <div class="text-copy-secondary mb-4 text-md font-bold italic px-4">
          <span>{{ post.date }}</span>
        </div>

        <div class="text-lg mb-4 text-justify px-4">
          {{ post.summary }}
        </div>

        <div class="mb-2 px-4">
          <nuxt-link :to="`/posts/${post.slug}`" class="font-bold uppercase">Read More</nuxt-link>
        </div>
      </div> <!-- end post -->
    </div>

    <div class="flex justify-between text-xl items-center mt-12">
      <a :href="previousPage"
        :class="{ 'text-gray-400 hover:text-gray-400 cursor-not-allowed': !showPreviousPage }">&larr; Prev</a>
      <div class="text-base">Page {{ currentPage }} of {{ totalPages }}</div>
      <a :href="nextPage" :class="{ 'text-gray-400 hover:text-gray-400 cursor-not-allowed': !showNextPage }">Next
        &rarr;</a>
    </div>
  </div>
</template>

<script>
  import {
    format
  } from 'date-fns'

  export default {

    async asyncData({
      $content
    }) {
      const posts = await $content()
        .only(['title', 'date', 'summary', 'image', 'tags', 'slug'])
        .sortBy('createdAt', 'desc')
        .fetch()

      console.log("posts", posts)

      return {
        posts,
        currentPage: 1,
        pagination: 4,
        allPosts: [],
        base: '/blog',
      }
    },
    // data() {
    //   return {
    //     posts: [],
    //     


    //   }
    // },
      computed: {
        totalPages() {
          return Math.ceil(this.allPosts.length / this.pagination)
        },
        showPreviousPage() {
          return this.currentPage !== 1
        },
        previousPage() {
          return [0, 1].includes(this.currentPage - 1)
            ? this.base
            : `${this.base}?page=${this.currentPage - 1}`;
        },
        showNextPage() {
          return this.currentPage !== this.totalPages
        },
        nextPage(currentPage, totalPages) {
          return this.totalPages > this.currentPage
            ? `${this.base}?page=${this.currentPage + 1}`
            : `${this.base}?page=${this.currentPage}`;
        }
      },
      methods: {
        formatDate (dateToFormat) {
          return format(new Date(dateToFormat), 'MMMM d, Y')
        }
      },
      async fetch() {
        this.allPosts = await this.$content()
          .fetch()

        this.currentPage = parseInt(this.$route.query.page) ? parseInt(this.$route.query.page) : 1

        if (this.currentPage > this.totalPages) {
          this.$router.push('/blog')
          window.location.href = '/blog'
        }

        this.posts = await this.$content()
          .sortBy('date', 'desc')
          .limit(this.pagination)
          .skip((this.currentPage - 1) * this.pagination)
          .fetch()
      },
      fetchOnServer: false
  }
</script>

<style scoped>
  .post-container {
    display: flex;
    flex-wrap: wrap;
  }

  .post {
    padding: 1rem;
  }

  @media (min-width: 768px) {
    .post-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>