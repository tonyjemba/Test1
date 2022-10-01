import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0 }
  },

  actions: {
    increment () {
      if (this.count === 0) {
        this.count++
      }
    }
  }
})
