import { useEffect, useRef, useState } from "react"
import Modal from "./Modal";

export default function RefInteracting(){

    const [showModal, setModal] = useState(false)
    const inpuRef = useRef();

    useEffect(() => {
        inpuRef.current?.focus()
    }, [showModal])

    return(
        <>
            <h1>Ref interagindo com a Dom</h1>
            <button onClick={() => setModal(true)}>Clique aqui para alterar e-mail!</button>
            {
                showModal && 
                    <Modal
                        forwadedRef={inpuRef}
                    />
            }
        </>
    )
}