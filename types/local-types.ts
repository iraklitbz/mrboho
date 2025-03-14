import type {Maybe, OpticalGlassesContenfull, SunglassesContenfull} from "~/types/contenfull-types"
import type {Json} from "~/types/supabase";

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

export type ExtendedUserOrderForm = UserOrderForm & {
    id: string,
    created_at: string,
    order_id: string,
    total_price: string
};

export type UserOrderItem = {
    name: string,
    slug: string,
    productID: string,
    imageUrl: string,
    price: string,
    quantity: string
}

export type OrderSuperbase = {
    address: string | null
    city: string | null
    created_at: string
    email: string | null
    id: string
    info_adicional: string | null
    name: string | null
    phone: string | null
    products: Json | null
    region: string | null
    surname: string | null
    total_price: string | null,
    status: string | null
}

