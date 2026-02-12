import { RouterProvider } from "react-router"
import routes from "./routes"
import { ToastContainer } from "react-toastify"


function App() {
  return (
    <div>
      <ToastContainer position="bottom-right"/>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App