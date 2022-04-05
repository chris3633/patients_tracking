import React from 'react'
import FetchSensors from '../services/fetch_sensors'

import {SensorsTable} from '../components/SensorsTable'
function SensorsList() {
    const sensorslist = FetchSensors()

    console.log(sensorslist)


  return (
    <h2 style={{marginTop: 40}}>Sensors List
    <SensorsTable sensorslist={sensorslist}/>
    </h2>
  )
}

export default SensorsList