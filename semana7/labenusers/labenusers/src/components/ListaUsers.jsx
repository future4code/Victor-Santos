import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

export class ListaUsers extends React.Component {
    state = {
        users: ""
    }

    componentDidMount = () => {
        this.pegarUsers()
    }

    pegarUsers = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
            headers: {
                Authorization: "victor-nogueira-lovelace"
            }
        }).then.setState((response) => {
            this.setState({ users: response})
        }).catch((error) => {
            console.log(error)
        })
    }



    render() {
        const renderedUsers = this.state.users.map((usuarios) => {
            return <p>{usuarios.name}</p>
        })
        return (
            <div>
                {renderedUsers}
            </div>
        )
    }
}