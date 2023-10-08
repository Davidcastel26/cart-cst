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

export const AppContext = createContext();

export const initialState = {
    loading: false,
    cart: new Map(cartItems.map((item) => [item.id, item]))
}

export const AppProvider = ({children}) => {

   const [ state, dispatch ] = useReducer(reducer, initialState)

   const clearCart = () => {
    dispatch({type: CLEAR_CART})
   }

   const remove = (id) => {
    dispatch({ type:REMOVE,  payload:{ id }})
   }

    return (
        <AppContext.Provider value={{ ...state, clearCart, remove }}>
            {children}
        </AppContext.Provider>
    )

}
