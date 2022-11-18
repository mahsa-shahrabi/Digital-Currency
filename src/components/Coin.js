import React from 'react';
import styles from './Coin.module.css';

const Coin = ({name, image, symbol, price, marketCap, priceChange}) => {
    return (
        <div className={styles.container}>
            <img src={image} alt="coin" />
            <span className={styles.name}>{name}</span>
            <span className={styles.symbol}>{symbol.toUpperCase()}</span>
            <span className={styles.price}>$ {price.toLocaleString()}</span>
            <span className={priceChange>0 ? styles.greenChange : styles.redChange}>{priceChange.toFixed(2)}</span>
            <span>$ {marketCap.toLocaleString()}</span>
        </div>
    );
};

export default Coin;