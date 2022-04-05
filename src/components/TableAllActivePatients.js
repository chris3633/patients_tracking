import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from 'react-bootstrap';

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
        renderCell: () => {
            return (
              <Button variant="success" >
                view patient history
              </Button>
            );
          }
    },

];


export const TableAllActivePatients = ({ pazienti_all }) => {


    console.log(pazienti_all)

    const rows = []

    // pazienti_all && Object.keys(pazienti_all).map((oggetto, index) => (

    //     rows.push({ id: index + 1, minor: pazienti_all[oggetto][0].minor, identification_code: oggetto,
    //         ora_ingresso: pazienti_all[oggetto][0].ora_ingresso.$date.split("T")[1].split(".")[0],
    //         ora_uscita: pazienti_all[oggetto][0].ora_uscita.$date.split("T")[1].split(".")[0],
    //         tempo_totale: pazienti_all[oggetto][0].tempo_totale.split(".")[0]})

    // ))



    pazienti_all && pazienti_all.map((paziente, index) => (

            rows.push({ id: index + 1, identification_code: paziente.identification_code,
                 minor: paziente.minor,
                 ora_ingresso: paziente.time.$date.split("T")[1].split(".")[0],})

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
