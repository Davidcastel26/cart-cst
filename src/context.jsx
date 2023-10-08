import { createContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";
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
    cart: []
}

export const AppProvider = ({children}) => {

   const [ state, dispatch ] = useReducer(reducer, initialState)

    return (
        <AppContext.Provider value={{ ...state }}>
            {children}
        </AppContext.Provider>
    )

}
