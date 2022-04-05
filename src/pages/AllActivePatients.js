import React from 'react'
import {TableAllActivePatients} from '../components/TableAllActivePatients';

import PazientiAttiviAll from '../services/fetch_patients_all_active'

function AllActivePatients() {

    const pazienti_attivi_all = PazientiAttiviAll();
  return (
      console.log(pazienti_attivi_all),
    <div>
        <TableAllActivePatients pazienti_all={pazienti_attivi_all} />
    </div>
  )
}

export default AllActivePatients