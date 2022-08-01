import React from 'react';
import bird from "../images/bird.jpeg";
import wonchi from '../images/wonchi_lake.jpg'
import lalibela from "../images/11.jpg";
const Hisotry = () => {
  return (
    <div className='histo_top'>      
        <div className='history'>
          <h4>Steeped in History, Enveloped in 
          Nature inspired by passion for hospitality, 
          </h4>
       </div>
    <div className='visit'>
        <div className='visit_top'>
          <h1>Visit Ethiopia</h1>
          <p className='visit_text'>Ethiopia, country on the Horn of Africa. The country lies completely within the tropical latitudes and is relatively compact, 
          with similar north-south and east-west dimensions. The capital is Addis Ababa (“New Flower”), located almost at the centre of the country. Ethiopia is 
          the largest and most populated country in the Horn of Africa. With the 1993 secession of Eritrea, its former province along the Red Sea, Ethiopia became landlocked.
          Ethiopia is a multi-ethnic state with over 80 different ethnic groups. Christianity and Islam are the main faiths observed in Ethiopia. This sovereign state is a founding member of the UN, 
          the Group of 24, the Non-Aligned Movement, the Group of 77, and the Organisation of African Unity. Addis Ababa is the headquarters of the African Union, the Pan 
          African Chamber of Commerce and Industry, the United Nations Economic Commission for Africa, the African Standby Force and many of the global non-governmental organizations focused on Africa.
          </p>
        </div>
        <div className='visit_bottom'>
            <img src={bird} alt="abyysinian wood pecker"/>
            <img src={lalibela} alt="lalibela"/>
            <img src={wonchi} alt="wochi lake"/>
          </div>
    </div>
  </div>
  )
}

export default Hisotry