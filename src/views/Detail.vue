<template>
  <v-container>
    <v-card elevation="12">
      <img 
      v-bind:src="country.flag"
      alt="Flag" />
      <div class="info">
      <h1 class="mb-5">{{country.translations.fr}}</h1>
        <p>Population : {{country.population}} </p>
        <p>region : {{country.region}}</p>
        <p>capital : {{country.capital}}</p>
        <p>Languages : {{country.languages[0].name}}</p>
        <p>Monaie : {{country.currencies[0].name}}</p>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import Vue from "vue";

export default {
  data() {
    return {
      country: "",
    };
  },

  created: function () {
      const name = this.$route.query.id;
    Vue.$http.get(`name/${name}`).then((res) =>  {
        this.country = res.data[0]
        console.log(this.country)
    })
  },

};
</script>
<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}
.v-card {
    background-color: hsl(209, 23%, 22%);
    display: flex;
    color: hsl(200, 3%, 79%); 
    max-width: 80%;
}

.info {
    width: 100%;
    padding: 30px;
    background-color: hsl(209, 23%, 22%) !important;
}

.v-card img {
  max-height: 100%;
  max-width: 50%;
}

@media  (max-width: 550px) {
  .v-card {
    flex-direction: column;
  }

  .v-card img {
    max-width: 100%;
  }

  .info {
    padding: 15px;
  }

}

</style>