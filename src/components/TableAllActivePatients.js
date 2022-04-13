import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from 'react-bootstrap';

var codice_paziente = " "

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'identification_code', headerName: 'Identification Code', width: 200 },
    { field: 'minor', headerName: 'Nr. Braccialetto', width: 130 },

    { field: 'ora_ingresso', headerName: 'Ora ingresso stanza', width: 160 },

    {
        field: 'button_field',
        headerName: '',
        sortable: false,
        width: 200,
        align: 'center',
        renderCell: (codice_paziente) => {
            console.log(codice_paziente)
            return (
              <Button variant="success" onClick={event => window.location.href = '/storico_paziente/' + codice_paziente.value}>
                view patient history
              </Button>

            );
          }
    },

];


export const TableAllActivePatients = ({ pazienti_all }) => {


    console.log(pazienti_all)

    const rows = []

    pazienti_all && pazienti_all.map((paziente, index) => (
        codice_paziente = paziente.identification_code,
            rows.push({ id: index + 1, identification_code: paziente.identification_code,
                 minor: paziente.minor,
                 ora_ingresso: paziente.time.$date.split("T")[1].split(".")[0],
                 button_field: codice_paziente})

    ))


    return (
        <div style={{ height: 550, width: '52%', margin: 'auto', marginTop: 80 }}>
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
