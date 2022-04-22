import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';



function Row(props) {
    const [open, setOpen] = React.useState(false);
    var tot_disconnessioni = 0;
    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {props.nomestanza}
                </TableCell>

                {props.row && props.row.map((occorrenza, index) => (
                    tot_disconnessioni += occorrenza['n_disconnessioni'],
                    index === (props.row.length - 1) ?
                        <TableCell align="right">{tot_disconnessioni}</TableCell>
                        : null

                ))}

            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                History
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Data</TableCell>
                                        <TableCell>Ora ingresso</TableCell>
                                        <TableCell align="right">Ora uscita</TableCell>
                                        <TableCell align="right">Tempo totale</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        props.row && props.row.map((occorrenza, index) => (
                                            <TableRow key={index}>
                                                <TableCell component="th" scope="row">
                                                    {occorrenza['ora_ingresso'].$date.split('T')[0]}
                                                </TableCell>
                                                <TableCell>{occorrenza['ora_ingresso'].$date.split('T')[1].split('.')[0]}</TableCell>
                                                <TableCell align="right">{occorrenza['ora_uscita'].$date.split('T')[1].split('.')[0]}</TableCell>
                                                <TableCell align="right">
                                                    {occorrenza['tempo_tot'].split('.')[0]}
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    }


                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}


const lista_stanze = ["Entrata", "Corridoio", "Sala_Operatoria_4", "Recovery_Room"];
var singole_occorrenze = []

export default function CollapsibleTable(props) {
    return (
        <div style={{ marginTop: 80, marginRight: 50 }}>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Nome stanza</TableCell>
                            <TableCell align="right">Nr. disconnessioni</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {lista_stanze.map((stanza, id) => (
                            singole_occorrenze = [],
                            props.storici_pazienti[props.id_paziente] && (props.storici_pazienti[props.id_paziente]).map((occorrenza, index) => (
                                occorrenza['room'] === stanza ?
                                    singole_occorrenze.push(occorrenza)
                                    : null,
                                console.log(singole_occorrenze)

                            )),

                            <Row key={id} nomestanza={stanza} row={singole_occorrenze} id_paziente={props.id_paziente} />

                        ))
                        }

                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
