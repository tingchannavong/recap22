import { NavLink } from "react-router"

function NavBar() {
    const navStyles = "hover:text-white "
  return (
    <div className="flex justify-center gap-10 bg-emerald-300 shadow-2xl p-10 text-2xl font-bold">
        <NavLink to="/" className={navStyles}>Home</NavLink>
        <NavLink to="/register" className={navStyles}>Register</NavLink>
        <NavLink to="/post" className={navStyles}>Posts</NavLink>
        <NavLink to="/login" className={navStyles}>Log In</NavLink>
    </div>
  )
}

export default NavBar