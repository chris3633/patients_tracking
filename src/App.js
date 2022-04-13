import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";


import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

import Home from './pages/Home';
import DettaglioPaziente from './pages/DettaglioPaziente';
import DettaglioStanza from './pages/DettaglioStanza';
import SensorsList from './pages/SensorsList'
import AllActivePatients from './pages/AllActivePatients';
import NavbarTop from './NavbarTop';
import NonActivePatientsAll from './pages/NonActivePatientsAll';
import StoricoPaziente from './pages/StoricoPaziente';



function App() {
  return (
    <div className="App">
      <NavbarTop />
      <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/home" element={<Home/>}/>
            <Route path="/dettagliostanza/:idstanza"  element={<DettaglioStanza/>}/>
            <Route path="/dettagliopaziente" element={<DettaglioPaziente/>} />
            <Route path="/sensorslist" element={<SensorsList/>} />
            <Route path="/statistiche_generali"/>
            <Route path="/storico_paziente/:id_paziente" element={<StoricoPaziente/>}/>
            <Route path="/attiviall" element={<AllActivePatients/>} />
            <Route path="/nonattiviall" element={<NonActivePatientsAll/>} />
          </Routes>
      </Router>
      </div>
      );
}

export default App;
