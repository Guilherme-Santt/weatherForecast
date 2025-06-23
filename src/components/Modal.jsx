import { useEffect } from "react"

export default function Modal({ forwadedRef }){
    return(
        <>
            <div>
                <label htmlFor="email">Dígite seu email: </label>
                <input ref={forwadedRef} type="email" />
            </div>
        </>
    )
}