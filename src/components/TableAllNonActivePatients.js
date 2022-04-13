import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Row } from 'react-bootstrap';
import PazientiAttivi from '../services/fetch_patients'

var codice_paziente = ""


const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'identification_code', headerName: 'Identification Code', width: 200 },
    { field: 'minor', headerName: 'Nr. Braccialetto', width: 130 },

    { field: 'ora_ingresso', headerName: 'Ora ingresso comparto', width: 200 },
    { field: 'ora_uscita', headerName: 'Ora uscita comparto', width: 200 },
    { field: 'tempo_totale', headerName: 'Tempo totale (hh:mm:ss)', width: 200 },
    {
        field: 'button_field',
        headerName: '',
        sortable: false,
        width: 200,
        align: 'center',
        renderCell: (codice_paziente) => {
            return (
                <Button variant="success" onClick={event => window.location.href = '/storico_paziente/' + codice_paziente.value} >
                    view patient history
                </Button>
            );
        }
    },

];


export const TableAllNonActivePatients = ({ pazienti_all }) => {
    const pazienti_attivi = PazientiAttivi()

    // console.log(pazienti_all)
    console.log(pazienti_attivi)
    const rows = []
    const codici_attivi = []

    // pazienti_all && Object.keys(pazienti_all).map((oggetto, index) => (
    //     codice_paziente = oggetto,
    //     rows.push({ id: index + 1, minor: pazienti_all[oggetto][0].minor, identification_code: oggetto,
    //         ora_ingresso: pazienti_all[oggetto][0].ora_ingresso.$date.split("T")[1].split(".")[0],
    //         ora_uscita: pazienti_all[oggetto][0].ora_uscita.$date.split("T")[1].split(".")[0],
    //         tempo_totale: pazienti_all[oggetto][0].tempo_totale.split(".")[0], button_field: oggetto})
    // ))

    // con pazienti_attivi ho la lista degli identification_code di tutti i pazienti attivi.
    // Effettuo un controllo incrociato con tutti gli identification_code presenti in
    // pazienti_all per rimuovere dalla tabella dei pazienti non attivi quelli che sono
    // ancora presenti nel comparto ospedaliero

    pazienti_attivi && pazienti_attivi.map((stanza) => (
        stanza.map((paziente, indice) => (
            console.log(paziente['identification_code']),
            codici_attivi.push(paziente['identification_code'])
        ))
    ))

    pazienti_all && Object.keys(pazienti_all).map((oggetto, index) => (
        codice_paziente = oggetto,

        codici_attivi.length > 0 ?
            codici_attivi.map((codice, indice) => (
                console.log(codice),
                codice !== codice_paziente ?
                    rows.push({
                        id: index + 1, minor: pazienti_all[oggetto][0].minor, identification_code: oggetto,
                        ora_ingresso: pazienti_all[oggetto][0].ora_ingresso.$date.split("T")[1].split(".")[0],
                        ora_uscita: pazienti_all[oggetto][0].ora_uscita.$date.split("T")[1].split(".")[0],
                        tempo_totale: pazienti_all[oggetto][0].tempo_totale.split(".")[0], button_field: oggetto
                    })
                    : null
            ))

            :
            rows.push({
                id: index + 1, minor: pazienti_all[oggetto][0].minor, identification_code: oggetto,
                ora_ingresso: pazienti_all[oggetto][0].ora_ingresso.$date.split("T")[1].split(".")[0],
                ora_uscita: pazienti_all[oggetto][0].ora_uscita.$date.split("T")[1].split(".")[0],
                tempo_totale: pazienti_all[oggetto][0].tempo_totale.split(".")[0], button_field: oggetto
            })
    ))

    return (
        <div style={{ height: 550, width: '85%', margin: 'auto', marginTop: 80 }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                // checkboxSelection
                isRowSelectable={() => false}
            />
        </div>
    );
}
