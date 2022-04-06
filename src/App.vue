<template>
  <div id="app">
      <header-laure/>
    <router-view/>
    <footer-laure/>
  </div>
</template>

<script>
import headerLaure from '@/components/HeaderLaure.vue';
import footerLaure from '@/components/FooterLaure.vue';

export default {
  name: 'LaureDinateur',
  components: {
    headerLaure,
    footerLaure,
  },

};
</script>

<style>

</style>
