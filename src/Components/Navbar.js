import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu} from 'react-icons/fi'
import { TiDeleteOutline} from 'react-icons/ti';
import logo from '../images/logo1.png'
const Navbar = () => {
  const [sidebar,setSidebar] = useState(false)

  return (
    <div className='navbar'>
        {!sidebar && <div className='logo'>
            <h1>Ethiopia</h1>
        </div>}
        <div className='links'>
            <Link to='/'>home</Link>
            <Link to='/tours'>tourist - sites</Link>
            <Link to='/about'>About us</Link>
            <Link to='/contact'>contact</Link>
        </div>
        <div className='icon_menu'>
           {!sidebar && <FiMenu className='Icon' onClick={()=>setSidebar(true)}/>}
        </div>
        <div className={sidebar? 'mob_nav':'display_none'}>
            <Link to='/'>home</Link>
            <Link to='/tours'>tourist - sites</Link>
            <Link to='/about'>About us</Link>
            <Link to='/contact'>contact</Link>
            <TiDeleteOutline className='deleteIcon' onClick={()=>setSidebar(false)}/>
        </div>
    </div>
  )
}

export default Navbar