import { useState } from "react";
import shoppingCartContext from "./shoppingCartContext";
import { Product, ShoppingCartContextTypes } from "../utils/types";

type ProviderType = {
  children: React.ReactNode
};


function ShoppingCartProvider({children}: ProviderType) {
  const [product, setProduct] = useState('')
  console.log('context produto', product);
  const [price, setPrice] = useState<string | number>(0);
  const [listProducts, setlistProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [notasNecessarias, setNotasNecessarias] = useState<string[]>([]);




  const contextValue: ShoppingCartContextTypes = {
    product,
    setProduct,
    price,
    setPrice,
    listProducts, 
    setlistProducts,
    total,
    setTotal,
    notasNecessarias,
    setNotasNecessarias,
  }

  return (
    <shoppingCartContext.Provider value={contextValue}>
        {children}
    </shoppingCartContext.Provider>
  )
}

export default ShoppingCartProvider