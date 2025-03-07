import type { NumberFormatOptions } from '@intlify/core-base'

export function currencyFormat (amount: number, showSign: boolean = true, currency: string = 'GEL') {
    const formatOptions: NumberFormatOptions = {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }
    if (showSign) {
        formatOptions.currency = currency
        formatOptions.style = 'currency'
    }
    return new Intl.NumberFormat('ge-GE', formatOptions).format(amount).replace(/\s/g, ' ')
}
