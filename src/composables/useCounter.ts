import { ref, computed } from "vue";
// export default () => {
export function useCounter() {
  // Data
  const count = ref(5);
  const adding = ref(false);
  let intervalID: any;

  // Methods
  const increment = () => count.value++;

  const startAdding = () => {
    if (!adding.value) {
      adding.value = true;
      intervalID = setInterval(increment, 10);
    }
  };

  const stopAdding = () => {
    clearTimeout(intervalID);
    adding.value = false;
  };

  // Computed
  const countPlusOne = computed(() => count.value + 1);

  return { count, increment, countPlusOne, startAdding, stopAdding };
}
