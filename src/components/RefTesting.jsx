import { useRef, useState } from "react"

export default function RefTest() {
    const counterRef = useRef(0);

    const clickCount = () => {
        counterRef.current = counterRef.current + 1
    }

    const verifyClick = () => {
        alert(`Fui clicado ${counterRef.current} vezes`)
    }
    return(
        <>
            <h1>Testando ref</h1>
            <button onClick={clickCount}>Clique!</button>
            <button onClick={verifyClick}>Quantas vezes fui clicado?</button>
        </>       
    )
}