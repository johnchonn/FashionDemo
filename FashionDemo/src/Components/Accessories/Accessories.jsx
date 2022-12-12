import { useState, useEffect } from 'react'
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil"
import { accessories_Data } from "../../state/atoms"
import './Accessories.css'
import '@fontsource/roboto/300.css';
import { Typography } from '@mui/material';

function Accessories() {

  const accessoriesDummyData = useRecoilValue(accessories_Data);

  return (
    <div className="accessories_container" >
      {accessoriesDummyData.map((data, index) => (
          <div key={index} className="accessories_item" ><Typography sx={{ fontSize: 13 }}>{data}</Typography></div>
      ))}
    </div>
  )
}

export default Accessories