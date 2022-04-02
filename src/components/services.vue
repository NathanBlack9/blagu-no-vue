<template>
  <section class="services">
    <div class="container">
      <div class="services__inner">
        <h2 class="title">Наши услуги</h2>
        <div class="services__body">
          <a :href="elem.link" class="services__item" 
                      v-for="elem of services__list" 
                      :key="elem.id"
                      :class="elem.hover ? 'hovered' : ''" 
                      @mouseenter="elem.hover = true" 
                      @mouseleave="elem.hover = false">
            <div class="services__item-name">{{ elem.name }}</div>
            <div class="services__arrow animate__animated animate__fadeInDown animate__infinite"></div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'services',
  data () {
    return {
      services__list:[
        {name: 'Асфальтирование дорог', hover:false, link: '#asphalting'},
        {name: 'Благоустройство територий', hover:false, link: '#beautification'},
        {name: 'Доставка строительных материалов', hover:false, link: '#delivery'}
      ],

    }
  }
}
</script>

<style lang="scss" scoped>
  .services__item {

    &:nth-child(1) {
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 8.23%, #000000 95.83%),
                  url('/src/assets/img/services-1.jpg') 0 0 / cover no-repeat;
    }

    &:nth-child(2) {
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 8.23%, #000000 95.83%),
                  url('/src/assets/img/services-2.jpg') 0 0 / cover no-repeat;
    }

    &:nth-child(3) {
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 8.23%, #000000 95.83%),
                  url('/src/assets/img/services-3.jpg') 0 0 / cover no-repeat;
    }
  }
</style>
