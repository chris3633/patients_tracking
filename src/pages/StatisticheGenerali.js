import React from 'react'
import CardStatistiche from '../components/CardStatistiche'
import { Grid, Divider } from '@mui/material';

import FetchStatistiche from '../services/fetch_statistiche';
import {ChartTempiMediMensiliStanza} from '../components/ChartTempiMediMensiliStanza'
import {ChartTempiMediGiornalieriStanza} from '../components/ChartTempiMediGiornalieriStanza'

import {ChartTempiMediMensiliComparto} from '../components/ChartTempiMediMensiliComparto'
import {ChartTempiMediGiornalieriComparto} from '../components/ChartTempiMesiGiornalieriComparto'

import CircularIndeterminate from '../components/CircularLoading'
import { ChartInterventiMensili } from '../components/ChartInterventiMensili';
import {ChartInterventiGiornalieri} from '../components/ChartInterventiGiornalieri'


function StatisticheGenerali() {

    const statistiche = FetchStatistiche()

    var statistiche_disconnessioni = {}
    var dict_stat_disconnessioni = {}
    var dict_stat_disconnessioni_mese = {}
    var n_disconnessioni = 0

    var statistiche_stanze = {}
    var statistiche_comparto = {}
    var statistiche_interventi = {}

    // salvo le statistiche in variabili divise

    statistiche_disconnessioni = Object(statistiche)['stat_disconnessioni']
    statistiche_stanze = Object(statistiche)['stat_tempo_medio_stanza']
    statistiche_comparto = Object(statistiche)['stat_tempo_medio_comparto']
    statistiche_interventi = Object(statistiche)['stat_interventi']

    if(statistiche.length != 0){
    return (
        // console.log(statistiche),
        <div>
            <h2 style={{ marginTop: 40 }}> Statistiche generali        </h2>
            <Divider style={{ marginTop: 40 }}>Statistiche disconnessioni</Divider>
            <Grid container spacing={2}  >
                {dict_stat_disconnessioni = {},
                statistiche_disconnessioni && Object.keys(statistiche_disconnessioni[0]).map((stanza, index) => (
                    dict_stat_disconnessioni_mese = {},
                    Object.keys(statistiche_disconnessioni[0][stanza]).map((mese, indice) => (

                        dict_stat_disconnessioni_mese[mese] = statistiche_disconnessioni[0][stanza][mese]

                    )),
                    dict_stat_disconnessioni[stanza] = dict_stat_disconnessioni_mese,
                    // console.log(dict_stat_disconnessioni),
                    <Grid item md={3} key={index}>
                        <CardStatistiche stanza={stanza} elenco_disconnessioni={dict_stat_disconnessioni} />
                    </Grid>
                ))
                }

            </Grid>

            <Divider style={{ marginTop: 40 }}>Statistiche Interventi</Divider>
            <Grid container spacing={2} >

                <Grid item md={6} >
                    <ChartInterventiMensili statistiche_interventi={statistiche_interventi} />
                </Grid>

                <Grid item md={6} >
                    <ChartInterventiGiornalieri statistiche_interventi={statistiche_interventi}/>
                </Grid>
            </Grid>


            <Divider style={{ marginTop: 40 }}>Statistiche tempi medi per stanza</Divider>
            <Grid container spacing={2} >

                <Grid item md={6} >
                    <ChartTempiMediMensiliStanza statistiche_stanze={statistiche_stanze} />
                </Grid>

                <Grid item md={6} >
                    <ChartTempiMediGiornalieriStanza statistiche_stanze={statistiche_stanze}/>
                </Grid>
            </Grid>


            <Divider style={{ marginTop: 40 }}>Statistiche tempi medi comparto</Divider>
            <Grid container spacing={2} >

                <Grid item md={6} >
                    <ChartTempiMediMensiliComparto statistiche_comparto={statistiche_comparto} />
                </Grid>

                <Grid item md={6} >
                    <ChartTempiMediGiornalieriComparto statistiche_comparto={statistiche_comparto}/>
                </Grid>
            </Grid>
        </div>
    )
            }
            else{
                return(
                    <div className="App">
                    <h2 style={{ marginTop: 40, display:'flex', alignItems: 'center',
                    justifyContent: 'center',}} >
                    <CircularIndeterminate/>
                    </h2>
                </div>
                )
            }
}

export default StatisticheGenerali