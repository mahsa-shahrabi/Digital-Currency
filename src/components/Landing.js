import React, { useEffect, useState } from 'react';
import { getCoin } from '../services/api';
import Loader from './Loader';
import Coin from './Coin';
import styles from './Landing.module.css';

const Landing = () => {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchAPI = async () => {
            const data = await getCoin();
            console.log(data);
            setCoins(data);
        }
        fetchAPI();
    }, [])

    const changeHandler = event => {
        setSearch(event.target.value)
    }

    const searchedCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className={styles.container}>
            <div>
                <input type="text" placeholder='Search' value={search} onChange={changeHandler} />
                {
                    coins.length ?
                    <div className={styles.coinsContainer}>
                        {
                            searchedCoins.map(item => <Coin 
                                key={item.id}
                                name={item.name}
                                image={item.image}
                                symbol={item.symbol}
                                price={item.current_price}
                                marketCap={item.market_cap}
                                priceChange={item.price_change_percentage_24h}
                            />)
                        }
                    </div> :
                    <Loader />
                }
            </div>
        </div>
    );
};

export default Landing;