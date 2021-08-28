import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { goToListTripsPage, goToLoginPage } from '../route/coordinator'

export const HomePage = () => {
    const history = useHistory()

    return (
        <>
            <h1>LabeX</h1>
            <div>
                <button onClick={() => goToListTripsPage(history)}>Ver Viagens</button>
                <button onClick={() => goToLoginPage(history)}>Área de Admin</button>
            </div>
        </>
    )
}
export default HomePage;