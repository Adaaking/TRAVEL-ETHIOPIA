import React from 'react'

const Images = ({images}) => {
  return (
    <div className='images'>
        {images.map((image,indx) =>{
            return <div className='image' key={indx}>
                <img src={image} alt="" />
            </div>
        })}
    </div>
  )
}

export default Images