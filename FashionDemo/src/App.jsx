import { useState } from 'react'
import { RecoilRoot } from "recoil"
import './App.css'
import Navbar from './Components/NavBar/NavBar'
import NavTabs from './Components/NavTabs/NavTabs'
import LiveCarousel from './Components/Carousel/Carousel'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function App() {

  return (
    <RecoilRoot>
      <div className="App">
        <h3><Navbar /></h3>
        <NavTabs />
        <LiveCarousel />
      </div>
    </RecoilRoot>
  )
}

export default App
