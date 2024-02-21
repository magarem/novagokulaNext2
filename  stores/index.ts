// Example using Options API
import { defineStore } from "pinia";
import { ref } from "vue";

export const useCounterStore = defineStore("counter", {
  const count = ref('')
  actions: {
    increment() {
      this.count++;
    },
  },
  persist: {
    storage: persistedState.localStorage,
  },
});

// Example using Composition API
import { defineStore } from "pinia";

export const useCounterStore = defineStore(
  "counter",
  () => {
    const count = ref(0);
    const increment = () => {
      count.value++;
    };
    return { count, increment };
  },
  {
    persist: {
      storage: persistedState.localStorage,
    },
  }
);