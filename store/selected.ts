

export const selectedStore = defineStore('selectedData', {
    state: () => ({
        glasses: '' as string,
    }),
    persist: {
        storage: piniaPluginPersistedstate.localStorage()
    },
    actions: {
        handleSelected(glasses: string) {
            this.glasses = glasses
        }
    },
})
