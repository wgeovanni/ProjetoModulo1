import { Header } from "./components/Header/Header"
import { Outlet } from "react-router-dom"
import { Footer } from "./components/Footer/Footer"
import { DataProvider } from "./context/dataContext.jsx"
import "./app.css"

export const App = () => {
  return (
    <DataProvider>
      <div className="container-principal">
        <Header />
        <div className="container container-custom">
          <Outlet />
        </div>
        <Footer />
      </div>
    </DataProvider >
  )
}