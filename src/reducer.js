import {
    CLEAR_CART,
    REMOVE,
    INCREASE,
    DECREASE,
    LOADING,
    DISPLAY_ITEMS,
} from './actions'

export const reducer = (state,action) => {

    switch(action.type){
        case CLEAR_CART:
            return {...state, cart: new Map() };
        case REMOVE:
            const newCart = new Map(state.cart);
            newCart.delete(action.payload.id)
            return {...state, cart:newCart };
        case INCREASE:
            const plusCart = new Map(state.cart);
            const itemId = action.payload.id;
            const item = plusCart.get(itemId)
            const newItemUp = {...item, amount: item.amount + 1}
            plusCart.set(itemId, newItemUp)
            return {...state, cart: plusCart};
        case DECREASE:
            const deCart = new Map(state.cart)
            const itemID = action.payload.id;
            const items = deCart.get(itemID)
            if(items.amount === 1){
                deCart.delete(itemID);
                return {...state, cart: deCart }
            }
            const newItemDown = {...items, amount: items.amount - 1}
            deCart.set(itemID, newItemDown)
            return {...state, cart: deCart}
        default:
            throw new Error(`no matching action type: ${action.type}`)
    }
    return state
}