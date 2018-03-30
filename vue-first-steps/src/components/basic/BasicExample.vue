<template>
  <div>
    <h2>Yooo {{ msg }} </h2>
  </div>  
</template>


<script>
import Vue from 'vue'

export default {
  name: 'BasicExample',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
      sayHello: () => {
          return 'Hello';
      }
  }
}
</script>