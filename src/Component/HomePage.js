import React from 'react'
import "./HomePagestyle.css"
import musicImage from "./image/image.png"
import cartImage from "./image/Vectore.png"
import  heroImage from "./image/image_5.png"
import SearchProduct from './SearchProduct'
export default function HomePage() {
  return (
   <div className='container'>
    <div className='main'>
      <div className='left'>
      <ul className='homepage'>
     <li><img src={musicImage}/> </li>
     <li> <h2>Musicart</h2> </li>
     <li>  <h3>Home  </h3></li>
     <li> <h3> Invoice </h3></li>
      </ul>
      </div>
      <div className='right'>
        <div className='firstdiv'>
         <img src={cartImage}/>
         <p> view cart  <span>0</span></p>
        </div>
        <div className='seconddiv'>
          <h1> DT </h1></div>
      </div>
      </div>
      <div className='bannar'>
       <div className='headline'><h1>Grab upto 50% off on Selected headphones</h1> </div> 
<div  className='heroin'>  <img  src={heroImage}/> </div>
    </div>
    <SearchProduct/>
    </div>
  )
}
