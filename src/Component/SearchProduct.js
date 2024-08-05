import React from 'react'
import searchIcon from "./image/searchIcon.png"
import materialImage from "./image/material.png"
import materialeImage from "./image/material1.png"
import "./searchProductstyle.css"
import Products from './Products'


export default function SearchProduct() {
  return (
    <div>
        <div className='searchbar'>
            <img src= {searchIcon}/>
      <input type='text'/>
      </div>
      <div className='searchbar1'>
        <div className='left1'>
            <div>
            <img  src= {materialImage }/>
            <img  src= {materialeImage }  className='image3'/>
            </div>
            <div className='selection'>
           <div className='option'> 
            <select >
 <option value="" disabled selected> Headphone type</option>         
  <option value="Featured">Featured</option>
  <option value="In-ear headphone">In-ear headphone</option>
  <option value="On-ear headphone">On-ear headphone</option>
  <option value="Over-ear headphone">Over-ear headphone</option>
</select>
</div> 
<div className='option'> 
<select  name='Company' >
<option value="" disabled selected> Company</option>
  <option value=" Featured">Featured</option>
  <option value="Sony">Sony</option>
  <option value="Boat">Boat</option>
</select>
</div> 
<div className='option'> 
<select >  
<option value="" disabled selected> Colour</option>
  <option value="Featured">Featured</option>
  <option value="Blue">Blue</option>
  <option value="Black">Black</option>
  <option value="white">white</option>
</select>
</div> 
<div className='option'> 
<select >
<option value="" disabled selected> Price</option>
  <option value="Featured">Featured</option>
  <option value="₹1,000 - ₹10,000">₹1,000 - ₹10,000</option>
  <option value="₹10,000 - ₹20,000">₹10,000 - ₹20,000</option>
</select>

</div> 
</div>
        </div>
        <div className='right1'>
        <div className='option1'> 
            <select >
 <option value="" disabled selected> Sort by : Featured </option>         
  <option value="Featured">Featured</option>
  <option value="Price : Lowest">Price : Lowest</option>
  <option value="Price : Highest">Price : Highest</option>
  <option value="Name : (A-Z)">Name : (A-Z)</option>
  <option value="Name : (Z-A)<">Name : (Z-A)</option>
</select>
</div> 
        </div>
        
      </div>
      <Products/>
    </div>
  )
}
