import React, { useState } from 'react';
import convertCurrencyToRub from "../helpers/convertCurrencyToRub";

const CartContext = React.createContext();

function CartContextProvider(props) {

    const [itemsInCart, setItemsInCart] = useState([]);

    const addItemToCart = (item, name) => {

        if(itemsInCart.find(i => i.id === item.T))
            return;

        setItemsInCart([
            ...itemsInCart,
            {
                id: item.T,
                name,
                number: item.P,
                price: convertCurrencyToRub(item.C), // цена за единицу товара
                clientNumber: 1, // желаемое количество для покупки
            }
        ])
    };

    const deleteItemFromCart = (itemId) => {
        const newItemsInCart = itemsInCart.filter(i =>
            i.id !== itemId
        );

        setItemsInCart(newItemsInCart);
    };

    const changeFieldValueInItem = (itemId, field, value) => {
        const newItemsInCart = itemsInCart.slice();
        const itemIndex = newItemsInCart.findIndex(i => i.id === itemId);
        newItemsInCart[itemIndex][field] = value;
        setItemsInCart(newItemsInCart);
    };

    const value = {
        itemsInCart,
        addItemToCart,
        deleteItemFromCart,
        changeFieldValueInItem
    };

    return (
        <CartContext.Provider
            value={value}
        >
            {props.children}
        </CartContext.Provider>
    );
}

export { CartContext, CartContextProvider };