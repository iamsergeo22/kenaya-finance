<template>
  <div class="">
    <b-carousel id="carousel-1" :interval="2000" controls indicators @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd">
      <!-- Text slides with image -->
      <b-carousel-slide img-src="../assets/img/DIAPO2.jpg"></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="../assets/img/DIAPO3.jpg">

      </b-carousel-slide>


      <!-- Slides with image only -->
      <b-carousel-slide img-src="../assets/img/DIAPOAIRTEL.jpg"></b-carousel-slide>

      <b-carousel-slide img-src="../assets/img/DIAPOCANAL.jpg">

      </b-carousel-slide>

      <b-carousel-slide img-src="../assets/img/DIAPOMONEGRAM.jpg">

      </b-carousel-slide>
      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>

        <template #img>
          <img src="../assets/img/post6.jpg" alt="image slot">
        </template>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->

    </b-carousel>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>