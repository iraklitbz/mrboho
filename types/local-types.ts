import type {Maybe, OpticalGlassesContenfull, SunglassesContenfull} from "~/types/contenfull-types"

export type CartProduct = {
    product?: Maybe<OpticalGlassesContenfull> | Maybe<SunglassesContenfull>,
    total?: number
}

export type UserOrderForm = {
    name: string,
    email: string,
    surname: string,
    address: string,
    city: string,
    region: string,
    phone: string,
    additional: string,
    products?: string
}

export type UserOrderItem = {
    name: string,
    slug: string,
    imageUrl: string,
    quantity: string
}
