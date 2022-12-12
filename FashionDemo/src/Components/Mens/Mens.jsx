import { useState, useEffect } from 'react'
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil"
import { mens_Data } from "../../state/atoms"
import './Mens.css'
import '@fontsource/roboto/300.css';
import { Typography } from '@mui/material';

function Mens() {

  const menDummyData = useRecoilValue(mens_Data);

  return (
    <div className="mens_container" >
      {menDummyData.map((data, index) => (
          <div key={index} className="men_item" ><Typography sx={{ fontSize: 13 }}>{data}</Typography></div>
      ))}
    </div>
  )
}

export default Mens