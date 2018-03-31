<template>
  <div>
    <section>
      <button @click="counter++">Increase</button>
      <button @click="counter--">Decrease</button>
      <button @click="secondCounter++">Increase Secrease</button>
      <p> {{ counter }}</p>
      <p> {{ result() }} | {{ output }}</p>
    </section>
  </div>  
</template>


<script>
export default {
  name: "SecondExcersizeSecondHalf",
  data() {
    return {
      counter: 0,
      secondCounter: 0
    };
  },
  computed: {
    output: function() {
      return this.counter > 5 ? 'Greater 5' : 'Smaller than 5'
    }
  },
  methods: {
    result: function() {
      return this.counter > 5 ? 'Greater 5' : 'Smaller than 5'
    }
  }
};
</script>