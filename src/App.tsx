
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Header from './Components/HomeComponents/Header'
import { ThemeProvider } from './Contexts/ThemeContext'

function App() {


  return (
    <>
    <ThemeProvider>
      <Routes>

          

          <Route path='/' element={
            <>
            <Header/>
            <Home/>
            </>
          } />

      </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
