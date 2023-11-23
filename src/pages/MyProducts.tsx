import { useContext, useEffect, useState } from "react";
import shoppingCartContext from '../context/shoppingCartContext';
import { Product } from "../utils/types";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";


export function MyProducts() {

    const {listProducts,notasNecessarias, total, setlistProducts, setTotal,  notasMinimas} = useContext(shoppingCartContext);
    const [isAddButtonDisabled, setIsAddButtonDisabled] = useState(false);
    

    const addQuantity = (index: number) => {
        setlistProducts((prevListProducts) => {
            const updatedList = [...prevListProducts];

            if (updatedList.length <= 9 && getTotalQuantity(updatedList) <= 9) {
                const updatedTotal = total + Number(updatedList[index].price);

                if (updatedList[index].quantity < 10) {
                    updatedList[index].quantity += 1;
                }

                setTotal(updatedTotal);
            }


            
            return updatedList;
        });
    };

    const getTotalQuantity = (products: Product[]) => {
        return products.reduce((totalQuantity, product) => totalQuantity + (product.quantity || 0), 0);
    };

    useEffect(() => {
        notasMinimas();
        if(!listProducts) setTotal(0)
    },[total])

    const removeQuantity = (index: number) => {
        setlistProducts(prevListProducts => {
            const updatedList: Product[] = [...prevListProducts];
            const updatedTotal = total - Number(updatedList[index].price);

            if (updatedList[index].quantity !== undefined && updatedList[index].quantity > 1) {
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
        <div className="container mx-auto my-8 mt-24">
      
          
      
          <div className="flex flex-col md:flex-row justify-start dark:bg-gray-800 rounded-3xl p-3 md:p-6 overflow-hidden shadow-lg">
      
            <div className="md:w-2/3 dark:bg-gray-700 rounded-3xl mb-4 md:mb-0 ">
              <h2 className="text-2xl font-bold mb-2 text-white">Lista de Produtos: </h2>
              <ul>
                {listProducts.map((item, index) => (
                  <li key={index} className="flex items-center justify-center mb-2 text-white ">
                    <span className="mr-2"> {item.product} - R${item.price}</span>
                    <button onClick={() => addQuantity(index)}
                      disabled={isAddButtonDisabled} className="bg-zinc-600 text-white px-2 py-1 rounded">
                      +
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button onClick={() => removeQuantity(index)} className="bg-black text-white px-2 py-1 rounded">
                      -
                    </button>
                  </li>
                ))}
              </ul>
             
            </div>
      
            <div className=" shadow-custom w-full min-w-min md:w-1/3 ml-0 md:ml-4 p-4 rounded-3xl dark:bg-gray-700  ">
              <h2 className="text-2xl font-bold mb-2 text-white">Notas Necessárias:</h2>
              <ul className="flex flex-wrap items-center">
                {notasNecessarias.map((nota, index) => (
                  <li key={index} className="flex items-center justify-center mb-2 text-white">
                    <img className="w-5 md:w-6 lg:w-8 mr-1" src="src/images/dinheiro.png" alt="nota-de-dinheiro" />
                    <span>{nota}</span>
                  </li>
                ))}
              </ul>
            
            
            </div>
            
          </div>
          <Header />
          <Footer />
        </div>
        
      );
      
}