import React from 'react'
import Suggestion from './Suggestion'
import banner2 from "../../images/Banner/banner2.jpg"
import plane from "../../images/Cargo/plane.jpg"
import ship from "../../images/Cargo/ship.jpg"
import train from "../../images/Cargo/train.jpg"
import truck from "../../images/Cargo/truck.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlane,
  faShip,
  faTrain,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
const Suggestions = () => {
  const info=[
    {
      name: "Explore our facility",
      image: plane,
      des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      icon: faPlane,
      titleColor: 'text-black',
      desColor: 'text-black'

    },
    {
      name: "view our video",
      image: ship,
      des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      icon: faShip,
      titleColor: 'text-white',
      desColor: 'text-white'

    },
    {
      name: "Explore our environment",
      image: train,
      des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      icon: faTrain,
      titleColor: 'text-black',
      desColor: 'text-black'

    
    },
    {
      name: "Warehouse solution",
      image: truck,
      des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      icon: faTruck,
      titleColor: 'text-white',
      desColor: 'text-white'

    
    }
  ]
  return (
   <div className="mt-40">
   <h1 className='text-4xl uppercase text-primary text-center font-bold my-5'>Explore Our Company</h1>
     <div className='grid grid-cols-1 lg:grid-cols-4 mt-16'>
        {
          info.map(suggest => <Suggestion suggest={suggest}></Suggestion>)
        }
        

    </div>
   </div>
  )
}

export default Suggestions
