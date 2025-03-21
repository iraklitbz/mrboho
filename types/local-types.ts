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
    surname: string | null
    total_price: string | null,
    status: string | null
}

export type DiscountCode = {
    active: boolean | null;
    amount: number | null;
    assigned_user: string | null;
    code: string | null;
    created_at: string;
    current_usage: number | null;
    expiration_date: string | null;
    id: string;
    max_usage: number | null;
    type: string | null;
    canBeShared: boolean;
};

export type DiscountCodeState = {
    valid: boolean;
    message: string | null;
    discount: DiscountCode[]
};
