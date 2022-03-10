<script setup lang="ts">
import { reactive, toRefs } from "vue";

const myObj = reactive({ color: "blue", age: 20 });

// When you deconstruct like this, it loses reactivity!
let { color } = myObj;
const swapColor = () => {
  // Is not reactive. Meaning, it logs the correct color, but doesn't change the template
  color = color === "blue" ? "green" : "blue";
  console.log(color);
};

// Deconstruct like this, instead:
const { age } = toRefs(myObj);
// It's common to use this on props, as they come in as reactive objects
</script>

<template>
  <h1>ToRefs.vue</h1>
  <div>color: {{ color }} <button @click="swapColor">swapColor</button></div>
  <div>age: {{ age }} <button @click="age++">age++</button></div>
</template>
