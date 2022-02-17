import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react'


const MatchScreen = (props) => {
    
    return (
        <div>
            <button onClick={props.button}>Find Someone</button>
            <h3>Tela de matchs</h3>
        </div>
    )
}

export default MatchScreen