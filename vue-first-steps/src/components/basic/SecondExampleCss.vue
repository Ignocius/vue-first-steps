<template>
  <div>
    <section 
        class="demo" 
        @click="attachRed = ! attachRed"
        :class="divClasses"></section>
    <section class="demo" :class="{red: attachRed}"></section>
    <section class="demo" :class="[color, {red: attachRed}]"></section>
    <hr />
    <input type="text" v-model="color">
  </div>  
</template>


<script>
export default {
  name: "SecondExcersizeSecondHalf",
  data() {
    return {
     attachRed: false,
     color: 'green'
    };
  },
  computed: {
      divClasses: function() {
          return {
              red: this.attachRed,
              blue: !this.attachRed
          }
      }
  }
};
</script>

<style>
.demo {
    width: 50px;
    height: 50px;
    border: 1px solid black;
}
 .red {
     background: red;
 }
 .green {
     background: green;
 }
 .blue {
     background: blue;
 }
</style>