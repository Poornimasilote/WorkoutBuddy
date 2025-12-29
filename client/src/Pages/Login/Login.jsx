import { useState } from "react"
import "./LoginStyles.css"
import { uselogin } from "../../Hooks/useLogin"


const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { login, error } = uselogin()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(email,password)
    setEmail("")
    setPassword("")

  }

  return (
    <div className="main-form">

      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="">Email :</label>
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="">Password :</label>
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button>Login</button>
        {error && <p> {error}</p>}
      </form>
    </div>
  )
}

export default Login