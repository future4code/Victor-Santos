import { useLayoutEffect } from "react"
import { useHistory } from "react-router-dom"
import { goToAdminHomePage } from "../route/coordinator"

const useUnprotectedPage = () => {
    const history = useHistory()

    useLayoutEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            goToAdminHomePage(history)
        }
    }, [history])

}

export default useUnprotectedPage