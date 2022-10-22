<script setup lang="ts">
import { Ref, ref } from "vue";
import { login } from "@/api/auth";
import { useTokenStore } from "@/stores/token";
import router from "@/router";
import { storeToRefs } from "pinia";

const form: Ref<boolean> = ref(false);
const loading: Ref<boolean> = ref(false);
const email: Ref<string> = ref("");
const password: Ref<string> = ref("");

const { token } = storeToRefs(useTokenStore());

function required(v: string): boolean | string {
  return !!v || "Field is required";
}

function signIn() {
  if (!form.value) return;

  token.value = login(email.value, password.value);

  router.push("/users");
}
</script>

<template>
  <v-card class="mx-auto px-6 py-8" max-width="444" variant="outlined">
    <v-form v-model="form" @submit.prevent="signIn">
      <h2 class="mb-4">Login</h2>

      <v-text-field
        clearable
        variant="outlined"
        label="Email"
        placeholder="johndoe@gmail.com"
        type="email"
        :rules="[required]"
        v-model="email"
      ></v-text-field>

      <v-text-field
        clearable
        variant="outlined"
        label="Password"
        type="password"
        :rules="[required]"
        v-model="password"
      ></v-text-field>

      <br />

      <v-btn
        :disabled="!form"
        :loading="loading"
        block
        color="success"
        size="large"
        type="submit"
        variant="elevated"
      >
        Sign In
      </v-btn>
    </v-form>
  </v-card>
</template>
