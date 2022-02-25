<script setup lang="ts">
import { ref, watch } from "vue";

// Import composables
import { useCounter } from "../composables/useCounter";
import { useTextTransform } from "../composables/useTextTransform";

// Deconstruct composable variables, functions
const { count, increment, countPlusOne, startAdding, stopAdding } =
  useCounter();
const { text, makeUpperCase, makeCapitalized, makeLowerCase } =
  useTextTransform();

// Props
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

// Progress bar %
const progressPct = ref(count.value);
watch(count, (curr, prev) => {
  progressPct.value = count.value;
  if (count.value === 100) {
    stopAdding();
  }
});
</script>

<template>
  <div>
    <h1>{{ props.name }}</h1>
    <div class="composable">
      <h2>useCounter</h2>
      <div>count: {{ count }}</div>
      <div class="progress-bar">
        <div
          class="progress"
          ref="progressRef"
          :style="{ width: `${progressPct}%` }"
        ></div>
      </div>
      <div>countPlusOne: {{ countPlusOne }}</div>
      <div><button @click="increment">increment</button></div>
      <div><button @click="startAdding">startAdding</button></div>
      <div><button @click="stopAdding">stopAdding</button></div>
    </div>
    <div class="composable">
      <h2>useTextTransform</h2>
      <div>text: {{ text }}</div>
      <div><button @click="makeUpperCase">makeUpperCase</button></div>
      <div><button @click="makeLowerCase">makeLowerCase</button></div>
      <div><button @click="makeCapitalized">makeCapitalized</button></div>
    </div>
  </div>
</template>

<style scoped>
.composable {
  background: rgba(255, 255, 255, 0.281);
  padding: 1rem;
}
.progress-bar {
  width: 100%;
  height: 1rem;
  border: 1px solid black;
  position: relative;
}
.progress {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 0%;
  background: rgb(0, 207, 128);
}
.composable:not(:last-of-type) {
  margin-bottom: 1rem;
}
button {
  background: rgba(255, 255, 255, 0.911);
  font-size: 125%;
  padding: 1rem 2rem;
  width: 100%;
  margin-bottom: 0.5rem;
  border: none;
  transition: 0.2s;
  border-top: 0px solid rgba(0, 0, 0, 0);
}
button:hover {
  background: rgba(162, 187, 186, 0.911);
  cursor: pointer;
}
</style>
