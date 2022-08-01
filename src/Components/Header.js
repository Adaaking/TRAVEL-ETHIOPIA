import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { top_nav } from '../my_datas/data'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
const Header = () => {
const [index,setIndex] = useState(1)
const {id,name,image,text} = top_nav[index]

const checkNumber = (number) =>{
  if(number < 0){
    number = top_nav.length-1;
    console.log(number)
  }
  else if(number> top_nav.length-1){
    number = 0;
  }
  return number;
}

const handleNext = () =>{
  setIndex(checkNumber(index + 1))
}
const handlePrevious = () =>{
  setIndex(checkNumber(index-1))
}
  return (
    <div className='home'>
        <img src={image} alt={text} />
        <div className='text'>
          <h4>{name}</h4>
          <h1>{text}</h1>
          <Link to='/tours' className='btn'>tourist_sites</Link>
        </div>
        <div className='prev'>
          <FiChevronLeft className='icon' onClick={handlePrevious}/>
        </div>
        <div className='next'>
          <FiChevronRight className='icon' onClick={handleNext}/>
        </div>
    </div>
  )
}

export default Header