import React, {useState, useEffect} from 'react'

function PazientiAttiviAll() {
    const [pazienti_attivi_all, setPazientiAttiviAll] = useState([])


    const get_pazienti_attivi_all = async () => {
        try{
            fetch("/pazienti_attivi_all").then(
                response => {
                    if (response.ok) {
                        return response.json()
                    }

                }).then(
                    pazienti_attivi_all =>
                        setPazientiAttiviAll(pazienti_attivi_all),
                )

        } catch(err) {
            console.error(err.message);
        }
    }


    useEffect(() => {

        get_pazienti_attivi_all();
        const interval = setInterval(() => {
        get_pazienti_attivi_all()
        }, 10000)

        return () => clearInterval(interval)

    }, [])

  return (
    pazienti_attivi_all
  )
}

export default PazientiAttiviAll