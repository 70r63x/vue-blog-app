<template>
  <div id="app">
    <HeaderComponent />
    <router-view></router-view>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/shared/Header'
import FooterComponent from './components/shared/Footer'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style>
@import './assets/css/styles.css';
</style>
