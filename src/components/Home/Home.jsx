import React, { useEffect } from 'react'
import video from "../../assets/waves.mp4"
import { FaLocationDot } from "react-icons/fa6";
import { FaFilter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";
import { TbApps } from "react-icons/tb";
import "../Home/home.scss"
import Aos from 'aos'
import 'aos/dist/aos.css'


const Home = () => {
  useEffect(() => {
    Aos.init({duration:1000});

 
  }, [])
  
  return (
    <div>
      <section className="home section ">
      <div className="layOut">  </div>
        <video src={video} muted autoPlay loop ></video>
        <div className="homeContent">
          <div className="textDiv">
            <span data-aos='fade-up' className='smallText'>Our Holiday Packages</span>
            <h1  data-aos='fade-up' className='homeTitle'>Travel your  Beloved Destination</h1>
          </div>
        </div>

          <div  data-aos='fade-up' className="cardDiv grid">
           <div className="destinationInput">
            <label htmlFor="city">
              Search Your Destination:
           </label>
          <div className="input flex">
          <input type="text" placeholder='Enter place name here' />
          <FaLocationDot className='icon'/>
          </div>
        </div>

        <div className="dateInput">
            <label htmlFor="date">
              Select Yor Date:
            </label>
           <div className="input flex">
              <input type="date"  />
            
            </div>
        </div>

        <div className="priceInput">
          <div className="totalLabel flex">
          <label htmlFor="price">
              Select price range:
           </label>
           <h3 className='total'>$5000</h3>
          </div>
          
          <div className="input flex">
          <input type="range"  max={10000} min={1000} />
         
          </div>
        </div>
        <div className="searchOptions flex">
        <FaFilter className='icon'/>
        <h3>More Filters</h3>

        </div>
           </div>

           <div className="homeFooterIcons container flex">
            <div className="leftIcons">
            <FaFacebook className='icon' />
            <FaInstagram className='icon' />
            <FaTripadvisor className='icon' />
            </div>
            <div className="rightIcons">
            <FaListCheck className='icon' />
            <TbApps className='icon' />
            </div>

           </div>
          
      </section>
     
    
    </div>
  )
}

export default Home;