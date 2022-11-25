import React, { useState, useEffect } from 'react';
import { apiUSD, apiEUR } from '../../servise/fetchApi';
import s from './HeaderCourse.module.scss';

function CurrentCourse() {

    const [currencyUSD, setCurrencyUSD] = useState([]);
    const [currencyEUR, setCurrencyEUR] = useState([]);

    useEffect(() => {
        apiUSD()
        .then(res => res.json())
        .then(
            (result) => {
                setCurrencyUSD(result);
            }
        )
    }, [])
    useEffect(() => {
        apiEUR()
        .then(res => res.json())
        .then(
            (result) => {
                setCurrencyEUR(result);
            }
        )
    }, [])
    return (
        <div className={s.block}> 
            {currencyUSD.map(item => (                                               
                <span key={item.r030} className={s.date}>На {item.exchangedate} р.</span>   
            ))}             
            {currencyUSD.map(item => (                                               
                <div key={item.r030} className={s.box}>
                    <p className={s.name}>{item.txt}</p>
                    <span className={s.value}>{item.rate}</span>
                    <p className={s.text}>грн.</p>
                </div>
            ))}
            {currencyEUR.map(item => (                                                
                <div key={item.r030} className={s.box}>
                    <p className={s.name}>{item.txt}</p>
                    <span className={s.value}>{item.rate}</span>
                    <p className={s.text}>грн.</p>
                </div>               
            ))}
        </div>
    );
}

export default CurrentCourse;