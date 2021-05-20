<template>
  <v-container>
    <div class="toolbar">
      <v-toolbar rounded dense dark tag="div">
        <v-text-field
          v-model="search"
          placeholder="search pays"
          hide-details
          prepend-icon="mdi-magnify"
        ></v-text-field>
      </v-toolbar>
      <v-toolbar rounded dense dark tag="div">
        <v-overflow-btn
          :items="dropdown_edit"
          editable
          v-model="searchRegion"
          label="Select region"
          hide-details
          class="pa-0"
          overflow
        ></v-overflow-btn>
      </v-toolbar>
    </div>
    <div id="card">
      <router-link
        v-for="country in filteredCountries_list"
        :key="country.name"
        :to="{ name: 'Detail', query: { id: country.name } }"
      >
        <v-card class="card" elevation="3" dark>
          <img
            v-bind:src="country.flag"
            alt="Flag"
            height="150px"
            width="100%"
          />
          <div class="info">

            <h3 class="mb-5">{{ country.translations.fr }}</h3>
            <p>Population : {{ country.population }}</p>
            <p>Region : {{ country.region }}</p>
            <p>Capital : {{ country.capital }}</p>
          </div>
        </v-card>
      </router-link>
    </div>
  </v-container>
</template>

<script>
import Vue from "vue";

export default {
  data() {
    return {
      countries_list: [],
      country: "",
      search: "",
      searchRegion: "",
      dropdown_edit: [
          { text: 'Asia' },
          { text: 'Europe' },
          { text: 'Africa' },
          { text: 'Oceania' },
          { text: 'America' },
        ],
    };
  },

  created: function () {
    Vue.$http.get("all").then((res) => (this.countries_list = res.data));
  },

  computed: {
    filteredCountries_list: function () {
      return this.countries_list.filter((country) => {
        // console.log(country.translations.fr)
           const name =  country.name.match(this.search),
               region = country.region.match(this.searchRegion);
            return (region && name)

      });
    },
  
  },
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap");

.card.v-card.v-sheet.theme--dark.elevation-3 {
  background-color: hsl(209, 23%, 22%);
}

.container {
  overflow-y: auto;
  max-width: 100%;
}

a {
  text-decoration: none;
}

.v-application .info {
  background-color: hsl(209, 23%, 22%) !important;
  padding: 20px;
}

#card {
  display: grid;
  overflow-y: auto;
  margin-top: 20px;
  justify-content: center;
  font-family: "Nunito Sans", sans-serif;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  max-width: 60%;
  margin: auto;
  margin-top: 50px;
  gap: 40px;
}

header.v-sheet.theme--dark.rounded.v-toolbar.v-toolbar--dense {
  margin-top: 50px;
}

h3 {
  font-weight: 800;
}

p {
  font-size: 14px;
  color: hsl(200, 3%, 79%);
}

.v-sheet.theme--dark.rounded.v-toolbar.v-toolbar--dense {
  background: hsl(209, 23%, 22%);
  margin-top: 50px;
  max-width: 300px;
}

.toolbar {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  font-family: "Nunito Sans", sans-serif;
}

.v-input .input {
  color: hsl(200, 3%, 79%) !important;
}

div#list-11 {
  background: hsl(209, 23%, 22%);
}

@media  (max-width: 550px) {
  #card {
    max-width: 90%; 
  }
}
</style>