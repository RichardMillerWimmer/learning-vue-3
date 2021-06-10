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
import { ref } from "@vue/reactivity";

export default {
  name: "HomeTwo",
  components: { PostList },
  setup() {
    const posts = ref([]);
    const error = ref(null);

    const load = async () => {
        try {
            let data = await fetch('http://localhost:3000/posts')
            if(!data.ok) {
                throw Error('no data available')
            }
            console.log(data)
            posts.value = await data.json()
            console.log(posts)
        }
        catch(err) {
            error.value = err.message
            console.log(error.value)
        }
    }
    load()

    return {posts, error};
  },
};
</script>

<style>
</style>