import { useState, useEffect } from 'react'
import './NavBar.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Tooltip from '@mui/material/Tooltip';
import '@fontsource/roboto/300.css';
import logo from '../../../public/logoDesign.jpg'

function NavBar() {
  return (
    <div>
      <nav className="nav_bar">
        <img src={logo} atl="Logo" className="logo" />
        <form className="search_container">
        <input className="search_bar" type="text" placeholder="Search..." />
        <SearchIcon sx={{ fontSize: 17 }} className="search_icon" />
        </form>
        <div className="left_nav">
          <div className="account_container">
            <Tooltip title="Account" arrow>
              <PersonOutlineIcon sx={{ fontSize: 19.5 }} className="account_icon" />
            </Tooltip>
            <Typography sx={{ fontSize: 12 }} className="nav_account">A C C O U N T</Typography>
          </div>
          <Tooltip title="Favorites" arrow>
            <FavoriteBorderIcon sx={{ fontSize: 16 }} className="favorites_icon" />
          </Tooltip>
          <div className="cart_container">
          <Tooltip title="cart" arrow>
              <WorkOutlineIcon sx={{ fontSize: 16 }} className="cart_icon" />
          </Tooltip>
            <Typography sx={{ fontSize: 12 }} className="nav_cart" >C A R T</Typography>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar