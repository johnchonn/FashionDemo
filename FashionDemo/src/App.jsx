import { useState } from 'react'
import './App.css'
import Navbar from './Components/NavBar/NavBar'
import NavTabs from './Components/NavTabs/NavTabs'

function App() {

  return (
    <div className="App">
      <h3><Navbar /></h3>
      <NavTabs />
    </div>
  )
}

export default App
