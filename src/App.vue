<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/PageAccueil">Accueil</router-link> |
      <router-link to="/PageInformations">Qui suis-je ?</router-link> |
      <router-link to="/PageContact">Me contact</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'LaureDinateur',
};
</script>

<style>

</style>
