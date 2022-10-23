<script setup lang="ts">
import { ref, Ref } from "vue";
import usersApi from "@/api/users";
import { User } from "@/types/post";

const users: Ref<User[] | null> = ref(null);
const loading: Ref<boolean> = ref(true);

usersApi.getAll({ page: 1 }).then((response) => {
  users.value = response.data;
  loading.value = false;
});
</script>

<template>
  <div class="users">
    <h2 class="mb-4">Users management</h2>

    <p v-if="loading">
      <v-progress-circular
        indeterminate
        :size="25"
        class="mr-4"
      ></v-progress-circular
      >Loading ...
    </p>

    <v-table v-else>
      <thead>
        <tr>
          <th class="text-left">Id</th>
          <th class="text-left">Email</th>
          <th class="text-left">Surname</th>
          <th class="text-left">Created at</th>
          <th class="text-left">Updated at</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.surname }}</td>
          <td>{{ user.createdAt }}</td>
          <td>{{ user.updatedAt }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>
