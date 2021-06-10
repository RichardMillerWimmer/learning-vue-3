<template>
  <div class="home">
    <h1>Home</h1>
    <p ref="para">My name is {{ name }} and my age is {{ age}}</p>
    
    <button @click="handleClick">click</button>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'

export default {
  name: 'Home',
  // runs before other hooks and lifecycle methods
  // variables in setup are not inherently reactive
  // adding ref makes variables reactive
  setup() {
    console.log('setup')

    const para = ref(null)

    let name = 'Mario'
    let age = 30

  const handleClick = () => {
    console.log('you clicked me')
    console.log(para, para.value)
    para.value.classList.add('test')
    para.value.textContent = "hello there"
  }

    return {name: name, age: age, handleClick, para}
  }
  // created() {
  //   console.log('created')
  // },
  // mounted() {
  //   console.log('mounted')
  // }
}
</script>
