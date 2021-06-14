<template>
  <div class="post">
    <router-link :to="{ name: 'Details', params: {id: post.id} }">
      <h3>{{ post.title }}</h3>
    </router-link>
    <p>{{ snippet }}</p>
    <span v-for="(tag, index) in post.tags" :key="index"> #{{ tag }} </span>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
  props: ["post"],
  setup(props) {
    const snippet = computed(() => {
      return props.post.body.substring(0, 100) + "...";
    });
    // console.log(props.post);
    return { snippet };
  },
};
</script>

<style>
</style>