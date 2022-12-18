import { useState, useEffect } from 'react'
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil"
// import Carousel from 'react-material-ui-carousel'
import dunst from '../../../public/dunst.jpg'
import jogun from '../../../public/jogun.jpg'
import mmlg from '../../../public/mmlg.jpg'
import youth from '../../../public/youth.jpg'
import monclos from '../../../public/monclos.jpg'
import lady from '../../../public/lady.jpg'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Carousel.css'

export const carouselData = [
  {
    img: jogun,
    title: "J O G U N S H O P",
    subText: "[Winter Classics 2022]"
  },
  {
    img: mmlg,
    title: "M M L G",
    subText: "[My Everyday Wear]"
  },
  {
    img: youth,
    title: "Y O U T H",
    subText: "[Still Life]"
  },
  {
    img: monclos,
    title: "M O N C L O S",
    subText: "[Simple Hair Care]"
  },
  {
    img: dunst,
    title: "D U N S T",
    subText: "[A Day Of Us]"
  },
  {
    img: lady,
    title: "L A D Y V O L U M E",
    subText: "[Distinction]"
  },
]

// const settings = {
//   navButtonsAlwaysVisible: true,
//   animation: "slide",
//   duration: 700,
//   interval: 3000,

// }

// function LiveCarousel() {
//   return (
//     <Carousel {...settings} sx={{width: '80%', mt: 10, marginLeft: "auto", marginRight: "auto"}}>
//       {carouselData.map((item, index) => (
//         <div className="carousel_item" key={index}>
//           <img src={item.img} atl="dunst" className="carousel_image" style={{height: 385, width: 305}}/>
//           <div
//           className="carousel_title"
//           style={{color: 'white', fontFamily: 'Roboto', position: 'absolute', bottom: 75, fontSize: 22, marginLeft: 20}}
//           >
//           {item.title}
//           </div>
//           <div className="carousel_subText" style={{color: 'white', fontFamily: 'Roboto', position: 'absolute', bottom: 50, fontSize: 18, marginLeft: 20}}>{item.subText}</div>
//         </div>
//       ))}
//       </Carousel>
//   )
// }

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
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
  containerClass: "carousel_container",
  itemClass: "carousel_item",
  dotListClass: "dots_container",
  swipeable: false,
  draggable: false,
  showDots: true,
  infinite: true,
  autoPlay: true,
  autoPlaySpeed: 3000,
  arrows: true,
  showDots: false,
}

function LiveCarousel() {
  return (
    <div>
      <h4 style={{fontFamily: 'Roboto', fontSize: 25, textAlign: 'center', marginTop: 80, fontWeight: 300}}>FEATURED BRANDS</h4>
    <Carousel responsive={responsive} {...settings}>
      {carouselData.map((item, index) => (
        <div className="carousel_item" key={index}>
          <img src={item.img} atl="dunst" className="carousel_image" style={{height: 385, width: 305}}/>
          <div
          className="carousel_title"
          style={{color: 'white', fontFamily: 'Roboto', position: 'absolute', bottom: 75, fontSize: 22, marginLeft: 20}}
          >
          {item.title}
          </div>
          <div className="carousel_subText" style={{color: 'white', fontFamily: 'Roboto', position: 'absolute', bottom: 50, fontSize: 18, marginLeft: 20}}>{item.subText}</div>
        </div>
      ))}
      </Carousel>
      </div>
  )
}


export default LiveCarousel