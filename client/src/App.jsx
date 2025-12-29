import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { useAuthContext } from './Hooks/useAuthContext'
import Home from "./Pages/Home/Home"
import Navbar from './Components/Navbar/Navbar'
import Signup from "./Pages/Signup/Signup"
import Login from "./Pages/Login/Login"

function App() {
  const {user}= useAuthContext()

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={user ? <Home/>: <Navigate to="/login" />}></Route>
           <Route path="/signup" element={!user ? <Signup/> : <Navigate to="/"/>}></Route>
            <Route path="/login" element={!user ? <Login/> : <Navigate to="/"/>}></Route>
        </Routes>
      </Router>

    </>
  )
}

export default App
