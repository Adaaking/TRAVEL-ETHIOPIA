import React from 'react'

const Categories = ( {regions,filterTour} ) => {
  return (
    <div className='btn-container'>
        {regions.map((region,indx) =>{
            return <button type='button' className='filter-btn'
            key={indx} onClick={() => filterTour(region)}>
                {region}
            </button>
        })}
    </div>
  )
}

export default Categories