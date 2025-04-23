export const useThemeStore = defineStore('theme', {
  state: () => ({
    isDark: false
  }),
  persist: {
    storage: piniaPluginPersistedstate.localStorage()
  },
  actions: {
    toggleTheme() {
      this.isDark = !this.isDark;
      
      if (this.isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },
    initTheme() {
      if (this.isDark) {
        document.documentElement.classList.add('dark');
      }
    }
  }
});