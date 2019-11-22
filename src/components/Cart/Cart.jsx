import React, { useContext } from "react";

import styles from './Cart.module.css';
import CartRow from './CartRow';
import { CartContext } from '../../context/CartContext';

function Cart () {
    const {
        itemsInCart,
    } = useContext(CartContext);

    const cartRows = itemsInCart.map(g => (
        <CartRow
            key={g.id}
            item={g}
        />
    ));

    const totalPrice = itemsInCart.reduce((a, g) => a + g.price * g.clientNumber, 0)
        .toFixed(2);

    return (
        <div className={styles.container}>
            <div className={`${styles.row} ${styles.head}`}>
                <span className={styles.name}>
                    Наименование товара и описание
                </span>
                <span className={styles.number}>
                    Количество
                </span>
                <span className={styles.price}>
                    Цена
                </span>
            </div>
            {cartRows}
            {itemsInCart.length > 0 &&
                <div className={styles.totalPrice}>
                    Общая стоимость: {totalPrice}
                </div>
            }
        </div>
    )
}

export default Cart;