import { positions } from '@mui/system';
import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'

import PazientiAttivi from './services/fetch_patients'

export default function NavbarTop(props) {

  const attivi = PazientiAttivi();
  var attivi_tot = 0;

  attivi.map((attivo) => (
    attivi_tot = attivi_tot + attivo.length
  ))

  console.log(attivi_tot)
  return (
    <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="/home"><h5>Iot - Patients Tracker</h5></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/home"><h5>Home</h5></Nav.Link>
      <Nav.Link href="/statistiche_generali"><h5>Statistiche generali</h5></Nav.Link>
      <Nav.Link href="/sensorslist"><h5>Sensors List</h5></Nav.Link>
    </Nav>
    </Container>

  </Navbar>
  )
}
