import { Outlet } from "react-router"
import NavBar from "../components/NavBar"

function MainLayout() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Outlet />
    </div>
  )
}

export default MainLayout