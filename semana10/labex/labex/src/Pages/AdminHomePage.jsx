import React from 'react'
import styled from 'styled-components'
import useProtectedPage from "../hooks/useProtectedPage"
import {useHistory} from 'react-router-dom'
import { goToCreateTripPage, goToHomePage } from '../route/coordinator'
import { logout } from '../services/requests'
import useRequestData from '../hooks/useRequestData'
import AdminTripCard from '../components/AdminTripCard/AdminTripCard'

export const AdminHomePage = () => {
    useProtectedPage()
    const history = useHistory()
    const [tripsData, getTrips] = useRequestData("/trips", {})

    const tripsList = tripsData.trips && tripsData.trips.map((trip) => {
        return <AdminTripCard key={trip.id} name={trip.name} id={trip.id} getTrips={getTrips} />
    })

    return (
        <div> {/* Editar com styled components */}
                <h1>Painel Administrativo</h1>
                <div> {/* Editar com styled components */}
                    <button onClick={() => goToHomePage(history)}>Voltar</button>
                    <button onClick={() => goToCreateTripPage(history)}>Criar Viagem</button>
                    <button onClick={() => logout(history)}>Logout</button>
                </div>
                {tripsList && tripsList.length > 0 ? tripsList : <p>Carregando...</p>}
        </div>
    )
}

export default AdminHomePage;