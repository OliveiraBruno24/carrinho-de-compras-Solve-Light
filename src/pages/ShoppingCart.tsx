import { ChangeEvent, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import shoppingCartContext from '../context/shoppingCartContext';
import { Product } from "../utils/types";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { buttonControl } from "../utils/buttonControl";



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
        minimumBanknotes,
        canAddProduct
    } = useContext(shoppingCartContext);
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
            buttonControl(listProducts)
            setProduct('');
            setPrice('');
    }

    
    }
    const hasAnyProduct = useMemo(() => {
    return  listProducts && listProducts.length > 0
    }, [listProducts]) 

    const finishshopping = () => {
        minimumBanknotes();
        navigate('/myProducts')
    }

  
    
    return (
        <>
            <Header />
        <div className="container mx-auto my-8">
            <h1 className="text-3xl font-bold mb-4">Carrinho de compras</h1>
            <label className="flex mb-4 font-bold flex-nowrap">
                Produto:
                <input
                    type="text"
                    value={product}
                    onChange={handleProductChange}
                    placeholder="mouse gamer"
                    className="border p-2 rounded-2xl ml-4 text-center"
                />
            </label>
            <label className="flex mb-4 px-5 font-bold flex-nowrap">
                Preço:
                <input
                    type="text"
                    value={price}
                    onChange={handlePriceChange}
                    placeholder="235"
                    className="border p-2 rounded-2xl  ml-4 text-center"
                />
                {errorMessage === true ? <h1 className="text-red-600"> O preço deve ser inteiro e positívo</h1>: null}
            </label>
            <button
                disabled={!canAddProduct}
                onClick={addProduct}
                className="bg-neutral-600 text-white px-4 py-2 rounded mx-5"
            >
                Adicionar
            </button>
            <button
                onClick={finishshopping}
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