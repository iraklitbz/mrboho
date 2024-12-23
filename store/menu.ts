export const toggleMenu = defineStore('toggleMenu', {
    state: () => ({
        menuIsOpen: false,
    }),
    actions: {
        handleToggleMenu() {
            this.menuIsOpen = !this.menuIsOpen
            if (this.menuIsOpen) {
                document.body.classList.add('menu-open')
            } else {
                document.body.classList.remove('menu-open')
            }
        },
        handleCloseMenu() {
            this.menuIsOpen = false
            document.body.classList.remove('menu-open')
        },
    },
})
