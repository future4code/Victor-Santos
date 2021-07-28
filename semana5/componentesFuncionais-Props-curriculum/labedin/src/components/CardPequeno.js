import React from 'react'
import styled from 'styled-components'

const SmallCard = styled.div`
    display: flex;
    flex-direction: column;
`

const Email = styled.div`
    border: 1px solid black;
    display: flex;
    align-items: center;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;
    width: 550px;
`

const ImgEmail = styled.img`
    width: 30px;
    margin-right: 10px;
`

const Endereco = styled.div`
    border: 1px solid black;
    display: flex;
    align-items: center;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;
    width: 550px;
`

const ImgEndereco= styled.img`
    width: 30px;
    margin-right: 10px;
`

export default function CardPequeno(props) {
    return (
        <SmallCard>
            <Email>
                <ImgEmail src={props.imagemEmail} />
                <p>
                    <strong>{props.email}</strong> {props.enderecoEmail}
                </p>
            </Email>
            
            <Endereco>
                <ImgEndereco src={props.imagemLocal} />
                <p>
                    <strong>{props.endereco}</strong> {props.rua}
                </p>
            </Endereco>
        </SmallCard>

    )
}