import React from 'react'
import {TableAllNonActivePatients} from '../components/TableAllNonActivePatients';

import PazientiNonAttiviAll from '../services/fetch_patients_non_active_all';

function NonActivePatientsAll() {

    const pazienti_non_attivi_all = PazientiNonAttiviAll();
  return (
      console.log(pazienti_non_attivi_all),
    <div>
        <TableAllNonActivePatients pazienti_all={pazienti_non_attivi_all} />
    </div>
  )
}

export default NonActivePatientsAll