import { useState, useEffect } from 'react'
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil"
import { newArrivals_is_active, newArrivals_Data } from "../../state/atoms"
import './NewArrivals.css'

function NewArrivals() {
  const newArrivalsData = useRecoilValue(newArrivals_Data);

  return (
    <div className="newArrivals_container" >
      {newArrivalsData.map((data, index) => (
        <div key={index}
        className="data_container"
        >
          <div className="data_date">{data.date}</div>
          {data.items.map((item, i) => (
            <div key={i} className="data_item">{item}</div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default NewArrivals