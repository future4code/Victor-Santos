import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import TripCard from "../components/TripCard/TripCard"
import useRequestData from '../hooks/useRequestData'
import { goToHomePage, goToApplicationFormPage } from '../route/coordinator'

export const ListTripPage = () => {
    const [tripsData] = useRequestData("/trips", {})
    const history = useHistory()

    const tripsList = tripsData.trips && tripsData.trips.map((trip) => {
        return <TripCard key={trip.id} trip={trip} />
    })

    return (
        <div>
            <div>
                <button onClick={() => goToHomePage(history)}>Voltar</button>
                <button onClick={() => goToApplicationFormPage(history)}>Inscrever-se</button>
            </div>
            <h1>Lista de Viagens</h1>
            {tripsList && tripsList.length > 0 ? tripsList : <p>Carregando...</p>}
        </div>
    )
}

export default ListTripPage;