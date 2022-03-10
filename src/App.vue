<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import ComposableWorld from "./components/ComposableWorld.vue";
import SimpleCounter from "./components/SimpleCounter.vue";
import ToRefs from "./components/ToRefs.vue";
import PropsWorld from "./components/PropsWorld.vue";
import Computed from "./components/Computed.vue";
import TeleportWorld from "./components/TeleportWorld.vue";
</script>

<template>
  <TeleportWorld class="part" />
  <Computed class="part" />
  <PropsWorld class="part" />
  <div class="flex">
    <ComposableWorld class="part" name="ComposableWorld #1" />
    <ComposableWorld class="part" name="ComposableWorld #2" />
  </div>
  <SimpleCounter />
  <ToRefs />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.flex {
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 5rem;
}
.part {
  padding: 1rem 2rem;
  background: rgba(35, 109, 99, 0.26);
  display: block;
  margin: 1rem;
}
</style>
