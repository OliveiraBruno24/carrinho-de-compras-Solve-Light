import { useState } from "react";
import shoppingCartContext from "./shoppingCartContext";
import { Product, ShoppingCartContextTypes } from "../utils/types";
import { calcBankNotes } from "../utils/calc";
import { buttonControl } from "../utils/buttonControl";

type ProviderType = {
  children: React.ReactNode
};

function ShoppingCartProvider({children}: ProviderType) {
  const [product, setProduct] = useState('');
  const [price, setPrice] = useState<string | number>('');
  const [listProducts, setlistProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [requiredballots, setrequiredballots] = useState<string[]>([]);
  const [canAddProduct, setCanAddProduct] = useState<boolean>(true);
  
  const minimumBanknotes = () => {
    setrequiredballots(calcBankNotes(total));
  };

  const handleButtonControl = () => 
    setCanAddProduct(buttonControl(listProducts));
  

  const contextValue: ShoppingCartContextTypes = {
    product,
    setProduct,
    price,
    setPrice,
    listProducts, 
    setlistProducts,
    total,
    setTotal,
    requiredballots,
    setrequiredballots,
    minimumBanknotes,
    handleButtonControl,
    canAddProduct,
    setCanAddProduct,
  };

  return (
    <shoppingCartContext.Provider value={contextValue}>
        {children}
    </shoppingCartContext.Provider>
  );
}

export default ShoppingCartProvider;
