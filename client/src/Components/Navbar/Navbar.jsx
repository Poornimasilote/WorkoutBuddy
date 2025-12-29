import React from 'react'
import "./NavbarStyles.css"
import { Link } from "react-router-dom"
import { useLogout } from "../../Hooks/useLogout"
import { useAuthContext } from '../../Hooks/useAuthContext'

const Navbar = () => {
  const { user } = useAuthContext()
  const { logout } = useLogout()

  const handleLogout = () => {
    logout()
  }

  return (
    <nav className="navbar">
      <Link to="/"><h1 className="logo">WorkoutBuddy</h1>
      </Link>
      {user && (
        <div className="logout">
          <span>{user.email}</span>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}


   {!user &&(
       <div className="menu">
        <Link to="/signup" className="nav-link">Sign Up</Link>
        <Link to="/login" className="nav-link">Login</Link>
      </div>
   )}
    </nav>
  )
}

export default Navbar
