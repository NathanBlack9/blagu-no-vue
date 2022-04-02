<template>
  <div id="app">
    <Header/>
    <Services/>
    <Advantages/>
    <Product asphalting/>
    <Works asphalting/>
    <Product beautification/>
    <Works beautification/>
    <Product delivery/>
    <Footer/>
  </div>
</template>

<script>

import Header from './components/header.vue';
import Services from './components/services.vue';
import Advantages from './components/adv.vue';
import Product from './components/product_one.vue';
import Works from './components/works.vue';
import Footer from './components/footer.vue';

export default {
  components: {
    Header,
    Services,
    Advantages, 
    Product,
    Works,
    Footer
  } 
}
</script>

<style lang="scss">
  @import 'assets/styles/styles.scss';
</style>
