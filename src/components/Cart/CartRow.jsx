import React, { useContext } from "react";
import PropTypes from 'prop-types';

import styles from './Cart.module.css';
import { CartContext } from '../../context/CartContext';

function CartRow (props) {
    const {
        item
    } = props;

    const {
        deleteItemFromCart,
        changeFieldValueInItem,
    } = useContext(CartContext);

    const wrappedSetNumber = (e) => {
        const { value, min, max } = e.target;
        const newNumber = Math.max(Number(min), Math.min(Number(max), Number(value)));
        changeFieldValueInItem(item.id, 'clientNumber', newNumber)
    };

    return (
        <div className={styles.row}>
            <span className={styles.name}>
                {item.name}
            </span>
            <span className={styles.number}>
                <input
                    className={styles.numberInput}
                    type="number"
                    min="1"
                    max={item.number}
                    value={item.clientNumber}
                    onChange={wrappedSetNumber}
                />
            </span>
            <span className={styles.price}>
                {item.price} руб./шт.
            </span>
            <span
                className={styles.delete}
                onClick={() => deleteItemFromCart(item.id)}
            >
                Удалить
            </span>
        </div>
    )
}

CartRow.propTypes = {
    item: PropTypes.object.isRequired,
};

export default CartRow;