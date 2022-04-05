import React, { useState } from 'react'
import MainDashboard from '../components/MainDashboard'

import { Divider, ButtonGroup, Button, Box } from '@mui/material'

import { Modal, Form } from 'react-bootstrap'

import PazientiAttivi from '../services/fetch_patients'


function Home() {

    const nomistanze = ["Entrata", "Corridoio", "Sala Operatoria_4", "Recovery Room"]
    const pazienti_attivi = PazientiAttivi()

    console.log(PazientiAttivi())

    const [showPaziente, setShowPaziente] = useState(false);
    const handleClosePaziente = () => setShowPaziente(false);
    const handleShowPaziente = () => setShowPaziente(true);

    const [showBracciale, setShowBracciale] = useState(false);
    const handleCloseBracciale = () => setShowBracciale(false);
    const handleShowBracciale = () => setShowBracciale(true);


    return (
        <div style={{ marginTop: 40 }}>
            <ButtonGroup variant="outlined" aria-label="outlined primary button group">
                <Button onClick={handleShowPaziente} >Ricerca Paziente</Button>
                <Button onClick={handleShowBracciale} >Ricerca Braccialetto</Button>
            </ButtonGroup>

            <Box m={2} pt={1}>
            <ButtonGroup>
            <Button href='/attiviall'>Visualizza tutti i pazienti attivi</Button>
            <Button href='/nonattiviall'>Visualizza tutti i pazienti NON attivi</Button>
            </ButtonGroup>
            </Box>

            <Divider style={{ marginTop: 40 }}>Dettagli per stanza</Divider>

            <MainDashboard nomistanze={nomistanze} pazienti_attivi={pazienti_attivi} />

            <Modal show={showPaziente} onHide={handleClosePaziente}>
                <Modal.Header closeButton>
                    <Modal.Title>Ricerca Paziente</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label>Identification Code</Form.Label>
                    <Form.Control type="id_code" placeholder="Inserisci identification code" />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClosePaziente}>
                        Chiudi
                    </Button>
                    <Button variant="primary" onClick={handleClosePaziente}>
                        Cerca
                    </Button>
                </Modal.Footer>
            </Modal>


            <Modal show={showBracciale} onHide={handleCloseBracciale}>
                <Modal.Header closeButton>
                    <Modal.Title>Ricerca braccialetto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label>Codice braccialetto</Form.Label>
                    <Form.Control type="id_code" placeholder="Inserisci codice braccialetto" />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseBracciale}>
                        Chiudi
                    </Button>
                    <Button variant="primary" onClick={handleCloseBracciale}>
                        Cerca
                    </Button>
                </Modal.Footer>
            </Modal>


        </div>
    )
}

export default Home