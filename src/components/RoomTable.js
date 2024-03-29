import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from 'react-bootstrap';


var codice_paziente = " "
const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'identification_code', headerName: 'Identification Code', width: 200 },
    { field: 'minor', headerName: 'Nr. Braccialetto', width: 130 },
    { field: 'data_ingresso', headerName: 'Data Ingresso', width: 130 },
    {
        field: 'ora_ingresso',
        headerName: 'Ora Ingresso',
        width: 130,
        align: 'left',
    //     valueGetter: (params) =>
    //   `${params.row.ora || ''} ${params.row.release_time|| ''}`,
    },
    {
        field: 'button_field',
        headerName: '',
        sortable: false,
        width: 200,
        align: 'center',
        renderCell: (codice_paziente) => {
            return (
              <Button variant="success" onClick={event => window.location.href = '/storico_paziente/' + codice_paziente.value}>
                view patient history
              </Button>
            );
          }
    },

];


export const RoomTable = ({ pazienti_attivi }) => {


    var data_ingresso = "";
    var ora_ingresso = "";
    console.log(pazienti_attivi)


    const rows = []
    pazienti_attivi && pazienti_attivi.map((attivo, index) => (
        data_ingresso = (attivo.time.$date.split("T")[0]),
        ora_ingresso = (attivo.time.$date.split("T")[1]),

        codice_paziente = attivo.identification_code,

        rows.push({ id: index + 1, minor: attivo.minor,
            identification_code: attivo.identification_code,
             data_ingresso: data_ingresso,
             ora_ingresso: ora_ingresso.split(".")[0],
             button_field: codice_paziente})
    ))


    return (
        <div style={{ height: 550, width: '59%', margin: 'auto', marginTop: 80 }}>
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
