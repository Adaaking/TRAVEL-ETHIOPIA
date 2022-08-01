import React from "react";

const Tour = ({ tour, filterById }) => {
  const { id, name, short_desc, images, location} = tour;
  return (
    <div className="tour">
      <img src={images[0]} alt="" />
      <div className="from_addis"> 
        <h1>{name}</h1>
        <h3>{location}km from A.A</h3>
      </div>
      <p className="desc">{short_desc}</p>
      <button className="detail" onClick={() => filterById(id)}>
        see details
      </button>
    </div>
  );
};

export default Tour;
