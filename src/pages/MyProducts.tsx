import { useNavigate } from "react-router-dom"
import { useContext } from "react";
import shoppingCartContext from '../context/shoppingCartContext';


export function MyProducts() {

    const {listProducts,notasNecessarias, total, setlistProducts, setTotal, setNotasNecessarias} = useContext(shoppingCartContext);
    const navigate = useNavigate();
    
    const handleClear = () => {
        setlistProducts([]);
        setTotal(0);
        setNotasNecessarias([])
        navigate("/")
    }

    

    return (
         
         <div>
         <h3>Total: {total}</h3>

        <h2>Lista de Produtos:</h2>
        <ul>
        {listProducts.map((item, index) => (
        <li key={index}>
        {item.product} - R${item.price}
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