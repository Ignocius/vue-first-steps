<template>
  <div>
    <h1 v-once>{{title}}</h1> 
    <!-- not rerenders,  renders only once -->
    <h2>{{changeTitle()}}</h2>
    <h2> {{ msg }} </h2>
    <a v-bind:href="link">Vue.js</a>
    <p v-html="finishedLink"></p>
    <div>
      <!-- 1) Fill the <p> below with your Name and Age - using Interpolation -->
      <p>VueJS is pretty cool - {{ name }} / {{ age }}</p>
      <!-- 2) Output your age, multiplied by 3 -->
      <p> {{ ageMultiplier(age) }}</p>
      <!-- 3) Call a function to output a random float between 0 and 1 (Math.random()) -->
      <p>{{ randomFloat() }}</p>
      <!-- 4) Search any image on Google and output it here by binding the "src" attribute -->
      <div>
          <img :src="imgSrc" style="width:100px;height:100px">
    </div>
      <!-- 5) Pre-Populate this input with your name (set the "value" attribute) -->
    <div>
        <input :value="name" :placeholder="name" type="text">
    </div>
  </div>
  </div>  
</template>


<script>

export default {
  name: 'BasicExample',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title: 'Hello Vue',
      link: 'https://vuejs.org/',
      name: 'Richard',
      age: 30,
      finishedLink: '<a href="https://vuejs.org/">Vue.js</a>',
      imgSrc: 'https://www.valuecoders.com/blog/wp-content/uploads/2016/11/Vue.js-cover.png',
    }
  },
  methods: {
    changeTitle: () => {
      this.title = 'Rerendered hello vue'
      return this.title
    },
    ageMultiplier: (age) => {
      return age * 3
    },
    randomFloat: () => {
       return Math.random() * Math.floor(1)
    }
  }
}
</script>