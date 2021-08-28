import React from 'react'
import styled from 'styled-components'
import useForm from '../hooks/useForm'
import useRequestData from '../hooks/useRequestData'
import { sendApplication } from "../services/requests"
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { goToListTripsPage } from '../route/coordinator'
import { countries } from '../constants/countries'

// Aplicar Styled Components

const ApplicationFormPage = () => {
    const [tripId, setTripId] = useState("")
    const { form, onChange, clear } = useForm({name: "", age: "", application: "", profession: "", country:""})
    const [allTrips] = useRequestData("/trips", {})
    const history = useHistory()

    const clearFields = () => {
        clear()
        setTripId("")
    }

    const onClickSend = (event) => {
        event.preventDefault()
        sendApplication(form, tripId, clearFields)
    }

    const onChangeTrip = (event) => {
        setTripId(event.target.value)
    }

    const tripsOptions = allTrips.trips && allTrips.trips.map((trip) => {
        return <option key={trip.id} value={trip.id}>{trip.name}</option>
    })

    return (
        <div> {/* Editar com styled components */}
            <h1>Inscreva-se para uma viagem</h1>
            <form onSubmit={onClickSend}>
                <select defaultValue="" onChange={onChangeTrip}>
                    <option value="" disable>Escolha uma Viagem</option>
                    {tripsOptions}
                </select>
                <input
                    placeholder={"Nome"}
                    name={"Name"}
                    onChange={onChange}
                    pattern={"^.{3,}$"}
                    title={"O nome deveter no mínimo 3 caracteres"}
                    required
                />
                <input
                    placeholder={"Idade"}
                    type={"number"}
                    name={"age"}
                    value={form.age}
                    onChange={onChange}
                    required
                    min={18}
                />
                <input
                    placeholder={"Texto de Candidatura"}
                    name={"applicationText"}
                    value={form.applicationText}
                    onChange={onChange}
                    required
                    pattern={"^.{30,}$"}
                    title={"O texto deve ter no mínimo 30 caracteres"}
                />
                <input
                    placeholder={"Profissão"}
                    name={"profession"}
                    value={form.profession}
                    onChange={onChange}
                    required
                    pattern={"^.{10,}$"}
                    title={"A profissão deve ter no mínimo 10 caracteres"}
                />
                <select
                    placeholder={"País"}
                    name={"country"}
                    value={form.country}
                    onChange={onChange}
                    required
                >
                    <option value={""} disabled>Escolha um País</option>
                    {countries.map((country) => {
                        return <option value={country} key={country}>{country}</option>
                    })}
                </select>
                <div> {/* Editar com styled components */}
                    <button onClick={() => goToListTripsPage(history)}>Voltar</button>
                    <button type={"submit"}>Enviar</button>
                </div>
            </form>

        </div>
    )
}

export default ApplicationFormPage
