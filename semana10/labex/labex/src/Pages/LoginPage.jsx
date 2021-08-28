import React from 'react'
import styled from 'styled-components'
import useForm from "../hooks/useForm"
import { login } from '../services/requests'
import { useHistory } from 'react-router'
import useUnprotectedPage from '../hooks/useUnprotectedPage'
import { goToHomePage } from '../route/coordinator'

export const LoginPage = () => {
    useUnprotectedPage()
    const history = useHistory()
    const { form, onChange } = useForm({ email: "", password: "" })

    const onClickLogin = (event) => {
        event.preventDefault()
        login(form, history)
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={onClickLogin}>
                <input
                    placeholder={"E-mail"}
                    type={"email"}
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    required
                />
                <input
                    placeholder={"Senha"}
                    type={"password"}
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    required
                />
                <div>
                    <button onClick={() => goToHomePage(history)}>Voltar</button>
                    <button type={"submit"}>Entrar</button>
                </div>

            </form>
        </div>
    )
}
export default LoginPage;