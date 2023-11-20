import { createContext } from "react";
import { ShoppingCartContextTypes } from "../utils/types";


const shoppingCartContext = createContext({} as ShoppingCartContextTypes);

export default shoppingCartContext;