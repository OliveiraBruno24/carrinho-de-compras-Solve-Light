import { ChangeEvent, useContext, useMemo, useState } from "react";
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
   const [errorMessage, setErrorMessage] = useState<boolean>(false)
    
    const navigate = useNavigate();

    const handleProductChange = (event: ChangeEvent<HTMLInputElement>) => {
        setProduct(event.target.value);
    }
    const handlePriceChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (/^\d+$/.test(value) || value === '') {
            setPrice(Number(value));
        }
        else {
            setErrorMessage(true)
            setTimeout(() => {
            setErrorMessage(false)
           }, 2500) 
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

    const hasAnyProduct = useMemo(() => {
    return  listProducts.length > 0
    }, [listProducts]) 

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
                    type="text"
                    value={price}
                    onChange={handlePriceChange}
                    placeholder="235"
                    className="border p-2 rounded-2xl  ml-6 text-center"
                />
                {errorMessage === true ? <h1 className="text-red-600"> O preço deve ser inteiro e positívo</h1>: null}
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
                disabled={!hasAnyProduct}
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