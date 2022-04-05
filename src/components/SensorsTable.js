import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'device_id', headerName: 'Device ID', width: 200 },
  { field: 'macaddress', headerName: 'MAC Address', width: 200 },
  {
    field: 'threshold',
    headerName: 'Threshold',
    type: 'number',
    width: 90,
    align:'center'
  },
  {
    field: 'releasetime',
    headerName: 'Release Time (sec)',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    align:'center',
    // valueGetter: (params) =>
    //   `${params.row.release_time || ''} ${params.row.release_time|| ''}`,
  },
];


export const SensorsTable=({sensorslist}) => {

    console.log(sensorslist)


const rows = []
    sensorslist && sensorslist.map((sensor, index) => (
        rows.push({ id: index+1 , device_id: sensor.device_id, macaddress: sensor.macaddress, releasetime: sensor.release_time, threshold: sensor.threshold })
    ))


  return (
    <div style={{ height: 400, width: '50%', margin:'auto', marginTop:80}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        // checkboxSelection
        isRowSelectable={() => false}
      />
    </div>
  );
}
