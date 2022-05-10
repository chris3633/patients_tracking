import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { keyframes } from '@emotion/react';
// import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);



export function ChartTempiMediMensiliStanza(props) {
    const options = {
        indexAxis: 'y',
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
            },
            title: {
                display: true,
                text: 'Grafico tempi medi mensili per stanza (in ore)',
            },
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];


var dataset = []
var obj = {}
var valori_mesi = []
var data = {}
var a, k


function conversioneOre(stringa){
    var giorni = 0,ore = 0,minuti = 0,secondi = 0, totale = 0
    if(stringa.includes(',')){
        giorni = stringa.split(',')[0].split(' ')[0]*86400
        ore = stringa.split(',')[1].split(':')[0]*3600
        minuti = stringa.split(',')[1].split(':')[1]*60
        secondi = stringa.split(',')[1].split(':')[2].split('.')[0]
        totale = giorni+ore+minuti+secondi

        return (totale/360000)
        // console.log('giorni', giorni)
        // console.log('ore', ore)
        // console.log('minuti',minuti)
        // console.log('secondi',secondi)

    } else
    {
        ore = stringa.split(':')[0]*3600
        minuti = stringa.split(':')[1]*60
        secondi = stringa.split(':')[2].split('.')[0]
        totale = ore+minuti+secondi
        return (totale/360000)
        // console.log('ore', ore)
        // console.log('minuti',minuti)
        // console.log('secondi',secondi)
    }


}

    props.statistiche_stanze && Object.keys(props.statistiche_stanze[0]).map((stanza, index) => (
    obj = {},
    valori_mesi = [],

    props.statistiche_stanze[0][stanza] && labels.map((mese) => (

        // props.statistiche_stanze[0][stanza]['statistiche_mensili'][mese] &&
        // props.statistiche_stanze[0][stanza]['statistiche_mensili'][mese].includes(',') ?

        // giorni = (props.statistiche_stanze[0][stanza]['statistiche_mensili'][mese].split(',')[0].split(' ')[0])
        // : giorni = 0,

        props.statistiche_stanze[0][stanza]['statistiche_mensili'][mese] ?
            valori_mesi.push(conversioneOre(props.statistiche_stanze[0][stanza]['statistiche_mensili'][mese]))

            // console.log('mese',conversioneOre((props.statistiche_stanze[0][stanza]['statistiche_mensili'][mese])))

        :
            valori_mesi.push(0)

    )),

    k = () => Math.random() * 256,
    a = `rgb(${k()}, ${k()}, ${k()})`,
    obj['label'] = stanza,
    obj['borderColor'] = a,
    obj['backgroundColor'] = a,
    obj['data'] = valori_mesi,


    dataset.push(obj)


))


    if(dataset){
        data = {
            labels,
            datasets: dataset

        }



    return <Bar options={options} data={data} />;
    }else return <div>loading...</div>
}