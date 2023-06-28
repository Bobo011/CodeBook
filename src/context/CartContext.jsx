import { useContext } from "react";
import { createContext }  from "react";

const cartInitialState ={
    cartList:[],
    total:0,

}

const CartContext = createContext(cartInitialState)

export const CartProvider =({children})=>{

    const value ={
        cartLits :[],
        total:0
    }
return (
    <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
)
}

export const useCart = ()=> {
    const context = useContext(CartContext)
    return context
}