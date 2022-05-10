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



export function ChartTempiMediGiornalieriComparto(props) {
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
                text: 'Grafico tempi medi giornalieri comparto (in ore)',
            },
        },
    };

    const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


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

    props.statistiche_comparto && Object.keys(props.statistiche_comparto[0]['stat_giornaliera']).map((giorno, index) => (
    obj = {},
    console.log(giorno),
    valori_mesi = [],

    props.statistiche_comparto[0]['stat_giornaliera'][giorno] && labels.map((giorno) => (

        props.statistiche_comparto[0]['stat_giornaliera'][giorno] ?
            valori_mesi.push(conversioneOre( props.statistiche_comparto[0]['stat_giornaliera'][giorno]))

        :
            valori_mesi.push(0)

    )),

    k = () => Math.random() * 256,
    a = `rgb(${k()}, ${k()}, ${k()})`,
    obj['label'] = 'comparto',
    obj['borderColor'] = a,
    obj['backgroundColor'] = a,
    obj['data'] = valori_mesi


))

dataset.push(obj)
// console.log(dataset)
    if(dataset){
        data = {
            labels,
            datasets: dataset

        }



    return <Bar options={options} data={data} />;
    }else return <div>loading...</div>
}