import React, { useState, useEffect } from 'react'
import FetchStoricoPaziente from '../services/fetch_storico_paziente'
import OppositeContentTimeline from '../components/Timeline'
import { useParams } from "react-router-dom"
import Grid from '@mui/material/Grid'
import CircleTwoToneIcon from '@mui/icons-material/CircleTwoTone';
import CollapsibleTable from '../components/TableStoricoPaziente'
import PazientiAttivi from '../services/fetch_patients'
import { Tooltip } from '@mui/material';




function StoricoPaziente() {
    var storici_pazienti = FetchStoricoPaziente()
    const pazienti_attivi = PazientiAttivi()
    const lista_attivi = []
    var trovato




    let { id_paziente } = useParams();


    pazienti_attivi && pazienti_attivi.map((paziente, index) => (
        paziente.map((record, index) => (
            lista_attivi.push(record['identification_code'])
        ))

    ))


    lista_attivi.includes(id_paziente) ? trovato = true : trovato = false


    const [isLoading, setLoading] = useState(true);
    const [isPresente, setPresente] = useState();

    console.log(isPresente)



    useEffect(() => {

        if (storici_pazienti && Object.keys(storici_pazienti).includes(id_paziente)) {
            setPresente(true)
            setLoading(false)
        }
        else {
            if (storici_pazienti.length !== 0) {
                setPresente(false)
                setLoading(false)
            }
        }
    }, [id_paziente, storici_pazienti]);


    if (isLoading) {
        return <div className="App">
            <h2 style={{ marginTop: 40 }} >Loading...
            </h2>
        </div>

    }

    if (!isPresente && !isLoading) {
        return <div className="App">
            <h2 style={{ marginTop: 40 }} >
                Paziente non trovato!
            </h2>
        </div>
    }

    if (isPresente && !isLoading) {
        return (
            <div>
                {trovato ?
                    <h2 style={{ marginTop: 40 }} >
                        Storico paziente: {id_paziente}
                        <Tooltip title="Paziente attualmente attivo">
                            <CircleTwoToneIcon style={{ color: 'green', fontSize: 30, marginLeft: 10, marginBottom: 5 }} />
                        </Tooltip>
                    </h2>
                    :
                    <h2 style={{ marginTop: 40 }} >
                        Storico paziente: {id_paziente}
                        <Tooltip title="Paziente attualmente NON attivo">
                            <CircleTwoToneIcon style={{ color: 'red', fontSize: 30, marginLeft: 10, marginBottom: 5 }} />
                        </Tooltip>
                    </h2>
                }
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <OppositeContentTimeline storici_pazienti={storici_pazienti} id_paziente={id_paziente} />
                    </Grid>
                    <Grid item xs={8}>
                        <CollapsibleTable storici_pazienti={storici_pazienti} id_paziente={id_paziente} />
                    </Grid>

                </Grid>

            </div>
        )

    }

}

export default StoricoPaziente