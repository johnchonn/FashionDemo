import { useState } from 'react'
import { RecoilRoot } from "recoil"
import './App.css'
import Navbar from './Components/NavBar/NavBar'
import NavTabs from './Components/NavTabs/NavTabs'
import LiveCarousel from './Components/Carousel/Carousel'
import DecemberDisplay from './Components/December/December'
import NovemberDisplay from './Components/November/November'
import NewIn from './Components/NewIn/NewIn'

function App() {

  return (
    <RecoilRoot>
      <div className="App">
        <h3><Navbar /></h3>
        <NavTabs />
        <LiveCarousel />
        <NewIn />
        <DecemberDisplay />
        <NovemberDisplay />
      </div>
    </RecoilRoot>
  )
}

export default App
