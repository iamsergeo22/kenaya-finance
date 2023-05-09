<template>
  <div>
    <div class="markdown-body text-justify">
      <img :src=postInMarkdown.image :alt="postInMarkdown.title" class="w-full rounded-lg shadow-lg mb-3">

      <h2 class="text-color">{{ postInMarkdown.title }}</h2>
      <div>
        <p class="text-justify text-md">
          {{ dateFormatted }}
        </p>
      </div>

      <nuxt-content :document="postInMarkdown" />
      <a href="/blog" class="font-bold text-color text-md">Retour aux actualités</a>

    </div>
  </div>
</template>

<script>
import '~/assets/css/github-markdown.css'
import { format } from 'date-fns'

export default {
  async asyncData ({ $content, params, $axios }) {
    const postInMarkdown = await $content(params.slug)
      .fetch()
      .catch((err) => {
        console.error(err)
      })

    return {
      postInMarkdown
    }
  },
  computed: {
    dateFormatted () {
      return format(new Date(this.postInMarkdown.date), 'MMMM d, Y')
    }
  }
}
</script>

<style>
  .markdown-body {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    margin: 0 auto;
    padding: 45px;
  }

  @media (max-width: 767px) {
    .markdown-body {
      padding: 15px;
    }
  }

  .text-color {
        color: #070A52;
        /* Remove focus outline */
    }
</style>
