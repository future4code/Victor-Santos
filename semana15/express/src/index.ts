import express, {Request, Response} from 'express'
import cors from 'cors'
import {countries} from './data'
import {country} from './types'

const app = express()

app.use(express.json())
app.use(cors())

app.listen("3003", () => {
    console.log("Server is running in http://localhost:3003")
})

//Exercício 01 - Buscar Todos os Países
app.get("/paises", (req: Request, res: Response) => {
    
        if (req.headers.authorization !== "victor") {
            res.status(400).send("User not authorized")
        } else {
           const newCountries = countries.map((country) => ({id: country.id, name: country.name}))
           res.status(200).send(newCountries)
        }
        
    })

//Exercício 02 - Buscar países por id
// app.get("/paises/:id", (req: Request, res: Response) => {
//     try {
//         const token = req.headers.authorization
//         if (req.headers.authorization !== "victor") {
//             res.status(401)
//             throw new Error("User not authorized")
//         }

//         if (!Number(req.params.id)) {
//             res.status(404)
//             throw new Error("Error: Favor informar um id válido!")
//         }
//         const result = countries.find((country) => country.id === Number(req.params.id))

//         if (result) {
//             res.send(result)
//         } else {
//             res.status(401)
//             throw new Error("Error: Country not found")
//         }
//     } catch (error: any) {
//         res.send(error.message)
//     }
// })

//Exercício 03 - Busca com Filtros
app.get("/paises/search", (req: Request, res: Response) => {
    try {
        if (!req.query.name && !req.query.capital && !req.query.continent) {
            res.status(404)
            throw new Error("Error: Favor informar um parametro válido")
        }

        const name: any = req.query.name
        const capital: any = req.query.capital
        const continent: any = req.query.continent


        const result = countries.filter((country) => {
            if(req.query.name) {
                return country.name.toLowerCase().includes(name.toLowerCase())
            } else if (req.query.capital) {
                return country.capital.toLowerCase().includes(capital.toLowerCase())
            } else if (req.query.continent) {
                return country.continent.toLowerCase().includes(continent.toLowerCase())
            }
        })

        // const resultName = countries.filter((country) => country.name.includes(req.query.name as string))
        // const resultCapital = countries.filter((country) => country.capital.includes(req.query.capital as string))
        // const resultContinent = countries.filter((country) => country.continent.includes(req.query.continent as string))

        // if (resultName && resultCapital) {
        //     if (resultName === resultCapital) {
        //         res.send(resultName)
        //     } else if (resultName !== resultCapital) {
        //         throw new Error("Divergência entre name e capital")
        //     }
        // } else if (resultName && resultContinent) {
        //     if (resultName === resultContinent) {
        //         res.send(resultName)
        //     } else {
        //         throw new Error("Divergência entre name e continent")
        //     }
        // } else if (resultCapital && resultContinent) {
        //     if(resultCapital === resultContinent) {
        //         res.send(resultCapital)
        //     } else {
        //         throw new Error("Divergência entre capital e continent")
        //     }
        // } 

        if (result) {
            res.send(result)
        } else {
            throw new Error("Country not found")
        }

    } catch (error: any) {
        res.send(error.message)
    }
})


//Exercício 04 - Editar País

app.post("/paises/:id", (req: Request, res: Response) => {
    try {
        if (!Number(req.params.id) && Number(req.params.id) !== 0) {
            throw new Error("Favor informar o numero de id")
        }

        const country = countries.filter((country) => {
            return country.id === Number(req.params.id)
        }).map((country) => {
            return {id: country.id, name: req.body.name, capital: req.body.capital, continent: country.continent}
        })
        console.log(country)
        
    // if (country) {
        res.send(country)
    // } else {
    //     throw new Error("Alterações incompletas")
    // }
    
    } catch (error: any) {
        res.send(error.message)
    }
    
})



