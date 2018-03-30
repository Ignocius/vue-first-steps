<template>
  <div>
    <button v-on:click="increase" type="button">Increment</button>
    <button v-on:click="increment(2)" type="button">increment</button>
    <p>{{ counter }} </p>
    <p v-on:mouseover="updateCoordinates">Cordinates: {{x}} / {{y}} - <span v-on:mouseover.stop="">DEAD SPOT</span></p>
    <input type="text" v-on:keyup.enter="alertMe">
      <article>
          <!-- 1) Show an alert when the Button gets clicked -->
        <div>
            <button @click="alertMe">Show Alert</button>
        </div>
        <!-- 2) Listen to the "keydown" event and store the value in a data property (hint: event.target.value gives you the value) -->
        <div>
            <input type="text" @keydown="onKeyDown">
            <p>{{ value }}</p>
        </div>
        <!-- 3) Adjust the example from 2) to only fire if the "key down" is the ENTER key -->
        <div>
            <input type="text" @keydown.enter="onEnter">
            <p>{{ valueE }}</p>
        </div>
    </article>
  </div>  
</template>


<script>

export default {
  name: 'SecondBasicExample',
  data () {
    return {
      value: '',
      valueE: '',
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
    increment: function(stpe) {
      console.log(this);
      this.counter+= step
      console.log(...this.testArr);
    
    }, 
    updateCoordinates: function(ev) {
      this.x = ev.clientX
      this.y = ev.clientY
    },
    alertMe: function() {
      alert('alert')
    },
    onKeyDown: function() {
      this.value = ev.target.value
    },
    onEnter: function() {
      this.valueE = event.target.value
    }
  }
}
</script>