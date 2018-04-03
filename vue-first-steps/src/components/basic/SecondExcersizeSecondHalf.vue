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
          <p>Current Value: {{ Evalue }}</p>
          <button @click="Evalue += 5">Add 5</button>
          <button @click="Evalue += 1">Add 1</button>
          <p>{{ Eresult }}</p>
      </div>
      <!-- 2) Watch for changes in the "result" and reset the "value" after 5 seconds (hint: setTimeout(..., 5000) -->
      <div>
          <input type="text">
          <p>{{ Evalue }}</p>
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
      Evalue: 0,
      Eresult: '',
    };
  },
  computed: {
    output: function() {
      return this.counter > 5 ? 'Greater 5' : 'Smaller than 5'
    },
    outputResult: function() {
      return this.Eresult !== 37 ? 'You are not there yet!' : 'Done'
    },
  },
  watch: {
    counter: function(value) {
      let vm = this
      setTimeout(function(){
        vm.counter = 0
      }, 2000)
    },
  },
  methods: {
    result: function() {
      return this.counter > 5 ? 'Greater 5' : 'Smaller than 5'
    }
  }
};
</script>