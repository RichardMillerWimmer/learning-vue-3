<template>
  <h1>HomeTwo</h1>

  <div v-if="error">{{ error }}</div>
  <div v-if="posts.length">
    <PostList :posts="posts" />
  </div>
  <div v-else>Loading...</div>
  <!-- <button @click="showPosts = !showPosts">toggle posts</button> -->
  <!-- <button @click="posts.pop()">delete post</button> -->
</template>

<script>
import PostList from "../components/PostList.vue";
import getPosts from "../composables/getPosts";

export default {
  name: "HomeTwo",
  components: { PostList },
  setup() {
    const { posts, error, load } = getPosts();

    load();

    return { posts, error };
  },
};
</script>

<style>
</style>