import React, { useState, useEffect } from 'react';
import { apiAll } from 'servise/fetchApi';
import CourseConvert from '../CourseConvert';
import s from './Main.module.scss'

function Main() {
    const [valueBase, setValueBase] = useState([]);
    const [firstInput, setFirstInput] = useState([]);
    const [secondInput, setSecondInput] = useState([]);
    const [firstAmount, setFirstAmount] = useState("");
    const [secondAmount, setSecondAmount] = useState("");
    
    useEffect(() => {
        apiAll().then((res) => {
            setValueBase(
                [
                    ...res,
                    {
                        r030: 0,
                        txt: "Українська гривня",
                        rate: 1,
                        cc: "UAH",
                        exchangedate: "",
                      },
                ].sort((a, b) => a.cc.localeCompare(b.cc))
            );
            setFirstInput({
                r030: 0,
                txt: "Українська гривня",
                rate: 1,
                cc: "UAH",
                exchangedate: "",
            });
            setSecondInput(res[0]);
        })
        .catch((error) => alert(error));
    }, []);

    const firstAmountHendler = (e) => {
        if (e.target) {
          setSecondAmount(
            ((e.target.value * firstInput.rate) / secondInput.rate).toFixed(2)
          );
          setFirstAmount(e.target.value);
        } else if (e) {
          setSecondAmount(((e * firstInput.rate) / secondInput.rate).toFixed(2));
        }
      };
      const secondAmountHendler = (e) => {
        if (e.target) {
          setFirstAmount(
            ((e.target.value * secondInput.rate) / firstInput.rate).toFixed(2)
          );
          setSecondAmount(e.target.value);
        } else if (e) {
          setFirstAmount(((e * secondInput.rate) / firstInput.rate).toFixed(2));
        }
      };

      useEffect(() => {
        secondAmountHendler(secondAmount);
      }, [firstInput]);
      useEffect(() => {
        firstAmountHendler(firstAmount);
      }, [secondInput]);

    return (
        <main>
            <section className={s.box}>
                <div>
                    <CourseConvert
                        valueImput={firstAmount}
                        onChangeInput={firstAmountHendler}
                        onChangeSelect={(e) =>
                            setFirstInput(valueBase.filter((cur) => cur.cc === e.target.value)[0])
                        }
                        valueSelect={firstInput.cc}
                        data={valueBase}
                    />
                    <CourseConvert
                        valueImput={secondAmount}
                        onChangeInput={secondAmountHendler}
                        onChangeSelect={(e) => {
                            setSecondInput(valueBase.filter((cur) => cur.cc === e.target.value)[0]);
                        }}
                        valueSelect={secondInput.cc}
                        data={valueBase}
                    />
                </div>
            </section>
        </main>
    );
   
}

export default Main;