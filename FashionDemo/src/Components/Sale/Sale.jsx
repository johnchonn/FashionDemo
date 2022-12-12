import { useState, useEffect } from 'react'
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil"
import { sales_Data } from "../../state/atoms"
import './Sale.css'
import '@fontsource/roboto/300.css';
import { Typography } from '@mui/material';

function Sale() {

  const saleDummyData = useRecoilValue(sales_Data);

  return (
    <div className="sale_container" >
      {saleDummyData.map((data, index) => (
          <div key={index} className="sale_item" ><Typography sx={{ fontSize: 13 }}>{data}</Typography></div>
      ))}
    </div>
  )
}

export default Sale