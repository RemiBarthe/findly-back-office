<script setup lang="ts">
import router from "@/router";
import { useTokenStore } from "@/stores/token";
import { storeToRefs } from "pinia";

const { token } = storeToRefs(useTokenStore());

function logOut() {
  token.value = null;
  router.push("/");
}
</script>

<template>
  <v-navigation-drawer expand-on-hover rail>
    <v-list>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
        title="Admin Admin"
        subtitle="sandra_a88@gmailcom"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-folder"
        title="Posts"
        @click="$router.push('/posts')"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account-multiple"
        title="Users"
        @click="$router.push('/users')"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-logout-variant"
        title="Log out"
        @click="logOut"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
