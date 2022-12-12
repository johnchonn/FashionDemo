import { useState } from 'react'
import { RecoilRoot } from "recoil"
import './App.css'
import Navbar from './Components/NavBar/NavBar'
import NavTabs from './Components/NavTabs/NavTabs'

function App() {

  return (
    <RecoilRoot>
      <div className="App">
        <h3><Navbar /></h3>
        <NavTabs />
      </div>
    </RecoilRoot>
  )
}

export default App
