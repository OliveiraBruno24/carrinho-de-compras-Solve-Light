import { useContext, useMemo } from "react";
import shoppingCartContext from "../context/shoppingCartContext";
import { useNavigate } from "react-router-dom";
import shoppingCartIcon from '../images/carrinho-carrinho.png';
import trashIcon from '../images/lixeira-de-reciclagem.png';
import shoppingCartBlackIcon from '../images/carrinho-de-compras.png'

export function Header() {
  const {total, listProducts,setlistProducts, setTotal, setrequiredballots} = useContext(shoppingCartContext)
  const navigate = useNavigate();
  const navigateTo = () => navigate('/')
 
  const handleClear = () => {
    setlistProducts([]);
    setTotal(0);
    setrequiredballots([])
    navigate("/")
}
  const isMyProductsPage = location.pathname === '/myProducts';

  
  const hasAnyProduct = useMemo(() => {
    return  listProducts && listProducts.length > 0
    }, [listProducts]) 

    return (
      <header className="bg-white  shadow dark:bg-gray-800 fixed top-0 left-0  w-full">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true as never} />
        <link href="https://fonts.googleapis.com/css2?family=Agbalumo&display=swap" rel="stylesheet"></link>
        <div className="w-full mx-auto max-w-screen p-4 flex items-center justify-between space-x-4">
          {isMyProductsPage ? (
          <>
          <button onClick={handleClear} className=" text-white px-4 py-2 rounded mt-4 flex relative ">
            <img className=" w-10 md:w-8 lg:w-7 mr-3" src={trashIcon} alt="" />
          </button>
          <h1 className="text-lg md:text-xl lg:text-2xl text-gray-500 dark:text-white mb-0 flex items-center justify-center flex-grow font-agbalumo">
            <img className="w-10 md:w-12 lg:w-16 mr-3"src={shoppingCartIcon} alt="Carrinho-de-compras.png" />
            <a href="https://solvel.tech/" target="_blank" className="hover:underline text-center">SolveLight Shopping Cart</a>
          </h1>
          <h1 className="text-12 font-bold mb-0">Total: R${total}</h1>
          <button onClick={navigateTo} className="ml-4 focus:outline-none">
            <img className="w-10 md:w-12 lg:w-16 mr-3" src={shoppingCartBlackIcon} alt="carrinho-de-compras.png" />
          </button>
        </>
          ) : 
        <>
          <h1 className="text-lg md:text-xl lg:text-2xl text-gray-500 dark:text-white mb-0 flex items-center justify-center flex-grow font-agbalumo">
            <img className="w-10 md:w-12 lg:w-16 mr-3"src={shoppingCartIcon} alt="Carrinho-de-compras.png" />
            <a href="https://solvel.tech/" target="_blank" className="hover:underline text-center">SolveLight Shopping Cart</a>
          </h1>
          <button 
          disabled={!hasAnyProduct} onClick={() => navigate('/myProducts')} className="ml-4 focus:outline-none">
          <img className="w-10 md:w-12 lg:w-16 mr-3"
           src={shoppingCartBlackIcon} alt="carrinho-de-compras.png" />
        </button> 
        </>}
        </div>
      </header>
    );
  }
  