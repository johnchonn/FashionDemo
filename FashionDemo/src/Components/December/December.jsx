import { useState, useEffect } from 'react'
import './December.css'
import december1 from '../../../public/december1.jpg'
import december2 from '../../../public/december2.jpg'
import december3 from '../../../public/december3.jpg'
import december4 from '../../../public/december4.jpg'
import december5 from '../../../public/december5.jpg'
import december6 from '../../../public/december6_2.jpg'
import december7 from '../../../public/december7_2.jpg'
import december8 from '../../../public/december8.jpg'
import december9 from '../../../public/december9_2.jpg'
import december10 from '../../../public/december10.jpg'
import december11 from '../../../public/december11.jpg'
import december12 from '../../../public/december12.jpg'
import december13 from '../../../public/december13.jpg'
import december14 from '../../../public/december14.jpg'
import december15 from '../../../public/december15.jpg'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const decemberData = [
  {
    img: december1,
    text: "Letter Pullover Sweater",
    price: "$30"

  },
  {
    img: december2,
    text: "Loose Knit Polo",
    price: "$40"

  },
  {
    img: december3,
    text: "Zip Knit Sweater",
    price: "$35"

  },
  {
    img: december4,
    text: "Loose Mop Sweatpants",
    price: "$45"

  },
  {
    img: december5,
    text: "Fitted Sports Hoodie",
    price: "$40"

  },
  {
    img: december6,
    text: "Collar Sweater",
    price: "$50"

  },
  {
    img: december7,
    text: "Fleece Turtleneck",
    price: "$80"

  },
  {
    img: december8,
    text: "Khaki Cargo Jacket",
    price: "$75"

  },
  {
    img: december9,
    text: "Long Sleeve Polo Shirt",
    price: "$60"

  },
  {
    img: december10,
    text: "Plush Leather Jacket",
    price: "$75"

  },
  {
    img: december11,
    text: "Laced Hoodie",
    price: "$50"

  },
  {
    img: december12,
    text: "Hooded Sweater",
    price: "$40"

  },
  {
    img: december13,
    text: "Long Sleeve Shirt",
    price: "$30"

  },
  {
    img: december14,
    text: "Plush Fleece Sweater",
    price: "$45"

  },
  {
    img: december15,
    text: "Drawstring Cargo Pants",
    price: "$35"

  },
]


function DecemberDisplay() {
  return (
    <div>
      <h4 className="december_title" style={{fontFamily: 'Roboto', fontSize: 25, textAlign: 'center', fontWeight: 300, position: 'relative', top: 20}}>DECEMBER ARRIVALS</h4>
      <span className="see_all" style={{fontFamily: 'Roboto', fontSize: 12, position: 'relative', left: 1275}}>See All</span>
    <div className="december_container">
      {decemberData.map((item, index) => (
        <div key={index} className="december_item_container">
          <FavoriteBorderIcon sx={{ fontSize: 19, position: 'absolute', marginTop: 0.6, marginLeft: 0.5, color: '#B22222'}}/>
          <img src={item.img} atl="img" className="december_image" style={{height: 215, width: 215}} />
          <div className="december_text" style={{color: 'black', fontFamily: 'Roboto', fontSize: 12}}>{item.text}</div>
          <div className="december_price" style={{color: 'black', fontFamily: 'Roboto', fontSize: 12}}>{item.price}</div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default DecemberDisplay