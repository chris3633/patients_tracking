import React, { useState, useEffect } from 'react'

function PazientiAttiviURL(url) {

    const [pazienti_attivi, setPazientiAttivi] = useState([])

    const get_pazienti_url = async () => {
        try{
            fetch(url).then(
                response => {
                    if (response.ok) {
                        return response.json()
                    }

                }).then(
                    pazienti_attivi =>
                        setPazientiAttivi(pazienti_attivi),
                )

        } catch(err) {
            console.error(err.message);
        }
    }




    useEffect(() => {

        get_pazienti_url();
        const interval = setInterval(() => {

        // fetch(url).then(
        //     response => {
        //         if (response.ok) {
        //             return response.json()
        //         }

        //     }).then(
        //         pazienti_attivi =>
        //             setPazientiAttivi(pazienti_attivi),
        //     )
        get_pazienti_url()
        }, 10000)

        return () => clearInterval(interval)

    }, [url])



    return (
        pazienti_attivi

    );
}

export default PazientiAttiviURL
