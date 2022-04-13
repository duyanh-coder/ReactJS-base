import React from 'react';
import { useState } from 'react';

const orders = [100, 200, 300]

export default function () {

    // use callback init State
    const [counter, setCounter] = useState(() => {
        const total = orders.reduce((total, current) => total + current)
        return total
    })

    // use callback setState
    const handleIncrease = () => {
        setCounter(prevCounter => prevCounter +1)
    }

//==============================================================

    // change or update State
    const [info, setInfo] = useState({
        name: 'Chau Duy Anh',
        age: 42,
        address: 'Ninh Kieu - TPCT'
    })

    const handleChange = () => {
        setInfo({
            ...info,        //Spread operator
            job: 'Front-End Developer'
        })
    }
    return (
        <>
            <div style={{ padding: 20 }} >
                <h3>Counter using useState()</h3>

                <h1>{counter}</h1>
                <button onClick={handleIncrease} >Increase</button>

            </div>

            <div style={{ padding: 20 }} >
                <h3>Change State</h3>

                <p>{JSON.stringify(info)}</p>
                <button onClick={handleChange} >Update</button>

            </div>
        </>
    )

}
