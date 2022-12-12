import { useState, useEffect } from 'react'
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil"
import { beauty_Data } from "../../state/atoms"
import './Beauty.css'
import '@fontsource/roboto/300.css';
import { Typography } from '@mui/material';

function Beauty() {

  const beautyDummyData = useRecoilValue(beauty_Data);

  return (
    <div className="beauty_container" >
      {beautyDummyData.map((data, index) => (
          <div key={index} className="beauty_item" ><Typography sx={{ fontSize: 13 }}>{data}</Typography></div>
      ))}
    </div>
  )
}

export default Beauty