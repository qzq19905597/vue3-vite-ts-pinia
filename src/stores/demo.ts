// @ts-nocheck
// https://pinia.web3doc.top/getting-started.html
import { defineStore, acceptHMRUpdate } from 'pinia'

// https://pinia.vuejs.org/api/modules/pinia.html#definestore
export const useCommonStore = defineStore({
  id: 'demo',
  state: () => ({
    demo: '',
  }),

  actions: {
    setDemo(params) {
      this.params = params
    },
  },
  // 持续化存储
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'test-demo',
        storage: sessionStorage,
        paths: ['demo'],
      },
    ],
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCommonStore, import.meta.hot))
}
