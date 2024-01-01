import React from 'react'

const cartReducer = (state, action) => {
    if(action.type === "ADD_TO_CART") {
        let { id, amount, product } = action.payload;

    let existingProduct = state.cart.find(
        (curItem) => curItem.id === id
    );
    
    if(existingProduct) {
        let updatedProduct = state.cart.map(
            (curElem) => {
                if(curElem.id === id) {
                    let newAmount = curElem.amount + amount;
                    return {
                        ...curElem,
                        amount: newAmount,
                    }
                } else {
                    return curElem;
                }
            }
        )
        return {
            ...state,
            cart:updatedProduct,
        };
    } else {
        let cartProduct = {
            id,
            name: product.title,
            amount,
            image: product.image,
            price: product.price,
        };
    
        return {
            ...state,
            cart: [...state.cart, cartProduct],
        };
    }
}

    if(action.type === "REMOVE_ITEM") {
        let updatedCart = state.cart.filter(
            (curItem) => curItem.id !== action.payload
        );
        return {
            ...state,
            cart: updatedCart,
        }
    }

    if(action.type === "CLEAR_CART") {
        return {
            ...state,
            cart: [],
        }
    }

    return state;

};

export default cartReducer
