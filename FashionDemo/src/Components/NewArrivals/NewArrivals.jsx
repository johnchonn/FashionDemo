import { useState, useEffect } from 'react'
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil"
import { newArrivals_is_active, newArrivals_Data } from "../../state/atoms"
import './NewArrivals.css'
// import '@fontsource/roboto/300.css';
// import { Typography } from '@mui/material';

function NewArrivals() {
  // const [isArrivalsHover, setArrivalsHover] = useRecoilState(newArrivals_is_active);
  const newArrivalsData = useRecoilValue(newArrivals_Data);
  // const arrivalsActive = useRecoilValue(newArrivals_is_active);

  return (
    <div className="newArrivals_container" >
      {newArrivalsData.map((data, index) => (
        <div key={index}
        className="data_container"
        >
          {/* <div><Typography className="data_date" sx={{ fontSize: 13 }}>{data.date}</Typography></div> */}
          <div className="data_date">{data.date}</div>
          {data.items.map((item, i) => (
            // <div key={i} className="data_item" ><Typography sx={{ fontSize: 12 }}>{item}</Typography></div>
            <div key={i} className="data_item">{item}</div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default NewArrivals