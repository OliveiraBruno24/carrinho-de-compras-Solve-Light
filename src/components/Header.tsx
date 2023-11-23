import { useContext } from "react";
import shoppingCartContext from "../context/shoppingCartContext";
import { useNavigate } from "react-router-dom";

export function Header() {
  const {total, listProducts,setlistProducts, setTotal, setNotasNecessarias} = useContext(shoppingCartContext)
  const navigate = useNavigate();
  const navigateTo = () => navigate('/')
 
  const handleClear = () => {
    setlistProducts([]);
    setTotal(0);
    setNotasNecessarias([])
    navigate("/")
}
  const isMyProductsPage = location.pathname === '/myProducts';


    return (
      <header className="bg-white  shadow dark:bg-gray-800 fixed top-0 left-0  w-full">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true as never} />
        <link href="https://fonts.googleapis.com/css2?family=Agbalumo&display=swap" rel="stylesheet"></link>
        <div className="w-full mx-auto max-w-screen p-4 flex items-center justify-between space-x-4">
          {isMyProductsPage ? (
          <>
          <button onClick={handleClear} className=" text-white px-4 py-2 rounded mt-4 flex relative ">
            <img className=" md:w-6 lg:w-7" src="src/images/lixeira-de-reciclagem.png" alt="" />
          </button>
          <h1 className="text-lg md:text-xl lg:text-2xl text-gray-500 dark:text-white mb-0 flex items-center justify-center flex-grow font-agbalumo">
            <img className="w-10 md:w-12 lg:w-16 mr-3"src="src/images/carrinho-carrinho.png" alt="Carrinho-de-compras.png" />
            <a href="https://solvel.tech/" target="_blank" className="hover:underline text-center">SolveLight Shopping Cart</a>
          </h1>
          <h1 className="text-12 font-bold mb-0">Total: R${total}</h1>
          <button onClick={navigateTo} className="ml-4 focus:outline-none">
            <img className="w-10 md:w-12 lg:w-16 mr-3" src="src/images/carrinho-de-compras.png" alt="carrinho-de-compras.png" />
          </button>
        </>
          ) : 
        <>
          <h1 className="text-lg md:text-xl lg:text-2xl text-gray-500 dark:text-white mb-0 flex items-center justify-center flex-grow font-agbalumo">
            <img className="w-10 md:w-12 lg:w-16 mr-3"src="src/images/carrinho-carrinho.png" alt="Carrinho-de-compras.png" />
            <a href="https://solvel.tech/" target="_blank" className="hover:underline text-center">SolveLight Shopping Cart</a>
          </h1>
          <button 
          disabled={listProducts.length === 0 } onClick={() => navigate('/myProducts')} className="ml-4 focus:outline-none">
          <img className="w-10 md:w-12 lg:w-16 mr-3" src="src/images/carrinho-de-compras.png" alt="carrinho-de-compras.png" />
        </button> 
        </>}
        </div>
      </header>
    );
  }
  

//   opção A oque eu ganho se escolher e oq perco se não escolher

//   B msm coisa
