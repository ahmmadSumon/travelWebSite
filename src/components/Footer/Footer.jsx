import React from 'react'
import video2 from '../../assets/footer.mp4'
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import '../Footer/footer.scss'

import Aos from 'aos'
import 'aos/dist/aos.css'
const Footer = () => {
  return (
    <div>
      <section className="footer section">
        <div className="videoDiv">
          <video src={video2} autoPlay muted loop type='video/mp4'></video>
        </div>
        <div className="footerContent container">
                <div className="contactDiv">
            <div className="text">
              <small data-aos='fade-up'>Keep in touch</small>
              <h2 data-aos='fade-up'>Travel with us</h2>
            </div>
            <div className="inputDiv">
              <input type="text" placeholder='Enter your Emanil here' />
              <button className='btn flex' type='submu=it'>
                        SEND <FiSend className='icon' />
              </button>
            </div>
          </div>
          <div data-aos='fade-up' className="footerCard">
            <div className="footerIntro flex">
              <div className="logoDiv flex">
                <a href="#" className='logo flex'>
                <MdOutlineTravelExplore className='icon' /> Travel.
                </a>
              </div>
            </div>

          <div className="footerPara" data-aos='fade-up'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum provident ducimus fuga voluptatem dignissimos consequatur sint aliquid! Magnam, blanditiis placeat deleniti reprehenderit sed sapiente cum ratione voluptas sint expedita praesentium?</p>
          </div>
          <div className="footerSocial flex">
          <FaTwitter className='icon'/>
          <FaYoutube  className='icon'/>
          <FaInstagramSquare className='icon'/>
          <FaTripadvisor  className='icon'/>
          </div>
          <div className="footerContainer">
          <div className="footerLinks grid" data-aos='fade-up'>
            <span className='linksTitle'>Our Agency</span>
            <li className="footerList flex">
            <IoIosArrowForward className='icon'/>Services
            </li>
            <li className="footerList flex">
            <IoIosArrowForward className='icon'/>Insurance
            </li>
            <li className="footerList flex">
            <IoIosArrowForward className='icon'/>Agency
            </li>
            <li className="footerList flex">
            <IoIosArrowForward className='icon'/> Tourism
            </li>
            <li className="footerList flex">
            <IoIosArrowForward className='icon'/>Payment
            </li>
          </div>

          <div className="footerLinks grid" data-aos='fade-up'>
            <span className='linksTitle'>Partners</span>
            <li className="footerList flex">
            <IoIosArrowForward className='icon'/>Booking
            </li>
            <li className="footerList flex">
            <IoIosArrowForward className='icon'/>Rentcars
            </li>
            <li className="footerList flex">
            <IoIosArrowForward className='icon'/>HostelWorld
            </li>
            <li className="footerList flex">
            <IoIosArrowForward className='icon'/> Trivago
            </li>
            <li className="footerList flex">
            <IoIosArrowForward className='icon'/>TripAdvisor
            </li>
          </div>
          <div className="footerLinks grid" data-aos='fade-up'>
            <span className='linksTitle'>Last Minute </span>
            <li className="footerList flex">
            <IoIosArrowForward className='icon'/>London
            </li>
            <li className="footerList flex">
            <IoIosArrowForward className='icon'/>California
            </li>
            <li className="footerList flex">
            <IoIosArrowForward className='icon'/>Indonesia
            </li>
            <li className="footerList flex">
            <IoIosArrowForward className='icon'/> Europe
            </li>
            <li className="footerList flex">
            <IoIosArrowForward className='icon'/>Ocenia
            </li>
          </div>
          </div>

          </div>

          <div className="copyWright"  >
            <p>COPYWRITES RESERVED<span> &copy; SMN 2024 </span></p>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Footer