import { createContext, useContext, useEffect, useReducer } from "react";
import cartReducer from "./CartReducer";

const CartContext = createContext();
const CartContextDispatcher = createContext();

const initialState = {
    cart : [] ,
    total : 0
}
const CartProvider = ({ children }) => {

  const [cart, dispatch] = useReducer(cartReducer, initialState);
  
  useEffect(() => {
    dispatch({type:"ADD_PRODUCT_LOCALSTORAGE"})
  }, []);
  
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);
  
  return (
    <CartContext.Provider value={cart}>
      <CartContextDispatcher.Provider value={dispatch}>
        {children}
      </CartContextDispatcher.Provider>
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
export const useCartActions = () => useContext(CartContextDispatcher);
