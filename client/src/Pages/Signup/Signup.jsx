import "./SignupStyles.css"
import { useState } from "react"
import { useSignup } from "../../Hooks/useSignup"

const Signup = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { signup, error } = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup(email, password)
    setEmail("")
    setPassword("")

  }

  return (
    <div className="main-form">

      <form onSubmit={handleSubmit}>
        <h1>SignUp</h1>
        <label htmlFor="">Email :</label>
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="">Password :</label>
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button>Sign Up</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  )

}

export default Signup