import { ChangeEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import shoppingCartContext from '../context/shoppingCartContext';
import { Product } from "../utils/types";



function ShoppingCart() {
    const {
        product, 
        setProduct,
        price,
        setPrice,
        listProducts,
        setlistProducts,
        total,
        setTotal,
        notasMinimas
    } = useContext(shoppingCartContext);
   const [addProductButton, setAddProductButton] = useState<boolean>(true)

    
    const navigate = useNavigate();

    const handleProductChange = (event: ChangeEvent<HTMLInputElement>) => {
        setProduct(event.target.value);
    }
    const handlePriceChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (/^\d+$/.test(value) || value === '') {
            setPrice(Number(value));
        }
    };

    const addProduct = () => {
        if(product && price !== '') {
            const newProduct: Product = {product: product, price: parseInt(price as string), quantity: 1};
            setlistProducts([...listProducts, newProduct]);
            setTotal(total + (parseInt(price as string)))
            if(listProducts.length === 9) {
                setAddProductButton(false)
            }
            setProduct('');
            setPrice('');
            }
    }

    const finalizarCompras = () => {
        notasMinimas();
        navigate('/myProducts')
    }
    
    return (
        <>
            <h1>Carrinho de compras</h1>
            <label>
                Produto:
                <input type="text"  value={product} onChange={handleProductChange} placeholder="mouse gamer"/>
            </label>
            <label>
                Preço:
                <input type="number" value={price} onChange={handlePriceChange} placeholder="235"/>
            </label>
            <button onClick={addProduct}
            disabled={!addProductButton}>Adicionar</button>
            <button onClick={finalizarCompras}
            disabled={listProducts.length === 0}>Finalizar compras</button>
           
        </>
    );
}

export default ShoppingCart;