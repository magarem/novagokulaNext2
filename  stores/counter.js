// stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: '' }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment(x) {
      this.count = x
    },
  },
})