import React from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { loginUser } from "../api"

export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const [status, setStatus] = React.useState("idle")
    const [error,setError] = React.useState(null)
    const navigate = useNavigate()
    const location = useLocation()

    function handleSubmit(e) {
        e.preventDefault()
        setStatus("submitting")
        loginUser(loginFormData)
            .then(data => {
                console.log(data)
                setError(null)
                navigate(`${location.state?.from === "/login" ? "/host" : location.state.from}`)
            }).catch(
                err => {
                    const message = err?.message   
                    setError({ message })}
            ).finally(
                setStatus("idle")
            )
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="login-container">
            { location.state?.message && <h1>{location.state.message}</h1> }
            <h1>Sign in to your account</h1>
            { error && <p className="error" role="alert">{error.message}</p> }
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button>Log in</button>
            </form>
        </div>
    )

}