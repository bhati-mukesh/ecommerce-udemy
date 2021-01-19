const { TOGGLE_CART_HIDDEN, ADD_ITEM } = require("../constants");

export const toggleCartHidden = () => {
    return {
        type: TOGGLE_CART_HIDDEN
    }
} 

export const addItem = (payload) => ({
    type: ADD_ITEM,
    payload
})



