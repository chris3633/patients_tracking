import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from 'react-bootstrap';


export const BasicTable = ({ pazienti_attivi }) => {

    var data_ingresso = "";
    var ora_ingresso = "";
    return (
        <TableContainer component={Paper} style={{ maxWidth: 1200, width: 'auto', margin: "auto", marginTop: 70 }}>
            <Table sx={{ minWidth: 'auto' }} aria-label="simple table" style={{ margin: 'auto' }}>
                <TableHead>
                    <TableRow style={{ backgroundColor: "#408558" }}>
                        <TableCell>Identification Code</TableCell>
                        <TableCell align="left">Orario ingresso</TableCell>
                        <TableCell align="left">Data Ingresso</TableCell>
                        <TableCell align="left"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {pazienti_attivi && pazienti_attivi.map((attivo, index) => (
                        // console.log(attivo),

                        data_ingresso = (attivo.time.$date.split("T")[0]),
                        ora_ingresso = (attivo.time.$date.split("T")[1]),
                        console.log(ora_ingresso.split(".")[0]),




                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {attivo.identification_code}
                            </TableCell>
                            <TableCell align="left">{ora_ingresso.split(".")[0]}</TableCell>
                            <TableCell align="left">{data_ingresso}</TableCell>
                            <TableCell align="right"><Button >Visualizza dettagli paziente</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );



}
