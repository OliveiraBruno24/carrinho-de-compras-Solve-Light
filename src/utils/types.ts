
export type Product = {
    product: string,
    price: string | number;
}

export type ShoppingCartContextTypes = {
    product: string,
    setProduct: React.Dispatch<React.SetStateAction<string>>,
    price: string | number,
    setPrice: React.Dispatch<React.SetStateAction<string | number>>,
    listProducts: Product[],
    setlistProducts: React.Dispatch<React.SetStateAction<Product[]>>,
    total: number,
    setTotal: React.Dispatch<React.SetStateAction<number>>,
    notasNecessarias: string[],
    setNotasNecessarias: React.Dispatch<React.SetStateAction<string[]>>
}
