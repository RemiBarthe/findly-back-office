<script setup lang="ts">
import usersApi from "@/api/users";

console.log(usersApi.index({ page: 1 }));
</script>

<template>
  <div class="users">
    <h2>This is an users page</h2>
  </div>
</template>
