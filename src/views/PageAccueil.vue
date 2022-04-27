<template>
  <div class="PageAccueil">
    <body class="page-index">
    <!-- Astuce : ajouter un class page-xxx à <body> afin de différencier les pages en CSS -->

    <!--
    Contenu principal du site

    Si l'élément <main> existe, Google se concentrera sur son contenu pour le
    référencement et oubliera le reste de votre site. TRES IMPORTANT !!!
    -->
    <main>
      <!-- Titre principal du site, il ne doit y en avoir qu'un dans la page et
           il faut le placer dans <main> -->
      <h1>Mes réalisations</h1>

      <ul class="realisations">
        <li v-for="reali in realisation" :key="reali.image">
          <a :href="reali.image">
            <figure>
              <img :src="reali.image" :alt="reali.titre">
              <figcaption>{{reali.description}}</figcaption>
            </figure>
          </a>
        </li>
      </ul>
    </main>
    </body>
  </div>
</template>
<script>
export default {
  name: 'PageAcceuil.vue',
  data() {
    return {
      realisation: [
        {
          image: 'img/numbers-01.jpg',
          titre: 'Tableau le chiffre 1',
          description: 'Expérimentation de couleurs',
        },
        {
          image: 'img/numbers-02.jpg',
          titre: 'Tableau le chiffre 2',
          description: 'Jeu de fondus',
        },
        {
          image: 'img/numbers-06.jpg',
          titre: 'Tableau le chiffre 6',
          description: '80\'s style',
        },
        {
          image: 'img/numbers-09.jpg',
          titre: 'Tableau le chiffre 9',
          description: 'Travail avec les pinceaux',
        },
        {
          image: 'img/numbers-12.jpg',
          titre: 'Tableau le chiffre 12',
          description: 'Répétition de formes',
        },
      ],
    };
  },
};
</script>

<style scoped>
.realisations {
  list-style-type: none; /* suppression des puces */
  margin: 0;
  padding: 0;
}
.realisations li {
  display: inline-block;
  width: 45%;
  margin: 2.5%;
  vertical-align: top;
}
.realisations li a {
  color: #011627;
}
.realisations figure {
  margin: 0;
  background-color: #e7e9eb;
}
.realisations figcaption {
  padding: 10px;
  font-size: 1rem;
}
@media only screen and (min-width: 480px) {
  /*Passage sur 3 cols*/
  .realisations li {
    width: calc(100%/3 - 5%);
  }
} /* min-width: 480px */

</style>
