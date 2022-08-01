import React, { useEffect, useState } from "react";
import Images from "./Images";
import { cities } from "../my_datas/data";
import Cities from "./Cities";
const Detail = ({ singletour,setDetails}) => {
  const { name, images, description, region,location } = singletour[0];
  const [city, setCity] = useState([]);

  useEffect(() => {
    const new_cities = cities.filter((item) => item.region === region);
    setCity(new_cities);
  }, [singletour]);

  return (
    <div className="singletour_detail">
      <div>
        <h1>{name}</h1>
        <div className="underline"></div>
      </div>
      <div className="detail_body">
        <div className="description">
          <p className="descr" style={{ marginTop: "2rem" }}>
              {description}
          </p>
        </div>
        <h1>Images</h1>
        <p className="span">. . . .</p>
        <Images images={images} />
        <div className="detail_location">
          <h1>Location</h1>
          <p className="span">. . . .</p>
          <p className="par">
            It is found In {region} region Ethiopia About {location}km away from the country's 
            capital, Addis Ababa
          </p>
          <button className="btn" onClick={setDetails}>back to sites</button>
          <hr
            style={{
              margin: "5rem",
              height: "1px",
              backgroundColor: "darkblue",
            }}
          />
        </div>
        <div className="cities_of_region">
          <Cities cities={city} />
        </div>
      </div>
    </div>
  );
};

export default Detail;
