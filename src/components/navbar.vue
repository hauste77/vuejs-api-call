<template>
  <div id="header">
    <v-toolbar>
      <!-- title -->
      <v-toolbar-title class="text-uppercase">
        <router-link to="/" tag="span" style="cursor: pointer"
          >Infos pays</router-link
        >
      </v-toolbar-title>
    </v-toolbar>
  </div>
</template>

<script>
  export default {
    name: 'navbar',

    data: () => ({
    
    }),
  }
</script>


<style scoped>
header.v-sheet.theme--light.v-toolbar {
  background-color: hsl(209, 23%, 22%);
}

.text-uppercase {
  color: hsl(200, 3%, 79%);
}

</style>