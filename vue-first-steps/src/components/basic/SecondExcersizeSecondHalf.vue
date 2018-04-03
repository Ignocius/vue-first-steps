<template>
  <div>
    <section>
      <button @click="counter++">Increase</button>
      <button @click="counter--">Decrease</button>
      <button @click="secondCounter++">Increase Secrease</button>
      <p> {{ counter }}</p>
      <p> {{ result() }} | {{ output }}</p>
    </section>
    <section>
          <!-- 1) Show a "result" of 'not there yet' as long as "value" is not equal to 37 - you can change "value" with the buttons. Print 'done' once you did it -->
      <div>
          <p>Current Value: {{ value }}</p>
          <button @click="value += 5">Add 5</button>
          <button @click="value += 1">Add 1</button>
          <p>{{ outputResult }}</p>
      </div>
      <!-- 2) Watch for changes in the "result" and reset the "value" after 5 seconds (hint: setTimeout(..., 5000) -->
      <div>
          <input type="text">
          <p>{{ value }}</p>
      </div>
    </section>
  </div>  
</template>


<script>
export default {
  name: "SecondExcersizeSecondHalf",
  data() {
    return {
      counter: 0,
      secondCounter: 0,
      value: 0,
      onCheck: '',
    };
  },
  computed: {
    output: function() {
      return this.counter > 5 ? 'Greater 5' : 'Smaller than 5'
    },
    outputResult: function() {
      return this.value !== 37 ? this.onCheck = 'You are not there yet!' : this.onCheck = 'Done'
    },
  },
  watch: {
    counter: function(value) {
      let vm = this
      setTimeout(function(){
        vm.counter = 0
      }, 2000)
    },
    value: function() {
      let vm = this
      setTimeout(function(){
        vm.value = 0
      }, 5000)
    }
  },
  methods: {
    result: function() {
      return this.counter > 5 ? 'Greater 5' : 'Smaller than 5'
    }
  }
};
</script>