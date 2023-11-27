import { Product } from "./types"

export const buttonControl = (listProducts: Product[]): boolean => {
    return listProducts.length === 9
}