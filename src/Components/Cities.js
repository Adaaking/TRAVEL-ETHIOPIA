import React from 'react'

const Cities = ({cities}) => {
 
  return (
    <div className='cities'>
      <h1>cities in the region</h1>
      <p className='span'>. . .  .</p>
        {cities.map((newCity,indx)=>{
          const {id,name,desc,image,region} = newCity;
            return <div key={indx} className="city">
              <img  src={image}/>
               <div className='city_desc'>
               <h1>{name}</h1>
               {/* <p className='span'>. . .  .</p> */}
                <p className='city_des'>{desc}</p>
               </div>
            </div>
        })}
    </div>
  )
}

export default Cities