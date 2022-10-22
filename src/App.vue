<template>
  <v-app>
    <v-main>
      <v-container>
        <h1 class="mb-8">Influentia</h1>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",

  data() {
    return {
      //
    };
  },
});
</script>
