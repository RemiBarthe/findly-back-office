<script setup lang="ts">
import { useTokenStore } from "@/stores/token";
import { storeToRefs } from "pinia";
import NavigationPanel from "./components/NavigationPanel.vue";

const { token } = storeToRefs(useTokenStore());
</script>

<template>
  <v-layout>
    <v-app>
      <NavigationPanel v-if="token" />

      <v-main>
        <v-container>
          <h1 class="mb-8">Influentia</h1>
          <router-view />
        </v-container>
      </v-main>
    </v-app>
  </v-layout>
</template>
