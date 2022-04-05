import React from 'react'
import { BasicTable } from '../components/BasicTable'
import { RoomTable } from '../components/RoomTable'

import { useParams } from "react-router-dom"
import PazientiAttiviURL from '../services/fetch_patients_url';


function DettaglioStanza() {

  let { idstanza } = useParams();
  var myvar = ""
  if (idstanza == "Sala Operatoria_4") {
    myvar = "sala_OP_4"
  }

  if (idstanza == "Recovery Room") {
    myvar = "recovery_room"
  }


  if (idstanza == "Entrata") {
    myvar = "entrata"
  }

  if (idstanza == "Corridoio") {
    myvar = "corridoio"
  }

  const pazienti_attivi = PazientiAttiviURL("/pazienti_attivi_" + myvar)

  console.log(myvar)
  console.log(pazienti_attivi)

  return (
<div>
    <h2 style={{marginTop: 40}} >
      Dettagli stanza: {idstanza}
      {/* <BasicTable pazienti_attivi={pazienti_attivi} /> */}
      <RoomTable pazienti_attivi={pazienti_attivi} />
    </h2>

  </div>


  )

}

export default DettaglioStanza