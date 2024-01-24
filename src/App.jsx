import { RouterProvider, createBrowserRouter } from "react-router-dom"
import HomePages from "./Pages/HomePages"
import LoginPages from "./Pages/LoginPages"
import ProductPages from "./Pages/ProductPages"
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  const routes = createBrowserRouter([
    {path: "/", element: <HomePages/>},
    {path: "/login", element:<LoginPages/>},
    {path: "/auth/products", element: <ProductPages/>}
  ])

  return (
    <>
    <RouterProvider router={routes}>
    </RouterProvider> 
    </>
  )
}

export default App
