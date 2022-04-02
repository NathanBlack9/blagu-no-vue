<template>
  <section class="advantages">
    <div class="container">
      <div class="advantages__inner">
        <h2 class="title">Преимущества</h2>
        <div class="advantages__body">

          <div class="advantages__card"
               v-for="(item, idx) of advantages" 
               :key=idx
               :class="item.hover ? 'hovered' : ''" 
               @mouseenter="item.hover = true" 
               @mouseleave="item.hover = false">
            <div alt="" class="advantages__card-icon"></div>
            <h3 class="advantages__card-name">{{ item.name }}</h3>
            <p class="advantages__card-text">{{ item.text }}</p>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'advantages',
  data () {
    return {
      advantages:[
        {
          name: 'Больше 7 лет на рынке',
          text: 'Для нас показатель качества работы является опыт, накопленный за эти годы', 
          hover: false,
        },

        {
          name: 'Не затягиваем сроки выполнение проектов',
          text: 'Мы не затягиваем установленные сроки. Уважаем свое время и время клиентов', 
          hover: false,
        },

        {
          name: 'Не завышаем стоимость',
          text: 'Предоставляем четкую и понятную смету на все услуги до их предоставления', 
          hover: false,
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  .advantages__card {

    &:nth-child(1) .advantages__card-icon {
        background: url('/src/assets/img/advantages-card1.svg') 0 0 / cover no-repeat;
        width: 146px;
        height: 166px;
    }

    &:nth-child(2) .advantages__card-icon {
        width: 153px;
        height: 142px;  
        background: url('/src/assets/img/advantages-card2.svg') 0 0 / cover no-repeat;
    }

    &:nth-child(3) .advantages__card-icon {
        width: 162px;
        height: 142px;
        background: url('/src/assets/img/advantages-card3.svg') 0 0 / cover no-repeat;

      @media only screen and (max-width: 480px) {
        width: 140px;
        height: 122px;
      }
    }

    &.hovered {
      &:nth-child(1) .advantages__card-icon {
        background: url('/src/assets/img/advantages-card1-light.svg') 0 0 / cover no-repeat;
      }

      &:nth-child(2) .advantages__card-icon {
        background: url('/src/assets/img/advantages-card2-light.svg') 0 0 / cover no-repeat;
      }

      &:nth-child(3) .advantages__card-icon {
        background: url('/src/assets/img/advantages-card3-light.svg') 0 0 / cover no-repeat;
      }
    }
  }
</style>