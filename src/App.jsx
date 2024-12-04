import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import { Box } from '@mui/material'

function App() {


  return (
    <Box >
        <NavBar />
        <Outlet />
    </Box>
  )
}

export default App
