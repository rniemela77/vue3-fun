<script setup lang="ts">
import { ref } from "vue";
import Modal from "./Modal.vue";

const tele = ref(false);
</script>

<template>
  <div>
    <h1>TeleportWorld.vue</h1>
    <Modal />

    <button @click="tele = !tele">toggle teleport</button>
    <p v-if="tele">
      <teleport to="h1">
        <span class="red">*teleport text*</span>
      </teleport>
    </p>
  </div>
</template>

<style scoped>
.red {
  color: red;
}
button {
    padding: 1rem 2rem;
}
</style>
