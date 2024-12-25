export const toggleMenu = defineStore('toggleMenu', {
    state: () => ({
        menuIsOpen: false,
    }),
    actions: {
        handleToggleMenu() {
            this.menuIsOpen = !this.menuIsOpen
            if (this.menuIsOpen) {
                document.documentElement.classList.add('menu-open')
            } else {
                document.documentElement.classList.remove('menu-open')
            }
        },
        handleCloseMenu() {
            this.menuIsOpen = false
            document.documentElement.classList.remove('menu-open')
        },
    },
})
