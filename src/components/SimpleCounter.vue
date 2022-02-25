<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <h1>SimpleCounter.vue</h1>
  <div>Count: {{ count }}</div>
  <button @click="count++">+</button>
  <button @click="count--">-</button>
</template>

<style scoped></style>
