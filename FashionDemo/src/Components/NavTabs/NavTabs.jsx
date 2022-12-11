import { useState, useEffect } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './NavTabs.css'

function NavTabs() {
  return (
    <Tabs className="tabs_container" centered>
      <Tab label="SHOP ALL" className="shop_all" />
      <Tab label="NEW ARRIVALS" className="new_arrivals" />
      <Tab label="ACCESSORIES" className="accessories" />
      <Tab label="MEN" className="men" />
      <Tab label="WOMEN" className="women" />
      <Tab label="SALE" className="sale" />
    </Tabs>
  )
}

export default NavTabs