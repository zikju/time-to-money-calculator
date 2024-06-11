import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useBaseStore = defineStore('base', {
  state: () => ({
    isDarkMode: useStorage('isDarkMode', true),
    defaultCurrency: useStorage('defaultCurrency', 'USD'),
    hourlyRate: useStorage('hourlyRate', 0),
    hoursWorked: useStorage('hoursWorked', 0),
    minutesWorked: useStorage('minutesWorked', 0)
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2
  },
  actions: {
    // increment () {
    //   // this.counter++
    // }
  }
})
