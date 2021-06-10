<template>
  <h1>HomeTwo</h1>
  <PostList v-if="showPosts" :posts='posts' />
  <button @click="showPosts = !showPosts">toggle posts</button>
  <button @click="posts.pop()">delete post</button>
</template>

<script>
import PostList from "../components/PostList.vue";
import { ref } from "@vue/reactivity";

export default {
  name: "HomeTwo",
  components: { PostList },
  setup() {
    const posts = ref([
      { title: "welcome to the blog", body: "some text", id: 1 },
      { title: "top five CSS tips", body: "some more text", id: 2 },
    ]);

    const showPosts = ref(true)


    return { posts, showPosts };
  },
};
</script>

<style>
</style>