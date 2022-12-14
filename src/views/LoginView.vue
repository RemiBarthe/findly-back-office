<script setup lang="ts">
import { Ref, ref } from "vue";
import { login } from "@/api/auth";
import router from "@/router";
import { storeToRefs } from "pinia";
import { useTokenStore } from "@/stores/token";

const form: Ref<boolean> = ref(false);
const loading: Ref<boolean> = ref(false);
const hasError: Ref<boolean> = ref(false);
const email: Ref<string> = ref("");
const password: Ref<string> = ref("");

const { token, currentEmail } = storeToRefs(useTokenStore());

function required(v: string): boolean | string {
  return !!v || "Field is required";
}

function signIn() {
  if (!form.value) return;

  loading.value = true;

  login(email.value, password.value)
    .then((response) => {
      loading.value = false;
      token.value = response.data.token;
      currentEmail.value = email.value;
      router.push("/posts");
    })
    .catch((error) => {
      console.log(error);
      loading.value = false;
      hasError.value = true;
    });
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

      <div class="mb-4" v-if="hasError">
        <p class="text-subtitle-2 text-center text-red">Wrong credentials</p>
        <p class="text-caption text-center text-red">
          Invalid email or password
        </p>
      </div>

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
