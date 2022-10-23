<script setup lang="ts">
import { ref, Ref } from "vue";
import postsApi from "@/api/posts";
import { Post } from "@/types/post";

const posts: Ref<Post[] | null> = ref(null);

postsApi.getAll({ page: 1 }).then((response) => {
  posts.value = response.data;
});
</script>

<template>
  <div class="posts">
    <h2>Posts management</h2>

    <v-table>
      <thead>
        <tr>
          <th class="text-left">Id</th>
          <th class="text-left">State</th>
          <th class="text-left">Title</th>
          <th class="text-left">Created at</th>
          <th class="text-left">Updated at</th>
          <th class="text-left">Created by</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post.id">
          <td>{{ post.id }}</td>
          <td>{{ post.state }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.createdAt }}</td>
          <td>{{ post.updatedAt }}</td>
          <td>{{ post.createdBy?.surname }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>
