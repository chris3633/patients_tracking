import React, {useState, useEffect} from 'react'

function PazientiAll() {
    const [pazienti_all, setPazientiAll] = useState([])


    const get_pazienti_all = async () => {
        try{
            fetch("/pazienti_all").then(
                response => {
                    if (response.ok) {
                        return response.json()
                    }

                }).then(
                    pazienti_all =>
                        setPazientiAll(pazienti_all),
                )

        } catch(err) {
            console.error(err.message);
        }
    }


    useEffect(() => {

        get_pazienti_all();
        const interval = setInterval(() => {
        get_pazienti_all()
        }, 10000)

        return () => clearInterval(interval)

    }, [])

  return (
    pazienti_all
  )
}

export default PazientiAll