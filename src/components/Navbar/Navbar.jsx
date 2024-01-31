import React, { useState } from 'react'
import { MdTravelExplore } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import "./navbar.scss";

const Navbar = () => {
    const [active, setActive] = useState('navBar')

    const showNav = ()=>{
        setActive('navBar activeNavBar')
    }
    const removeNav = ()=>{
        setActive('navBar')
    }
  return (
    <div>
        <section className="navBar  Section ">
            <header className="header  flex ">
                <div className="logoDiv ">
                    <a href="#" className='logo flex'>
                   
                     <h1> <MdTravelExplore className='icon' /> smnTravels Co.</h1>
                    </a>
                </div>
            
            <div className={active} >
                <ul className='navList flex'>
                    <li className="navItem"><a href="#" className='navLink'>Home</a></li>
                    <li className="navItem"><a href="#" className='navLink'>Package</a></li>
                    <li className="navItem"><a href="#" className='navLink'>Shop</a></li>
                    <li className="navItem"><a href="#" className='navLink'>About</a></li>
                    <li className="navItem"><a href="#" className='navLink'>Pages</a></li>
                    <li className="navItem"><a href="#" className='navLink'>News</a></li>
                    <li className="navItem"><a href="#" className='navLink'>Contact</a></li>
                    <button className='btn'>BOOK NOW</button>
                </ul>
                <div className="closeNavBar" onClick={removeNav}>
                <IoMdCloseCircle  className='icon'/>
                </div>
             
            </div>
            <div onClick={showNav} className="toogleNavBar tgBar flex">
            <TbGridDots className="icon" />
            </div>
            </header>
        </section>
    </div>
  )
}

export default Navbar