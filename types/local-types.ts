import type {Maybe, OpticalGlassesContenfull, SunglassesContenfull} from "~/types/contenfull-types"

export type CartProduct = {
    product: Maybe<OpticalGlassesContenfull> | Maybe<SunglassesContenfull>,
    total: number
}
