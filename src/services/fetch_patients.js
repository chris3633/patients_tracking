import React, { useState, useEffect } from 'react'

function PazientiAttivi() {

    const [attivi_entrata, setAttiviEntrata] = useState([])
    const [attivi_corridoio, setAttiviCorridoio] = useState([])
    const [attivi_salaOP_4, setAttiviSalaOP_4] = useState([])
    const [attivi_recovery_room, setAttiviRecoveryRoom] = useState([])

    const get_pazienti = async () => {
        try{
            fetch("/pazienti_attivi_entrata").then(
                response => {
                    if (response.ok) {
                        return response.json()
                    }

                }).then(
                    attivi_entrata =>
                        setAttiviEntrata(attivi_entrata),
                )



            fetch("/pazienti_attivi_corridoio").then(
                response => {
                    if (response.ok) {
                        return response.json()
                    }

                }).then(
                    attivi_corridoio =>
                        setAttiviCorridoio(attivi_corridoio),
                )



            fetch("/pazienti_attivi_sala_OP_4").then(
                response => {
                    if (response.ok) {
                        return response.json()
                    }

                }).then(
                    attivi_salaOP_4 =>
                        setAttiviSalaOP_4(attivi_salaOP_4),
                )



            fetch("/pazienti_attivi_recovery_room").then(
                response => {
                    if (response.ok) {
                        return response.json()
                    }

                }).then(
                    attivi_recovery_room =>
                        setAttiviRecoveryRoom(attivi_recovery_room),
                )

        }catch(err) {
            console.error(err.message);
        }
    }



    useEffect(() => {

        get_pazienti();

        const interval = setInterval(() => {
            // fetch("/pazienti_attivi_entrata").then(
            //     response => {
            //         if (response.ok) {
            //             return response.json()
            //         }

            //     }).then(
            //         attivi_entrata =>
            //             setAttiviEntrata(attivi_entrata),
            //     )



            // fetch("/pazienti_attivi_corridoio").then(
            //     response => {
            //         if (response.ok) {
            //             return response.json()
            //         }

            //     }).then(
            //         attivi_corridoio =>
            //             setAttiviCorridoio(attivi_corridoio),
            //     )



            // fetch("/pazienti_attivi_sala_OP_4").then(
            //     response => {
            //         if (response.ok) {
            //             return response.json()
            //         }

            //     }).then(
            //         attivi_salaOP_4 =>
            //             setAttiviSalaOP_4(attivi_salaOP_4),
            //     )



            // fetch("/pazienti_attivi_recovery_room").then(
            //     response => {
            //         if (response.ok) {
            //             return response.json()
            //         }

            //     }).then(
            //         attivi_recovery_room =>
            //             setAttiviRecoveryRoom(attivi_recovery_room),
            //     )
            get_pazienti();

        }, 10000)

        return () => clearInterval(interval)
    }, [])





    //     useEffect(() => {
    //         async function myFunction() {
    //           let result = await fetch("/pazienti_attivi_entrata");
    //           let json =  await result.json();
    //           setAttiviEntrata(json);
    //         }

    //         myFunction();
    // },)

    return (
        [attivi_entrata,
            attivi_corridoio,
            attivi_salaOP_4,
            attivi_recovery_room]
    );
}

export default PazientiAttivi
