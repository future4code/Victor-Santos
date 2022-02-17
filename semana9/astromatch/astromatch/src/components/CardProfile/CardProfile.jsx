import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import axios from 'axios'

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/"

export default function CardProfile(props) {
    const [profile, setProfiles] = useState([])

    useEffect(() => {
        getProfiles()
    }, [])

    const getProfiles = () => {
        const url = `${baseUrl}person`

        axios.get(url)
        .then((response) => {
            console.log(response.data)
            setProfiles(response.data.profile)
        }).catch((error) => {
            console.log(error.response)
        })
    }

    const choosePerson = (boolean) => {
        const url = `${baseUrl}choose-person`
        const body = {
            id: profile.id,
            choice: boolean,
        }

        axios.post(url, body)
        .then((response) => {
            console.log(response)
            alert("Deu Match!")
            // getProfiles(res.data.profile)
        }).catch((error) => {
            console.log(error.response)
        })
    }

    // const componentProfile = profile.map((perfil) => {
    //     return <div key={perfil.id}>
    //         {perfil.id}
    //     </div>
    // })
    console.log(profile.typeof)

    return (
        <div>
            <button onClick={props.button}>Match Screen</button>
            {/* Dados do Perfil}*/}
            <div>
                <h3>Card Profile</h3>
                <img src={profile.photo} alt="" />
                <p>{profile.name}, {profile.age}</p>
                <p>{profile.bio}</p>                
            </div>
            
            {/* botões de match */}
            <div>
                <div>
                    
                    <button onClick={() => choosePerson(true)}>Dar Match</button>
                </div>
                <div>
                    Botão não dar match
                </div>
            </div>
            
        </div>
    )
}