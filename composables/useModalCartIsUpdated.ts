import { useModal } from 'vue-final-modal'
import { blockScroll, unBlockScroll } from '~/composables/blockScroll'
import ModalCartIsUpdated from '~/components/Modal/ModalCartIsUpdated.vue'


export async function showModalCartIsUpdated () {
    const cartIsUpdatedModalInstance = useModal({
        component: ModalCartIsUpdated,
        attrs: {
            onBeforeOpen () {
                blockScroll(window.scrollY)
            },
            onBeforeClose () {
                unBlockScroll()
            },
            async onClose () {
                await cartIsUpdatedModalInstance.close()
            }
        }
    })
    await cartIsUpdatedModalInstance.open()
}
