
import React, { useState } from "react";
import { endemic_animals } from "../my_datas/data";
import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
const Endemics = () => {
  const [index, setIndex] = useState(5);
  const[readMore, setReadMore] = useState(false)
  // const [animals] = useState(endemic_animals[index]);
  const { id, name, link, image,desc } = endemic_animals[index];

  const info = `The richness and variety of the wildlife of Ethiopia is dictated by the great diversity of terrain with wide variations in climate, soils, natural vegetation and settlement patterns. Ethiopia contains a vast highland complex of mountains and dissected plateaus divided by the Great Rift Valley, which runs generally southwest to northeast and is surrounded by lowlands, steppes, or semi-desert.

  Ethiopia is an ecologically diverse country, ranging from the deserts along the eastern border to the tropical forests in the south to extensive Afromontane in the northern and southwestern parts. Lake Tana in the north is the source of the Blue Nile. It also has many endemic species, including 31 mammal species, notably the gelada, the walia ibex and the Ethiopian wolf ("Simien fox"). There are seven mammal species classified as "critically endangered", and others as "endangered" or "vulnerable". The wide range of altitude has given the country a variety of ecologically distinct areas, and this has helped to encourage the evolution of endemic species in ecological isolation. But some of these habitats are now much reduced or threatened.
  
  The nation is a land of geographical contrasts, ranging from the vast fertile west, with its forests and numerous rivers, to the world's hottest settlement of Dallol in its north. The Ethiopian Highlands are the largest continuous mountain ranges in Africa, and the Sof Omar Caves contains the largest cave on the continent. Ethiopia also has the second-largest number of UNESCO World Heritage Sites in Africa.`
  const checkNumber = (number) =>{
    if(number < 0){
      number = endemic_animals.length-1;
    }
    else if(number> endemic_animals.length-1){
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
    <div className="endemic">
      <div className="endemic_text">
        <h1>Endemic animals of ethiopia</h1>
        <p className="_p">
         {readMore? info:`${info.substring(0,800)}...`}
           <button className= {readMore? "_pbtn_red" :"_pbtn_blue"}
            onClick={() => setReadMore(!readMore)}>
              {readMore? 'show less': "readmore"}
            </button>
        </p>
      </div>
      <div className="endemic_bottom">
        <div className="endemic_left">
          <h1>{name}</h1>
          <p>{desc}</p>
          <a className="endemic_btn"href={link} > Find out more </a>
        </div>
          <img src={image} className='image' alt={name} />
      </div>
      <div className="icons">
        <FiChevronLeft className="icon2" onClick={handlePrevious}/>
        <FiChevronRight className="icon2" onClick={handleNext}/>
      </div>
      <div className="endemic_bottom_text">
        <h1>
          Ethiopia has amazing architectural and natural tourist sites I have
          prensented you some of the tourist sites with a short description below
        </h1>
        <Link to="/tours">tourist_sites</Link>
      </div>
    </div>
  );
};

export default Endemics;
