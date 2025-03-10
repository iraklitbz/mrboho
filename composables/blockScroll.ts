import { useVfm } from 'vue-final-modal'
let modalScrollPosition = 0
// eslint-disable-next-line unused-imports/no-unused-vars
let scrollBarWidth = 0

// TODO: it would be best to not use inline styles, but appended tailwind classes instead. That way we can use e.g. overflow-y-hidden and lg:overflow-y-auto together and that would prevent the page from becoming unusable when the user resizes their screen to desktop after being on mobile and having the main nav drawer open
// TODO: fix issue on laptops that do not have a mouse connected and hence have no scrollbar on macos (test all OS settings)
export function blockScroll (scrollPosition: number) {
    const vfm = useVfm()
    const { dynamicModals } = vfm
    if (dynamicModals.length <= 1) {
        modalScrollPosition = scrollPosition
        const htmlElement = document.querySelector('html')
        if (htmlElement !== null) {
            htmlElement.style.overflowY = 'scroll'
            htmlElement.style.position = 'fixed'
            htmlElement.style.scrollBehavior = 'auto'
            htmlElement.style.top = `-${modalScrollPosition}px`
            htmlElement.style.width = '100%'
        }
    }
}

export function unBlockScroll () {
    const vfm = useVfm()
    const { dynamicModals } = vfm
    if (dynamicModals.length <= 1) {
        const htmlElement = document.querySelector('html')
        if (htmlElement !== null) {
            htmlElement.style.removeProperty('padding-right')
            htmlElement.style.removeProperty('overflow')
            htmlElement.style.removeProperty('position')
            htmlElement.style.removeProperty('top')
            window.scrollTo(0, modalScrollPosition)
            htmlElement.style.removeProperty('scroll-behavior')
            htmlElement.style.removeProperty('width')
        }
    }
}

export function getScrollBarWidth () {
    if (typeof document === 'undefined') {
        return 0
    }
    const { body } = document
    const box = document.createElement('div')
    const boxStyle = box.style
    let width = 0
    boxStyle.position = 'absolute'
    boxStyle.top = boxStyle.left = '-9999px'
    boxStyle.width = boxStyle.height = '100px'
    boxStyle.overflow = 'scroll'
    body.appendChild(box)
    width = box.offsetWidth - box.clientWidth
    body.removeChild(box)
    scrollBarWidth = width
    return width
}
