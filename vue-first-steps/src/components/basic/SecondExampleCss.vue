<template>
  <div class="flex">
    <section 
        class="demo" 
        @click="attachRed = ! attachRed"
        :class="divClasses"></section>
    <section class="demo" :class="{red: attachRed}"></section>
    <section class="demo" :class="[color, {red: attachRed}]"></section>
    <section class="demo" :style="{backgroundColor: color}"></section>
    <section class="demo" :style="myStyle"></section>
    <section class="demo" :style="[myStyle, {height: width + 'px'}]"></section>
    <hr />
    <input type="text" v-model="color">
    <input type="text" v-model="width">
    <div id="exercise">
        <!-- 1) Start the Effect with the Button. The Effect should alternate the "highlight" or "shrink" class on each new setInterval tick (attach respective class to the div with id "effect" below) -->
        <div>
            <button @click="startEffect">Start Effect</button>
            <div id="effect" :class="highlight"></div>
        </div>
        <!-- 2) Create a couple of CSS classes and attach them via the array syntax
        <div>I got no class :(</div>
            3) Let the user enter a class (create some example classes) and attach it -->
        <!-- <div>
            <input type="text">
            <div></div>
        </div> -->
        <!-- 4) Let the user enter a class and enter true/ false for another class (create some example classes) and attach the classes -->
        <!-- <div>
            <input type="text">
            <input type="text">
            <div></div>
        </div> -->
        <!-- 5) Repeat 3) but now with values for styles (instead of class names). Attach the respective styles.  -->
        <!-- <div>
            <input type="text">
            <div></div>
        </div> -->
        <!-- 6) Create a simple progress bar with setInterval and style bindings. Start it by hitting the below button. -->
        <!-- <div>
            <button v-on:click="startProgress">Start Progress</button>
            <div></div>
        </div> --> 
    </div>
  </div>  
</template>


<script>
export default {
  name: "SecondExcersizeSecondHalf",
  data() {
    return {
     attachRed: false,
     color: 'green',
     width: 100,
     highlight: '',
     colorPicker:  ['grren', 'red', 'blue']
    };
  },
  computed: {
      divClasses: function() {
          return {
              red: this.attachRed,
              blue: !this.attachRed
          }
      },
      myStyle: function() {
          return {
              backgroundColor: this.color,
              width: this.width + 'px'
          }
      }
  },
  methods: {
    startEffect: function() {
        let vm  = this
        setInterval(function(){
            vm.highlight = vm.colorPicker[Math.round(Math.random() * 2, 2)]
        }, 3000)
    }
 }
}
    
</script>

<style>
#effect {
    width: 20vw;
    height: 20vh;
    display: block;
    border: 1px solid yellow;
}
.flex {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 50%;
}
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