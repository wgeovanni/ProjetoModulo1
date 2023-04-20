import { Header } from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import { DataProvider } from './context/dataContext.jsx'

export const App = () => {
  return (
    <DataProvider>
      <Header />
      <Outlet />
    </DataProvider>
  )
}