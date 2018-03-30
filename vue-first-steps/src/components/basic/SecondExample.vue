<template>
  <div>
    <button v-on:click="increase" type="button">Increment</button>
    <button v-on:click="increment" type="button">increment</button>
    <p>{{ counter }} </p>
    <p v-on:mouseover="updateCoordinates">Cordinates: {{x}} / {{y}} </p>
  </div>  
</template>


<script>

export default {
  name: 'SecondBasicExample',
  data () {
    return {
      counter: 0,
      testArr: [1,2,3,4,5],
      x: 0,
      y: 0
    }
  },
  methods: {
    increase: ()=> {
      console.log(this);
      this.counter++
      console.log(...this.testArr);
    }, 
    increment: function() {
      console.log(this);
      this.counter++
      console.log(...this.testArr);
    
    }, 
    updateCoordinates: function(ev) {
      this.x = ev.clientX
      this.y = ev.clientY
    }
  }
}
</script>