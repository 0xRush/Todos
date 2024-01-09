import React from 'react'
import { CssBaseline } from '@mui/material'
import ToDoList from './ToDoList'
import NavBar from './NavBar'

const App = () => {
  return (
    <div>
      <CssBaseline />
      <NavBar />
      <ToDoList />
    </div>
  )
}

export default App