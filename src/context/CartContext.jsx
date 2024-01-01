import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from './cart_reducer';
const CartContext = createContext();

const getLocalCartData = () => {
    let localCartData = localStorage.getItem("Cart");
    if(localCartData == []) {
        return [];
    } else {
        return JSON.parse(localCartData);
    }
};

const initialState = {
    cart: getLocalCartData(),
    total_item: "",
    total_amount: "",
    shipping_fee: 100,
};

const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (id, amount, product) => {
        dispatch({type:"ADD_TO_CART", payload: {id, amount, product}});
    };

    const removeItem = (id) => {
        dispatch({type: "REMOVE_ITEM", payload: id});
    };
    useEffect(() => {
        localStorage.setItem("Cart", JSON.stringify(state.cart));
    }, [state.cart]);

    return <CartContext.Provider value={{...state, addToCart, removeItem}}>
        {children}
    </CartContext.Provider>
};

const useCartContext = () => {
    return useContext(CartContext);
};

export { CartProvider, useCartContext };