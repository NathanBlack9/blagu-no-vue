<template>
  <section class="works" v-if="asphalting">
    <div class="container">
      <div class="works__inner">
        <h2 class="title">Наши работы по асфальтированию</h2>
        <VueSlick class="works__body" v-bind="settings"> <!-- v-bind is slick settings -->
          <div class="works__item" 
              data-fancybox 
              v-for="(i, index) of asph.banners"
              :key=index
              :class="{ 'work__item--video': !(asph.videos[index] == '') }"
              :href="asph.videos[index] == '' ? asph.banners[index] : asph.videos[index]"
              :style="{backgroundImage: `url(${asph.banners[index]})`}"
          ></div>
        </VueSlick>
      </div>
    </div>
  </section>
  <section class="works" v-else-if="beautification">
    <div class="container">
      <div class="works__inner">
        <h2 class="title">Наши работы по благоустройству</h2>
          <VueSlick class="works__body" v-bind="settings"> <!-- v-bind is slick settings -->
            <div class="works__item" 
                data-fancybox 
                v-for="(i, index) of beauty.banners"
                :key=index
                :class="{ 'work__item--video': !(beauty.videos[index] == '') }"
                :href="beauty.videos[index] == '' ? beauty.banners[index] : beauty.videos[index]"
                :style="{backgroundImage: `url(${beauty.banners[index]})`}"
            ></div>
          </VueSlick>
      </div>
    </div>
  </section>
</template>

<script>

  import VueSlick from 'vue-slick-carousel'
  // optional style for arrows & dots
  //import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: { VueSlick },
  props: {
    asphalting: {
      type: Boolean,
      default: false,
    },
    beautification: {
      type: Boolean,
      default: false,
    },
    delivery: {
      type:  Boolean,
      default: false,
    },
  },
  data () {
    return {
      settings: {
        "arrows": false,
        "dots": false,
        "focusOnSelect": true,
        "infinite": false,
        "speed": 500,
        "slidesToShow": 3,
        "slidesToScroll": 1,
        "responsive": [
          {
            "breakpoint": 1024,
            "settings": {
              "slidesToShow": 2,
              "slidesToScroll": 1,
              "dots": true
            }
          },
          {
            "breakpoint": 480,
            "settings": {
              "slidesToShow": 1,
              "slidesToScroll": 1,
              "dots": true,
            }
          }
        ]
      },
      asph: {
        banners: [
          '/src/assets/img/works1.jpg',
          '/src/assets/img/works2.jpg',
          '/src/assets/img/works3.jpg',
        ],
        videos: [
          '',
          '/src/assets/img/works2--video.mp4',
          '/src/assets/img/works3--video.mp4'
        ]
      },
      beauty: {
        banners: [
          '/src/assets/img/works-beauty1.jpg',
          '/src/assets/img/works-beauty2.jpg',
        ],
        videos: [
          '',
          '',
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .title {
    margin-bottom: 45px;
  }

  .works__item {
    background-position: 0 0;
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>