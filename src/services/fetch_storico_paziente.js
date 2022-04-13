import React, { useState, useEffect } from 'react'

function FetchStoricoPaziente() {

    const [storico_paziente, setStoricoPaziente] = useState([])

    const get_storico_paziente = async () => {
        try{
             fetch("/storico_paziente").then(
                response => {
                    if (response.ok) {
                        return response.json()
                    }

                }).then(
                    storico_paziente =>
                    setStoricoPaziente(storico_paziente),

                )

        } catch(err) {
            console.error(err.message);
        }
    }


    useEffect(() => {

        get_storico_paziente();
        const interval = setInterval(() => {
        get_storico_paziente()
        }, 10000)

        return () => clearInterval(interval)

    }, [])


    return (
        storico_paziente
    );
}

export default FetchStoricoPaziente
