<script setup lang="ts">
import { reactive } from "vue";
const maxNum = 10;

const myArray = reactive([] as number[]);

const removeThisNumber = (index: number) => {
  myArray.splice(index, 1);
};

const addToArray = () => {
  const randomNumber = Math.floor(Math.random() * maxNum + 1);
  if (!myArray.includes(randomNumber)) {
    myArray.push(randomNumber);
  } else {
    addToArray();
  }
};

const addToArrayOrganize = () => {
  addToArray();
  organizeArray();
};

const organizeArray = () => {
  myArray.sort((a, b) => a - b);
};

const resetArray = () => {
  myArray.length = 0;
};

const thisOpacity = (num: number) => {
  const minVal = Math.min(...myArray);
  const maxVal = Math.max(...myArray);
  const scale = maxVal - minVal;
  const result = num / scale;
  return result;
};

let intervalId: any;
const autoAddToArray = () => {
  intervalId = setInterval(intervalAddToArray, 500);
};
const intervalAddToArray = () => {
  if (myArray.length !== maxNum) {
    addToArray();
  } else {
    clearTimeout(intervalId);
    organizeArray();
  }
};
</script>

<template>
  <div>
    <h1>Computed.vue</h1>
    Current Array:<b>
      <TransitionGroup name="list">
        <span
          v-for="(num, index) in myArray"
          :style="`opacity: ${thisOpacity(num)}`"
          :key="num"
          :data-index="index"
          @click="removeThisNumber(index)"
          class="number"
        >
          {{ num }}
        </span>
      </TransitionGroup>
    </b>

    <div>
      <button @click="addToArray">Add To Array</button>
    </div>

    <div>
      <button @click="addToArrayOrganize">Add To Array + Organize</button>
    </div>

    <div>
      <button @click="organizeArray">Organize Array</button>
    </div>

    <div>
      <button @click="resetArray">Reset Array</button>
    </div>

    <div>
      <button @click="autoAddToArray">Auto Add To Array</button>
    </div>
  </div>
</template>

<style scoped>
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}

.number {
  padding: 1rem;
  display: inline-block;
}
.number:hover {
  background: grey;
  cursor: pointer;
}
button {
  width: 200px;
  padding: 0.5rem 1rem;
}
</style>
