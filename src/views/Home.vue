<template>
  <div class="home">
    <h1>Home</h1>
    <input v-model="search" type="text" placeholder="search" />
    <p>search term - {{ search }}</p>
    <div v-for="(name, index) in matchingNames" :key="index">{{ name }}</div>
    <!-- <p>{{ name }}</p> -->
    <!-- <h3>refs</h3>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update ninjaOne</button>
    <h3>reactive</h3>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">update ninjaTwo</button> -->
    <!-- <p ref="para">My name is {{ name }} and my age is {{ age}}</p>
    <button @click="handleClick">click</button>
    <button @click="age++">add to age</button>
    <input v-model="name" type="text" > -->
  </div>
</template>

<script>
import { ref, reactive } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";

export default {
  name: "Home",
  // runs before other hooks and lifecycle methods
  // variables in setup are not inherently reactive
  // adding ref makes variables reactive
  setup() {
    // console.log('setup')

    const search = ref("");
    const names = ref(["mario", "luigi", "yoshi", "toad", "peach", "bowser"]);
    const matchingNames = computed(() => {
      return names.value.filter((name) => {
        return name.includes(search.value);
      });
    });

    // const ninjaOne = ref({ name: 'Richard', age:33 })
    // const ninjaTwo = reactive({name: 'Addy', age:5})

    // const updateNinjaOne = () => {
    //   ninjaOne.value.age = 40
    // }
    // const updateNinjaTwo = () => {
    //   ninjaTwo.age = 6
    // }

    // const para = ref(null)

    // const name = ref('Mario')
    // const age = ref(30)

    // const handleClick = () => {
    // .value used to change a const ref() makes them reactive values
    // name.value = "Luigi"
    // age.value = 35
    // console.log('you clicked me')
    // console.log(para, para.value)
    // para.value.classList.add('test')
    // para.value.textContent = "hello there"
    // }

    return { matchingNames, search };
  },
  // created() {
  //   console.log('created')
  // },
  // mounted() {
  //   console.log('mounted')
  // }
};
</script>
