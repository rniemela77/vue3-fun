<script setup lang="ts">
import { reactive, toRefs } from "vue";

const myObj = reactive({ color: "blue", age: 20 });

// When you deconstruct like this, it loses reactivity!
// const { age } = myObj;
// Deconstruct like this, instead:
const { age } = toRefs(myObj);
// It's common to use this on props, as they come in as reactive objects
</script>

<template>
  <h1>ToRefs.vue</h1>
  <div>{{ age }}</div>
  <button @click="age++">age++</button>
</template>
