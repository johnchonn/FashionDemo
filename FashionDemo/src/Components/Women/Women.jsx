import { useState, useEffect } from 'react'
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil"
import { women_Data } from "../../state/atoms"
import './Women.css'
import '@fontsource/roboto/300.css';
import { Typography } from '@mui/material';

function Women() {

  const womenDummyData = useRecoilValue(women_Data);

  return (
    <div className="women_container" >
      {womenDummyData.map((data, index) => (
          <div key={index} className="women_item" ><Typography sx={{ fontSize: 13 }}>{data}</Typography></div>
      ))}
    </div>
  )
}

export default Women