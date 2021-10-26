import axios from "axios"
import app from "../app"
import { addressInfo } from "../types";

export const getAddressInfo = async (zipCode: number): Promise<any> => {

    try {
        const response: any = await axios.get(`https://viacep.com.br/ws/${zipCode}/json/`)

        return {
            cep: response.data.cep,
            logradouro: response.data.logradouro,
            bairro: response.data.bairro,
            localidade: response.data.localidade,
            uf: response.data.uf
        };

    } catch (error) {
        console.log(error)
        return null
    }
}