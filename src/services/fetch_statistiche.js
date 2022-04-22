import React, { useState, useEffect } from 'react'

function FetchStatistiche() {

    const [statisticslist, setStatisticsList] = useState([])

    const get_statistiche = async () => {
        try {
            fetch("/statistiche_generali").then(
                response => {
                    if (response.ok) {
                        return response.json()
                    }

                }).then(
                    statisticslist =>
                    setStatisticsList(statisticslist),
                )
        } catch (err) {
            console.error(err.message);
        }
    }

        useEffect(() => {

            get_statistiche();

            const interval = setInterval(() => {
                get_statistiche();

            }, 60000)

            return () => clearInterval(interval)

        }, [])


        return (
            statisticslist
        );
    }


export default FetchStatistiche