import React from 'react'
import "./Navbarstyle.css"
import vectorImage from './image/Vector.png'; 
export default function Navbar() {
  return (
    <div  className='nav'>
      <ul>
       <li className='list1'> <img src={vectorImage}/></li>
        <li className='list2'>912121131313</li>
        <li className='list3'>Get 50% off on selected items &nbsp; |  &nbsp;Shop Now</li>
        <li className='list4'>Login &nbsp;| &nbsp;Signup</li>

      </ul>
      
    </div>
  )
}
