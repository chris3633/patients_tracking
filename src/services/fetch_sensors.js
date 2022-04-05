import React, { useState, useEffect } from 'react'

function FetchSensors() {

    const [sensorslist, setSensorsList] = useState([])

    const get_sensors = async () => {
        try {
            fetch("/sensorslist").then(
                response => {
                    if (response.ok) {
                        return response.json()
                    }

                }).then(
                    sensorslist =>
                        setSensorsList(sensorslist),
                )
        } catch (err) {
            console.error(err.message);
        }
    }

        useEffect(() => {

            get_sensors();

            const interval = setInterval(() => {
                get_sensors();

            }, 10000)

            return () => clearInterval(interval)

        }, [])


        return (
            sensorslist
        );
    }


export default FetchSensors