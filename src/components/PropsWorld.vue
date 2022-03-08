<script setup lang="ts">
import { reactive } from "vue";
import PropsWorldItem1 from "./PropsWorldItem1.vue";

const person1: Person = reactive({
  name: "qqqq",
  id: 20,
  pets: ["r", "r"],
});

const person2 = reactive({ name: "wwwww", id: 30, age: 10 });

function randomize(person: Person) {
  person.id = Math.floor(Math.random() * 20);
}
</script>

<template>
  <div>
    <h1>PropsWorld.vue</h1>
    <PropsWorldItem1
      :student="person1"
      class="person"
      @randomize-id="randomize(person1)"
    />
    <PropsWorldItem1
      :student="person2"
      class="person"
      :isManager="true"
      @randomize-id="randomize(person2)"
    />
  </div>
</template>

<style scoped>
.person {
  background: rgba(0, 0, 0, 0.1);
  display: inline-block;
  padding: 1rem;
  text-align: left;
}
</style>
