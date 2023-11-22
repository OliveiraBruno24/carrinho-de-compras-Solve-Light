import { useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import shoppingCartContext from '../context/shoppingCartContext';
import { Product } from "../utils/types";


export function MyProducts() {

    const {listProducts,notasNecessarias, total, setlistProducts, setTotal, setNotasNecessarias, notasMinimas} = useContext(shoppingCartContext);
    const navigate = useNavigate();
    const [isAddButtonDisabled, setIsAddButtonDisabled] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const handleClear = () => {
        setShowErrorMessage(false);
        setlistProducts([]);
        setTotal(0);
        setNotasNecessarias([])
        navigate("/")
    }

    const addQuantity = (index: number) => {
        setlistProducts((prevListProducts) => {
            const updatedList = [...prevListProducts];

            if (updatedList.length <= 9 && getTotalQuantity(updatedList) <= 9) {
                const updatedTotal = total + Number(updatedList[index].price);

                if (updatedList[index].quantity < 10) {
                    updatedList[index].quantity += 1;
                }

                setTotal(updatedTotal);
                setShowErrorMessage(false);
            }

            setIsAddButtonDisabled(updatedList.length >= 10 || getTotalQuantity(updatedList) >= 10);

            if(!isAddButtonDisabled) setShowErrorMessage(true); setTimeout(() => {
                setShowErrorMessage(false);
            }, 2500);
            return updatedList;
        });
    };

    const getTotalQuantity = (products: Product[]) => {
        return products.reduce((totalQuantity, product) => totalQuantity + (product.quantity || 0), 0);
    };

    useEffect(() => {
        notasMinimas();
    },[total])

    const removeQuantity = (index: number) => {
        setlistProducts(prevListProducts => {
            const updatedList: Product[] = [...prevListProducts];
            const updatedTotal = total - Number(updatedList[index].price);

            if (updatedList[index].quantity !== undefined && updatedList[index].quantity >= 1) {
                updatedList[index].quantity -= 1;
            } else {
                updatedList.splice(index, 1);
                
            }

            setTotal(updatedTotal);
            setIsAddButtonDisabled(updatedList.length >= 10 || getTotalQuantity(updatedList) >= 10);
            return updatedList;
        });
    };

    return (
         
         <div>
         <h3>Total: {total}</h3>

        <h2>Lista de Produtos:</h2>
        <ul>
        {listProducts.map((item, index) => (
        <li key={index}>
        {showErrorMessage && <h4>São permitidos somente 10 produtos por carrinho</h4>}
        {item.product} - R${item.price}
        <button onClick={() => addQuantity(index)} disabled={isAddButtonDisabled}>+</button>
        {item.quantity }
        <button onClick={() => removeQuantity(index)}>-</button>
        </li>
        ))}
        </ul>

        <h2>Notas Necessárias:</h2>
        <ul>
        {notasNecessarias.map((nota, index) => (
        <li key={index}>{nota}</li>
        ))}
        </ul> 
        <button onClick={handleClear}>carrinho</button>
        </div>
        )
    
}