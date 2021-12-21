import { defineStore } from "pinia";
import getRandom from '../data/index'

export const useStore = defineStore("cart", {
  state: () => ({
    count: 0,
    name: "Alvaro",
    loading: false
  }),
  getters: {
    whoClicked(state): String {
      return `${state.name} has clicked: ${this.getTimes}`;
    },
    getTimes(state): String {
      const times = state.count;
      switch (times) {
        case 0:
          return "zero times";
        case 1:
          return "once";
        case 2:
          return "twice";
        default:
          return `${times} times`;
      }
    },
  },
  actions: {
    increment() {
      this.count++;
    },
    async random() {
        this.loading = true
        this.count = await getRandom()
        this.loading = false
    },
  },
});
