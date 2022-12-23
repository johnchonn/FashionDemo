import { useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import avandress from '../../../public/avandress.jpg'
import etmon from '../../../public/etmon.jpg'
import siyazu from '../../../public/siyazu.jpg'
import fancyclub from '../../../public/fancyclub.jpg'
import insilence from '../../../public/insilence.jpg'
import lafudgestore from '../../../public/lafudgestore.jpg'
import maisnon from '../../../public/maisnon.jpg'
import youth_coat from '../../../public/youth_coat.jpg'
import './NewIn.css'


export const carouselData = [
  {
    img: avandress,
    title: "AVANDRESS",
    subText: "Tweed Crop Jacket",
    price: "$250"
  },
  {
    img: etmon,
    title: "ETMON",
    subText: "Trimmed Tweed Jacket",
    price: "$130"
  },
  {
    img: siyazu,
    title: "SIYAZU",
    subText: "Belt Mini Skirt",
    price: "$180"
  },
  {
    img: fancyclub,
    title: "FANCY CLUB",
    subText: "Tweed pleats Mini Skirt",
    price: "$120"
  },
  {
    img: insilence,
    title: "INSILENCE",
    subText: "Wool Tweed Jacket",
    price: "$135"
  },
  {
    img: lafudgestore,
    title: "LAFUDGESTORE",
    subText: "Artic Puffer Jacket",
    price: "$300"
  },
  {
    img: maisnon,
    title: "MAIS NON",
    subText: "Cookie Soft Knit",
    price: "$118"
  },
  {
    img: youth_coat,
    title: "YOUTH",
    subText: "Double Breasted Coat",
    price: "$400"
  },
]

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}

const settings = {
  containerClass: "newIn_container",
  itemClass: "newIn_item",
  dotListClass: "dots_container",
  swipeable: false,
  draggable: false,
  showDots: true,
  infinite: true,
  autoPlay: false,
  autoPlaySpeed: 3000,
  arrows: true,
  showDots: false,
}


function NewIn() {
  return (
    <div className="new_in_container">
      <h4 style={{fontFamily: 'Roboto', fontSize: 25, textAlign: 'center', marginTop: 80, fontWeight: 300, position: 'relative', zIndex: 0}}>NEW IN</h4>
      <span className="explore" style={{fontFamily: 'Roboto', fontSize: 12, fontWeight: 400, position: 'relative', left: 1150, bottom: 20}}>Explore More</span>
      <Carousel responsive={responsive} {...settings}>
        {carouselData.map((item, index) => (
          <div className="newIn_item" key={index}>
            <img src={item.img} atl="img" className="newIm_image" style={{height: 230, width: 195, position: 'relative', zIndex: 0}}/>
              <div className="newIn_title" style={{color: 'black', fontFamily: 'Roboto', fontSize: 14, fontWeight: 500, position: 'absolute', top: 240}}>{item.title}</div>
              <div className="newIn_subText" style={{color: 'black', fontFamily: 'Roboto', fontSize: 12, position: 'absolute', top: 257}}>{item.subText}</div>
              <div className="newIn_price" style={{color: 'black', fontFamily: 'Roboto', fontSize: 12, position: 'absolute', top: 274}} >{item.price}</div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default NewIn