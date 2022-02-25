<script setup lang="ts">
import { reactive, ref, onMounted } from "vue";
import PropsWorldItem1 from "./PropsWorldItem1.vue";

const person1 = {
  name: "qqqq",
  id: 20,
  animals: ["👽", "👽"],
};
const person2 = reactive({ name: "wwwww", id: 30, age: 10 });

const pickedUp = ref(false);
function pickUp() {
  pickedUp.value = true;
}
function drop(loc: string) {
  if (pickedUp.value) {
    console.log("dropped");
    if (loc === "person") {
      console.log("dropped on person");
      pickedUp.value = false;
      return;
    } else if (loc === "background") {
        console.log("dropped on bg");
        pickedUp.value = false;
    }
  }
}
</script>

<template>
  <div :class="{ alien: pickedUp }" @click="drop('background')">
    <h1>PropsWorld.vue</h1>
    <PropsWorldItem1
      :student="person1"
      class="person"
      @click="drop('person')"
    />
    <PropsWorldItem1 :student="person2" class="person" :isManager="true" />
    <div class="animal-pool">
      <div
        class="animal-1"
        @click="pickUp"
        :style="{ opacity: pickedUp ? 0.5 : 1 }"
      >
        👽
      </div>
    </div>
  </div>
</template>

<style scoped>
.person {
  background: rgba(0, 0, 0, 0.1);
  display: inline-block;
  padding: 1rem;
  text-align: left;
}
.animal-pool {
  background: rgba(0, 0, 0, 0.1);
  display: inline-block;
  font-size: 200%;
}
.alien {
  cursor: url("https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/310/alien_1f47d.png"),
    auto;
}
</style>
