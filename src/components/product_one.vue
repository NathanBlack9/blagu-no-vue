<template>
  <section class="product-one" id="asphalting" v-if="asphalting">
    <div class="container">
      <div class="product-one__inner">
        <h2 class="title">{{ asphalting__info.title }}</h2>
        <p class="product-one__subtitle">{{ asphalting__info.subtitle }}</p>
        <p class="product-one__list-title">{{ asphalting__info.list_name }}</p>
        <ul class="product-one__list">
          <li class="product-one__list-item"
              v-for="(item, idx) of asphalting__info.list" 
              :key=idx>
              {{ asphalting__info.list[idx] }}
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section class="product-one" id="beautification" v-else-if="beautification">
    <div class="container">
      <div class="product-one__inner">
        <h2 class="title">{{ beautification__info.title }}</h2>
        <p class="product-one__subtitle">{{ beautification__info.subtitle }}</p>
        <p class="product-one__list-title">{{ beautification__info.list_name }}</p>
        <ul class="product-one__list">
          <li class="product-one__list-item"
              v-for="(item, idx) of beautification__info.list" 
              :key=idx>
              {{ beautification__info.list[idx] }}
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section class="product-one" id="delivery" v-else-if="delivery">
    <div class="container">
      <div class="product-one__inner">
        <h2 class="title">{{ delivery__info.title }}</h2>
        <p class="product-one__subtitle">{{ delivery__info.subtitle }}</p>
        <p class="product-one__list-title">{{ delivery__info.list_name }}</p>
        <ul class="product-one__list">
          <li class="product-one__list-item"
              v-for="(item, idx) of delivery__info.list" 
              :key=idx>
              {{ delivery__info.list[idx] }}
          </li>
        </ul>
        <span class="product-one__remark">* доставка материалов от 3 м<sup>3</sup></span>
      </div>
    </div>
  </section>
  <section class="product-one" v-else></section>
</template>

<script>
export default {
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
      asphalting__info: {
        title: 'Асфальтирование дорог', 
        subtitle: 'Мы занимаемся асфальтированием и ремонтом дорог в Москве и Подмосковье.', 
        list_name: '3 главные причины, почему нужно выбирать именно нас:',
        list: [
          'мы выполняем работу строго в срок;',
          'качество дороги – в соответствии с ГОСТ и СНиП;',
          'мы оказываем услуги по честной цене, которая складывается из расходов на материал, объема работы и количество задействованной техники.',
        ]
      },
      delivery__info: {
        title: 'Доставка строительных материалов', 
        list_name: 'Мы занимаемся доставкой таких строительные материалов как:',
        list: [
          'щебень (гравийный, известняк);',
          'песок (речной, карьерный);',
          'асфальтовая крошка.',
        ]
      },
      beautification__info: {
        title: 'Благоустройство територий', 
        subtitle: 'Мы также благоустраиваем придомовые территории (двора).', 
        list_name: 'Под благоустройством мы подразумеваем:',
        list: [
          'ремонт дворовых участков многоквартирных или частных домов;',
          'монтаж ограждения, детских площадок;',
          'окрашивание элементов благоустройства;',
          'работы по озеленению.'
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  body {
    *{
      color: white;

      &::selection{
        background-color: white;
        color: #333;
      }
    }

    .container {
      max-width: 1140px;
    }
  }
</style>