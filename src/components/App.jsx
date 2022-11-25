// import React, { useEffect } from "react";
// import { useEffect } from "react-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
// import {fetchConvert} from "../servise/fetchApi"
import s from './App.module.scss'

export const App = () => {
  

//   useEffect(() => {
//     var myHeaders = new Headers();
//     myHeaders.append("apikey", "HfLUXlTQb06iHBVUlFrCYPtznjSyE7pW");
    
//     var requestOptions = {
//       method: 'GET',
//       redirect: 'follow',
//       headers: myHeaders
//     };
    
//     fetch("https://api.apilayer.com/fixer/convert?to=to&from=from&amount=amount", requestOptions)
//       .then(response => response.text())
//       .then(result => console.log(result))
//       .catch(error => console.log('error', error));
//       // console.log(myHeaders);
// }, []);

  return (
    <div className={s.box}>
      <Header />
      <Main />
      <Footer />
      
    </div>
  );
};
