<template>
  <div>
    <h1 v-once>{{title}}</h1> 
    <!-- not rerenders,  renders only once -->
    <h2>{{changeTitle()}}</h2>
    <h2> {{ msg }} </h2>
    <a v-bind:href="link">Vue.js</a>
  </div>  
</template>


<script>
import Vue from 'vue'

export default {
  name: 'BasicExample',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title: 'Hello Vue',
      link: 'https://vuejs.org/',
    }
  },
  methods: {
    changeTitle: () => {
      this.title = 'Rerendered hello vue'
      return this.title
    }
  }
}
</script>