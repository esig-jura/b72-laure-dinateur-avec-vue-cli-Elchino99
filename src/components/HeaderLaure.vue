<template>
  <div class="headerLaure">
    <!-- Entête du site -->
    <header>
      <!-- Logo du site -->
      <router-link to="/" class="logo">
        <div class="nom">Laure Dinateur</div>
        <div class="metier">Graphiste</div>
      </router-link>
      <nav><!-- Menu de navigation -->
      <ul>
        <li>
          <!-- Lien actif : On ajoute la classe .actif au lien
          représentant la page actuelle -->
          <router-link to="/">Accueil</router-link>
        </li>
        <li>
          <router-link to="/Informations">Qui suis-je ?</router-link>
        </li>
        <li>
          <router-link to="/Contact">Me contacter</router-link>
        </li>
      </ul>
    </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: 'headerLaure',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav li .router-link-exact-active {
  color: #2ec4b6;
}
</style>
