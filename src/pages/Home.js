import React, { useRef, useState } from 'react'
import MainDashboard from '../components/MainDashboard'

import { Divider, ButtonGroup, Button, Box } from '@mui/material'

import { Modal, Form } from 'react-bootstrap'

import PazientiAttivi from '../services/fetch_patients'
import PazientiAll from '../services/fetch_patients_all'

function Home() {

    const nomistanze = ["Entrata", "Corridoio", "Sala Operatoria_4", "Recovery Room"]
    const pazienti_attivi = PazientiAttivi()
    const pazienti_all = PazientiAll()

     console.log(pazienti_all)

    const [showPaziente, setShowPaziente] = useState(false);
    const handleClosePaziente = () => setShowPaziente(false);
    const handleShowPaziente = () => setShowPaziente(true);

    const [showBracciale, setShowBracciale] = useState(false);
    const handleCloseBracciale = () => setShowBracciale(false);
    const handleShowBracciale = () => setShowBracciale(true);

    const codice_paziente = useRef()
    const codice_bracciale = useRef()



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
                    <Form.Control type="id_code" ref={codice_paziente}  placeholder="Inserisci identification code" />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClosePaziente}>
                        Chiudi
                    </Button>
                    <Button variant="primary" onClick={event => window.location.href = '/storico_paziente/' + codice_paziente.current.value}>
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
                    <Form.Control type="code_bracciale" ref={codice_bracciale} placeholder="Inserisci codice braccialetto" />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseBracciale}>
                        Chiudi
                    </Button>
                    <Button variant="primary" onClick={event => window.location.href = '/storico_paziente/' + pazienti_all[codice_bracciale.current.value]['identification_code']}>
                        Cerca
                    </Button>
                </Modal.Footer>
            </Modal>


        </div>
    )
}

export default Home