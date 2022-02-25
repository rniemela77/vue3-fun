<script setup lang="ts">
interface Person {
  name: string;
  id: number;
  age?: number;
  animals?: Array<"👽">;
}

interface Props {
  student: Person;
  isManager?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  isManager: false,
  animals: () => [],
});

const { name, id, age, animals } = props.student;
</script>

<template>
  <div class="person">
    <div><b>Name:</b>{{ name }}</div>
    <div><b>id:</b>{{ id }}</div>
    <div v-if="age"><b>Age:</b>{{ age }}</div>
    <div v-if="props.isManager"><b>manager</b></div>
    <div>
      <b>Animals({{ animals?.length || 0 }}):</b>
      <span v-for="animal in animals">{{ animal }}</span>
    </div>
  </div>
</template>

<style scoped>
.person {
  margin: 1rem;
}
div {
  margin-bottom: 1rem;
}
</style>
