import { useState, useEffect, useRef } from 'react'
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil"
import {
        newArrivals_is_active,
        mens_is_active,
        women_is_active,
        accessories_is_active,
        beauty_is_active,
        sales_is_active,
        shareable_is_active
      } from "../../state/atoms"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// import '@fontsource/roboto/400.css';
import './NavTabs.css'
import NewArrivals from '../NewArrivals/NewArrivals'
import Mens from '../Mens/Mens'
import Women from '../Women/Women'
import Accessories from '../Accessories/Accessories'
import Beauty from '../Beauty/Beauty'
import Sale from '../Sale/Sale'

function NavTabs() {

  // SHAREABLE
  const [shareableHover, setShareableHover] = useRecoilState(shareable_is_active);
  const isShareable = useRecoilValue(shareable_is_active);

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

  function closeArrivals() {
    setMensHover(true);
    setNewArrivalsHover(false);
    setWomenHover(false);
  }

  function closeMens() {
    setNewArrivalsHover(true);
    setMensHover(false);
  }

  function closeWomen() {
    setWomenHover(true);
    setMensHover(false);
    setAccessoriesHover(false);
  }

  function closeAccessories() {
    setAccessoriesHover(true);
    setWomenHover(false);
    setBeautyHover(false);
  }

  function closeBeauty() {
    setBeautyHover(true);
    setAccessoriesHover(false);
    setSaleHover(false);
  }

  function closeSales() {
    setSaleHover(true);
    setBeautyHover(false);
  }


  return (
    <div>
      <Tabs className="tabs_container" centered>
        <Tab onMouseEnter={closeMens} onMouseLeave={() => setNewArrivalsHover(false)} sx={{ fontSize: 14}} label="NEW ARRIVALS" className="new_arrivals" />
        <Tab onMouseEnter={closeArrivals} sx={{ fontSize: 14 }} label="MEN" className="men" />
        <Tab onMouseEnter={closeWomen} sx={{ fontSize: 14 }} label="WOMEN" className="women" />
        <Tab onMouseEnter={closeAccessories} sx={{ fontSize: 14 }} label="ACCESSORIES" className="accessories" />
        <Tab onMouseEnter={closeBeauty} sx={{ fontSize: 14 }} label="BEAUTY" className="beauty" />
        <Tab onMouseEnter={closeSales} onMouseLeave={() => setSaleHover(false)} sx={{ fontSize: 14 }} label="SALE" className="sale" />
      </Tabs>
      <div>
      {
        isNewArrivalsHover ?
        <div onMouseEnter={() => setNewArrivalsHover(true)} onMouseLeave={() => setNewArrivalsHover(!newArrivalsHover)}><NewArrivals /></div> :
        null
      }
      </div>
      <div>
      {
        isMensHover ?
        <div onMouseLeave={() => setMensHover(!mensHover)}><Mens /></div> :
        null
      }
      </div>
      <div>
        {
          isWomenHover ?
          <div onMouseLeave={() => setWomenHover(!womenHover)}><Women /></div> :
          null
        }
      </div>
      <div>
        {
          isAccessoriesHover ?
          <div onMouseLeave={() => setAccessoriesHover(!accessoriesHover)}><Accessories /></div> :
          null
        }
      </div>
      <div>
        {
          isBeautyHover ?
          <div onMouseLeave={() => setBeautyHover(!beautyHover)}><Beauty /></div> :
          null
        }
      </div>
      <div>
        {
          isSaleHover ?
          <div onMouseEnter={() => setSaleHover(true)} onMouseLeave={() => setSaleHover(!saleHover)}><Sale /></div> :
          null
        }
      </div>
    </div>
  )
}

export default NavTabs