import { useState, useEffect, useRef } from 'react'
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil"
import {
        newArrivals_is_active,
        mens_is_active,
        women_is_active,
        accessories_is_active,
        beauty_is_active,
        sales_is_active
      } from "../../state/atoms"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import '@fontsource/roboto/300.css';
import './NavTabs.css'
import NewArrivals from '../NewArrivals/NewArrivals'
import Mens from '../Mens/Mens'
import Women from '../Women/Women'
import Accessories from '../Accessories/Accessories'
import Beauty from '../Beauty/Beauty'
import Sale from '../Sale/Sale'

function NavTabs() {

  // NEW ARRIVALS
  const [newArrivalsHover, setNewArrivalsHover] = useRecoilState(newArrivals_is_active);
  const isNewArrivalsHover = useRecoilValue(newArrivals_is_active);

  // MENS
  const [mensHover, setMensHover] = useRecoilState(mens_is_active);
  const isMensHover = useRecoilValue(mens_is_active);

  // WOMEN
  const [womenHover, setWomenHover] = useRecoilState(women_is_active);
  const isWomenHover = useRecoilValue(women_is_active);

  // ACCESSORIES
  const [accessoriesHover, setAccessoriesHover] = useRecoilState(accessories_is_active);
  const isAccessoriesHover = useRecoilValue(accessories_is_active);

  // BEAUTY
  const [beautyHover, setBeautyHover] = useRecoilState(beauty_is_active);
  const isBeautyHover = useRecoilValue(beauty_is_active);

  // SALE
  const [saleHover, setSaleHover] = useRecoilState(sales_is_active);
  const isSaleHover = useRecoilValue(sales_is_active);


  return (
    <div>
      <Tabs className="tabs_container" centered>
        <Tab onMouseEnter={() => setNewArrivalsHover(!newArrivalsHover)} sx={{ fontSize: 14 }} label="NEW ARRIVALS" className="new_arrivals" />
        <Tab onMouseEnter={() => setMensHover(!mensHover)} onMouseLeave={() => setMensHover(!mensHover)} sx={{ fontSize: 14 }} label="MEN" className="men" />
        <Tab onMouseEnter={() => setWomenHover(!womenHover)} onMouseLeave={() => setWomenHover(!womenHover)} sx={{ fontSize: 14 }} label="WOMEN" className="women" />
        <Tab onMouseEnter={() => setAccessoriesHover(!accessoriesHover)} onMouseLeave={() => setAccessoriesHover(!accessoriesHover)} sx={{ fontSize: 14 }} label="ACCESSORIES" className="accessories" />
        <Tab onMouseEnter={() => setBeautyHover(!beautyHover)} onMouseLeave={() => setBeautyHover(!beautyHover)} sx={{ fontSize: 14 }} label="BEAUTY" className="beauty" />
        <Tab onMouseEnter={() => setSaleHover(!saleHover)} onMouseLeave={() => setSaleHover(!saleHover)} sx={{ fontSize: 14 }} label="SALE" className="sale" />
      </Tabs>
      <div>
      {
        isNewArrivalsHover ?
        <div onMouseLeave={() => setNewArrivalsHover(!newArrivalsHover)}><NewArrivals /></div> :
        null
      }
      </div>
      <div>
      {
        isMensHover ?
        <div><Mens /></div> :
        null
      }
      </div>
      <div>
        {
          isWomenHover ?
          <Women /> :
          null
        }
      </div>
      <div>
        {
          isAccessoriesHover ?
          <Accessories /> :
          null
        }
      </div>
      <div>
        {
          isBeautyHover ?
          <Beauty /> :
          null
        }
      </div>
      <div>
        {
          isSaleHover ?
          <Sale /> :
          null
        }
      </div>
    </div>
  )
}

export default NavTabs