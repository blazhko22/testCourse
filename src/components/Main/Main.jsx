import React, { useState, useEffect } from 'react';

function Main() {

    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    const [currencys, setCurrency] = useState([]);
    // console.log(currency);

    useEffect(() => {
        // fetch("https://api.monobank.ua/bank/currency?date")
        fetch("https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=5")
        
      .then(res => res.json())
      .then(
        (result) => {
          // setIsLoaded(true);
          setCurrency(result);
        },
        // (error) => {
        //   setIsLoaded(true);
        //   setError(error);
        // }
      )
    }, [])
    console.log(currencys)
    return (
        <main>
            <section>
                <div>
                    <div>
                        <input type="text" />
                        <select name="" id="">
                            <option value="">UAH</option>
                            <option value="">USD</option>
                            <option value="">EUR</option>                            
                        </select>
                    </div>
                    <span>:</span>
                    <div>
                        <input type="text" />
                        <select name="" id="">
                            <option value="">UAH</option>
                            <option value="">USD</option>
                            <option value="">EUR</option>   
                        </select>
                    </div>
                </div>
            </section>
        </main>
    );
   
}

export default Main;