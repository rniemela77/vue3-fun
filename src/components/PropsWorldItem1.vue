<script setup lang="ts">
interface Props {
  student: Person;
  isManager?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  isManager: false,
});
</script>

<template>
  <div :class="['person', { manager: isManager }]">
    <div><b>Name:</b>{{ props.student.name }}</div>
    <div><b>id:</b>{{ props.student.id }}</div>
    <div v-if="props.student.age"><b>Age:</b>{{ props.student.age }}</div>
    <div v-if="props.isManager"><b>manager</b></div>
    <button @click="$emit('randomizeId')">randomizeId</button>
  </div>
</template>

<style scoped>
.person {
  margin: 1rem;
}
div {
  margin-bottom: 1rem;
}
.manager {
  border: 2px solid orange;
}
</style>
