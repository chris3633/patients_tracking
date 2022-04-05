import React, {useState, useEffect} from 'react'

function PazientiNonAttiviAll() {
    const [pazienti_non_attivi_all, setPazientiNonAttiviAll] = useState([])


    const get_pazienti_non_attivi_all = async () => {
        try{
            fetch("/pazienti_non_attivi_all").then(
                response => {
                    if (response.ok) {
                        return response.json()
                    }

                }).then(
                    pazienti_non_attivi_all =>
                        setPazientiNonAttiviAll(pazienti_non_attivi_all),
                )

        } catch(err) {
            console.error(err.message);
        }
    }


    useEffect(() => {

        get_pazienti_non_attivi_all();
        const interval = setInterval(() => {
        get_pazienti_non_attivi_all()
        }, 10000)

        return () => clearInterval(interval)

    }, [])

  return (
    pazienti_non_attivi_all
  )
}

export default PazientiNonAttiviAll