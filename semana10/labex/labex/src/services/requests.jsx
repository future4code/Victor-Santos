import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { goToAdminHomePage, goToLoginPage } from '../route/coordinator'

export const sendApplication = (body, tripId, clear) => {
    axios.post(`${BASE_URL}/trips/${tripId}/apply`, body)
        .then(() => {
            alert("Aplicação enviada com sucesso!")
            clear()
        }).catch((error) => alert(error.response.message))
}

export const login = (body, history) => {
    axios.post(`${BASE_URL}/login`, body)
    .then((response) => {
        localStorage.setItem("token", response.data.token)
        goToAdminHomePage(history)
    }).catch((error) => alert(error.response.data.message))
}

export const logout = (history) => {
    localStorage.removeItem("token")
    goToLoginPage(history)
}

export const deleteTrip = (id, getTrips) => {
    axios.delete(`${BASE_URL}/trips/${id}`, {headers: { auth:localStorage.getItem("token")}
}).then(() => {
    alert("Viagem deletada com sucesso!")
    getTrips()
}).catch((error) => {
    alert(error.response.data.message)
})
}

export const decideCandidate = (tripId, candidateId, decision, getTripDetails) => {
    const body = {
        approve: decision
    }
    axios.put(`${BASE_URL}/trips/${tripId}/candidates/${candidateId}/decide`, body, {
        headers: {auth: localStorage.getItem("token")}
    }).then(() => {
        alert("Decisão registrada com sucesso!")
        getTripDetails()
    }).catch((error) => alert(error.response.data.message))
}

export const createTrip = (body, clear) => {
    axios.post(`${BASE_URL}/trips`, body, {
        headers: {auth: localStorage.getItem("token")}
    }).then(() => {
        alert("Viagem adicionada com sucesso!")
        clear()
    }).catch((error) => {
        alert(error.response.data.message)
    })
}
