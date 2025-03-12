import IconDelete from '@/assets/icons/delete.svg'
import IconMinus from '@/assets/icons/minus.svg'
import IconPlus from '@/assets/icons/plus.svg'
import { createInput } from '@formkit/vue'
import { markRaw, Transition } from 'vue'
import Icon from '~/components/Icon.vue'
const numberInputSchema = [
    {
        $el: 'div',
        attrs: {
            class: '$classes.container'
        },
        children: [
            {
                $el: 'div',
                attrs: {
                    class: '$classes.inputContainer'
                },
                children: [
                    {
                        $el: 'button',
                        if: '$deletable === false',
                        children: [
                            {
                                $cmp: 'Icon',
                                props: {
                                    icon: IconMinus,
                                    class: 'size-4 text-gray-700',
                                    onClick: '$handlers.updateValue(-1)',
                                    disabled: '$_value === $min || $disabled',
                                    autoAlign: false
                                }
                            }
                        ],
                        attrs: {
                            type: 'button',
                            class: '$classes.minus',
                            onClick: '$handlers.updateValue(-1)',
                            disabled: '$_value === $min || $disabled'
                        }
                    },
                    {
                        $el: 'button',
                        if: '$deletable === true',
                        children: [
                            {
                                $cmp: 'Transition',
                                props: {
                                    name: 'fade',
                                    css: true,
                                    type: 'transition',
                                    duration: 150,
                                    mode: 'out-in',
                                    appear: true
                                },
                                children: [
                                    {
                                        if: '$_value > $min',
                                        then: {
                                            $el: 'span',
                                            attrs: {
                                                key: 'minus'
                                            },
                                            children: [
                                                {
                                                    $cmp: 'Icon',
                                                    props: {
                                                        icon: IconMinus,
                                                        class: 'size-4 text-gray-700',
                                                        autoAlign: false
                                                    }
                                                }
                                            ]
                                        },
                                        else: {
                                            if: '$_value === $min',
                                            then: {
                                                $el: 'span',
                                                attrs: {
                                                    key: 'deletable'
                                                },
                                                children: [
                                                    {
                                                        $cmp: 'Icon',
                                                        props: {
                                                            icon: IconDelete,
                                                            class: 'size-4 text-gray-700',
                                                            autoAlign: false
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                ]
                            }
                        ],
                        attrs: {
                            type: 'button',
                            class: '$classes.minus',
                            onClick: '$handlers.updateValue(-1)',
                            disabled: '$disabled'
                        }
                    },
                    {
                        $el: 'input',
                        bind: '$attrs',
                        attrs: {
                            id: '$id',
                            name: '$node.name',
                            type: 'number',
                            class: '$classes.stepNumberQuantity',
                            onInput: '$handlers.DOMInput',
                            readonly: true,
                            onBlur: '$handlers.blur',
                            disabled: '$disabled',
                            max: '$max',
                            min: '$min',
                            value: '$_value'
                        }
                    },
                    {
                        $el: 'button',
                        children: [
                            {
                                $cmp: 'Icon',
                                props: {
                                    icon: IconPlus,
                                    class: 'size-4 text-gray-700',
                                    onClick: '$handlers.updateValue(1)',
                                    disabled: '$_value === $max || $disabled',
                                    autoAlign: false
                                }
                            }
                        ],
                        attrs: {
                            type: 'button',
                            class: '$classes.plus',
                            onClick: '$handlers.updateValue(1)',
                            disabled: '$_value === $max || $disabled'
                        }
                    }
                ]
            },
            {
                $cmp: 'Transition',
                props: {
                    name: 'fade',
                    css: true,
                    type: 'transition',
                    duration: 300,
                    mode: 'out-in'
                },
                children: [
                    {
                        $el: 'div',
                        if: '$_value === $max && $maxMessage !== ""',
                        attrs: {
                            class: '$classes.error',
                            innerHTML: '$maxMessage'
                        }
                    }
                ]
            }
        ]
    }
]
const library = markRaw({
    Transition,
    Icon
})
function addHandlers (node: any) {
    node.props.outerClass = (reactiveNode: { props: { small?: boolean } }) => ({
        'is-small': reactiveNode.props.small
    })
    node.on('created', () => {
        node.context.handlers.updateValue = (n: number) => () => {
            if (!node.context.disabled) {
                n = Number(n)
                if (
                    (Math.sign(n) === 1 && !node.context.max) // if is positive but no max value set
                    || (Math.sign(n) === 1 && node.context.max && node.context.value < node.context.max) // if is positive and max value set but value is less than max
                    || (Math.sign(n) === -1 && node.context.value > node.context.min)) { // if is negative
                    node.input(Number.parseInt(node.value) + n)
                    // trigger the blur handler because we've touched the input
                    node.on('settled', () => {
                        setTimeout(() => { // ensure we run after validation
                            node.context.handlers.blur()
                        }, 0)
                    })
                } else if (Math.sign(n) === -1 && node.context.value === node.context.min && node.context.deletable) {
                    node.emit('delete') // TODO: check if this is the correct way to emit a custom event, it only works by getting the node on mounted in the parent component but not via @delete="handler"
                }
            }
        }
    })
}
export default createInput(numberInputSchema, {
    library,
    props: {
        small: {
            // @ts-expect-error - TODO: there seems to be some weird TS with FormKit here. Lets see if we can make a github issue for it
            type: Boolean,
            default: false
        },
        max: {
            type: Number,
            default: 9999
        },
        min: {
            type: Number,
            default: 0
        },
        deletable: {
            type: Boolean,
            default: false
        },
        maxMessage: {
            type: String,
            default: ''
        }
    },
    features: [ addHandlers ]
})
