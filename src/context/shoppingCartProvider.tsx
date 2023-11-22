import { useState } from "react";
import shoppingCartContext from "./shoppingCartContext";
import { Product, ShoppingCartContextTypes } from "../utils/types";

type ProviderType = {
  children: React.ReactNode
};


function ShoppingCartProvider({children}: ProviderType) {
  const [product, setProduct] = useState('')
  console.log('context produto', product);
  const [price, setPrice] = useState<string | number>('');
  const [listProducts, setlistProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [notasNecessarias, setNotasNecessarias] = useState<string[]>([]);


  const notasMinimas = () => {
    const notasDisponiveis = [100, 50, 20, 10, 5, 2, 1];
    let valorRestante = total;
    const notasUsadas: string[] = [];

    notasDisponiveis.forEach((nota) => {
      const qtdNotas = Math.floor(valorRestante / nota);
      if (qtdNotas > 0) {
        notasUsadas.push(`${qtdNotas} nota(s) de R$${nota}`);
        valorRestante -= qtdNotas * nota;
      }
    });
    setNotasNecessarias(notasUsadas);
};

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
    notasMinimas,
  }

  return (
    <shoppingCartContext.Provider value={contextValue}>
        {children}
    </shoppingCartContext.Provider>
  )
}

export default ShoppingCartProvider