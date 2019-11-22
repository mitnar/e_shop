import React from "react";
import PropTypes from 'prop-types';

import styles from './Group.module.css';
import Good from '../Good/Good';

function Group(props) {
    const {
        name,
        goodsNames,
        goodsData,
    } = props;

    const { Value } = goodsData;

    const names = Object.keys(goodsNames).filter( id =>
        Value.Goods.find(g => g.T.toString() === id.toString()
    ));

    const goodsContent = names.map(id => (
            <Good
                key={id}
                name={goodsNames[id].N}
                item={Value.Goods.find(g => g.T.toString() === id.toString())}
            />
        )
    );

    return (
        <div className={styles.container}>
            <div className={styles.head}>
                { name }
            </div>
            {goodsContent}
        </div>

    )
}

Group.propTypes = {
    name: PropTypes.string,
    goodsNames: PropTypes.object,
    goodsData: PropTypes.object,
};

Group.defaultProps = {
    name: "",
    goodsNames: [],
    goodsData: null,
};

export default Group;