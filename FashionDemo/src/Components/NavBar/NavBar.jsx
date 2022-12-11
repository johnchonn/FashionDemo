import { useState, useEffect } from 'react'
import './NavBar.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import '@fontsource/roboto/300.css';
import { Typography } from '@mui/material';

function NavBar() {
  return (
    <div>
      <nav className="nav_bar">
        <form className="search_container">
        <input className="search_bar" type="text" placeholder="Search..." />
        <SearchIcon className="search_icon" />
        </form>
        <div className="left_nav">
          <div className="account_container">
            <PersonOutlineIcon sx={{ fontSize: 20 }} className="account_icon" />
            <Typography sx={{ fontSize: 14 }} className="nav_account">A C C O U N T</Typography>
          </div>
          <div className="cart_container">
            <WorkOutlineIcon sx={{ fontSize: 17 }} className="cart_icon" />
            <Typography sx={{ fontSize: 14 }} className="nav_cart" >C A R T</Typography>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar