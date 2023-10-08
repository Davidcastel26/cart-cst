import { createContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";
import cartItems from "./data";
import {
    CLEAR_CART,
    REMOVE,
    INCREASE,
    DECREASE,
    LOADING,
    DISPLAY_ITEMS,
} from './actions'
import { getTotals } from "./utils";

export const AppContext = createContext();

export const initialState = {
    loading: false,
    cart: new Map(cartItems.map((item) => [item.id, item]))
}

export const AppProvider = ({children}) => {

   const [ state, dispatch ] = useReducer(reducer, initialState)

   const {totalAmount, totalCost} = getTotals(state.cart)

   const clearCart = () => {
    dispatch({type: CLEAR_CART})
   }

   const remove = (id) => {
    dispatch({ type:REMOVE,  payload:{ id }})
   }

   const increase = (id) => {
    dispatch({ type:INCREASE, payload:{id}})
   }

   const descrease = (id) => {
    dispatch({ type:DECREASE, payload:{id} })
   }

    return (
        <AppContext.Provider 
            value={{
                ...state, 
                clearCart, 
                remove, 
                increase, 
                descrease,
                totalCost,
                totalAmount
            }}
        >
            {children}
        </AppContext.Provider>
    )

}
