
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Header from './Components/HomeComponents/Header'
import { ThemeProvider } from './Contexts/ThemeContext'
import ProjectDetail from './Pages/ProjectDetail'

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

          <Route path="/projects/:slug" element={<ProjectDetail />} />

      </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
