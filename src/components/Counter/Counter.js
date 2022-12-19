import React, {useState} from 'react';

function Counter({counter,setCounter}) {

    return (
        <>
            <button
                type = "button"
                onClick = {() => setCounter(counter - 1)}
                disabled = {counter === 0}
            >-
            </button>
            <p>{counter}</p>
            <button
                type = "button"
                onClick={() => setCounter(counter + 1)}
                disabled = {counter === 0}
            >+
            </button>
        </>
    )
}

export default Counter;