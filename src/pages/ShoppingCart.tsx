import { ChangeEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import shoppingCartContext from '../context/shoppingCartContext';
import { Product } from "../utils/types";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";



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
            <Header />
        <div className="container mx-auto my-8">
            <h1 className="text-3xl font-bold mb-4">Carrinho de compras</h1>
            <label className="block mb-4 font-bold">
                Produto:
                <input
                    type="text"
                    value={product}
                    onChange={handleProductChange}
                    placeholder="mouse gamer"
                    className="border p-2 rounded-2xl ml-4 text-center"
                />
            </label>
            <label className="block mb-4 px-5 font-bold">
                Preço:
                <input
                    type="number"
                    value={price}
                    onChange={handlePriceChange}
                    placeholder="235"
                    className="border p-2 rounded-2xl  ml-6 text-center"
                />
            </label>
            <button
                onClick={addProduct}
                disabled={!addProductButton}
                className="bg-neutral-600 text-white px-4 py-2 rounded mx-5"
            >
                Adicionar
            </button>
            <button
                onClick={finalizarCompras}
                disabled={listProducts.length === 0}
                className="bg-neutral-600 text-white px-4 py-2 rounded mr-2"
            >
                Finalizar compras
            </button>

        </div>
            <Footer />
        </>

    );
}

export default ShoppingCart;