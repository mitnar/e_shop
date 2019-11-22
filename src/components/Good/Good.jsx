import React, { useContext } from "react";
import PropTypes from 'prop-types';

import styles from './Good.module.css';
import convertCurrencyToRub from "../../helpers/convertCurrencyToRub";
import { CartContext } from "../../context/CartContext";

function Good (props) {
    const {
        name,
        item,
    } = props;

    const {
        addItemToCart
    } = useContext(CartContext);

    const price = convertCurrencyToRub(item.C);

    return (
        name && item &&
        <div className={styles.row} onClick={() => addItemToCart(item, name)}>
            {name} ({item.P})
            <span className={styles.price}>
                { price }
            </span>
        </div>
    )
}

Good.propTypes = {
    name: PropTypes.string,
    item: PropTypes.object.isRequired,
};

Good.defaultProps = {
    name: '',
};

export default Good;