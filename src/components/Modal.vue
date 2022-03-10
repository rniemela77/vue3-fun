<script setup lang="ts">
import { ref } from "vue";

const open = ref(false);
</script>

<template>
  <h1>Modal.vue</h1>
  <button @click="open = true">Open modal</button>

  <Teleport to="body">
    <transition-group name="fade">
      <div key="a" v-show="open" class="modal-bg" @click="open = false"></div>
      <transition key="c" name="slide">
        <div key="b" v-show="open" class="modal">
          <p>Hello from the modal</p>
          <button @click="open = false">Close</button>
        </div>
      </transition>
    </transition-group>
  </Teleport>
</template>

<style scoped>
.modal-bg {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
}
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 0%;
  width: 100vw;
  height: 60vh;
  background: white;
  box-shadow: 0px 15px 20px 3px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 200%;
}
button {
  padding: 1rem 2rem;
  font-size: 200%;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(500px);
}
</style>
