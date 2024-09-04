import React,{useEffect} from 'react'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'
import img7 from '../../assets/img7.jpg'
import img8 from '../../assets/img8.jpg'
import img9 from '../../assets/img9.jpg'
import img10 from '../../assets/img10.jpg'
import { CiLocationOn } from "react-icons/ci";
import { FaClipboardCheck } from "react-icons/fa";
import "../Main/main.scss"
import Aos from 'aos'
import 'aos/dist/aos.css'
const data = [

  {
    id: 1,
    imgSrc: img1,
    destinationTitle: "Machu Picchu",
    locationName: "Peru",
    location: "Andes Mountains",
    grade: "4.8",
    fees: "$4150",
    description: "Explore the ancient Inca city situated high in the Andes mountains. Machu Picchu is a UNESCO World Heritage Site and one of the most iconic archaeological sites in the world."
  },
  {
    id: 2,
    imgSrc: img2,
    destinationTitle: "Santorini",
    locationName: "Greece",
    location: "Aegean Sea",
    grade: "4.9",
    fees: "$2200",
    description: "Enjoy the breathtaking views of the Aegean Sea from the charming villages of Santorini. Famous for its white-washed buildings and stunning sunsets."
  },
  {

  id: 3,
  imgSrc: img3,
  destinationTitl: "Kyoto",
  locationName: "Japan",
  location: "Kyoto City",
  grade: 4.7,
  fees: "$3100",
  description: "Immerse yourself in the rich history and culture of Kyoto. Visit ancient temples, traditional tea houses, and beautiful cherry blossom gardens."
  },
  {
    id: 4,
    imgSrc:img4,
    destinationTitle: "Grand Canyon",
    locationName: "USA",
    location: "Arizona",
    grade: 4.6,
    fees: "$4120",
    description: "Experience the awe-inspiring beauty of the Grand Canyon. Hike along the rim, take a helicopter tour, or raft down the Colorado River."
  },
  {
    id: 5,
    imgSrc: img5,
    destinationTitle: "Venice",
    locationName: "Italy",
    location: "Venice",
    grade: 4.8,
    fees: "$3180",
    description: "Navigate the romantic canals of Venice on a gondola, explore historic architecture, and indulge in delicious Italian cuisine."
  },
  {
    id: 6,
    imgSrc: img6,
    destinationTitle: "Great Barrier Reef",
    locationName: "Australia",
    location: "Queensland",
    grade: 4.9,
    fees: "$3130",
    description: "Dive into the vibrant underwater world of the Great Barrier Reef. Snorkel or scuba dive to witness colorful coral formations and diverse marine life."
  },
  {
    id: 7,
    imgSrc: img7,
    destinationTitle: "Paris",
    locationName: "France",
    location: "Paris",
    grade: 4.7,
    fees: "$4250",
    description: "Experience the romance of Paris with its iconic landmarks such as the Eiffel Tower, Louvre Museum, and charming streets filled with cafes."
  },
  {
    id: 8,
    imgSrc: img8,
    destinationTitle: "Banff National Park",
    locationName: "Canada",
    location: "Alberta",
    grade: 4.8,
    fees: "$3560",
    description: "Discover the stunning landscapes of Banff National Park, featuring pristine lakes, snow-capped mountains, and abundant wildlife."
  },
  {
    id: 9,
    imgSrc: img9,
    destinationTitle: "Cappadocia",
    locationName: "Turkey",
    location: "Cappadocia",
    grade: 4.6,
    fees: "$2850",
    description: "Marvel at the unique fairy chimney rock formations and take a hot air balloon ride over the surreal landscapes of Cappadocia."
  },
  {
    id: 10,
    imgSrc: img10,
    destinationTitle: "Rio de Janeiro",
    locationName: "Brazil",
    location: "Rio de Janeiro",
    grade: 4.9,
    fees: "$3220",
    description: "Experience the vibrant energy of Rio de Janeiro with its famous beaches, Christ the Redeemer statue, and lively Carnival celebrations."
  }
]

const Main = () => {
  useEffect(() => {
    Aos.init({duration:1000});

 
  }, [])
  return (
    <div>
      <section className='main container section'>
        <div className="mainTitle ">
          <h3 className='title '>Most visited places</h3>
       </div>
       <div className="mainContent grid">
         {data.map(({id,imgSrc,destinationTitle,locationName,location,grade,fees,description})=>(
          <div data-aos='fade-up' className='singleContent' key={id}>
              <div className="imagesVisited">
                 <img src={imgSrc} alt={destinationTitle} />
              </div>
             <div className="mainContents">
               <h2 className='destinationTitleMain'>{destinationTitle}</h2>
               <div className="location flex">
                <div> <CiLocationOn className='icon'/></div>
              <div className='address flex'>
              <p className='locationMain '>{locationName},</p>
               <p className='location'>{location} </p>
               </div>
              </div>
             
               
              
                  <div className="fees flex">
                          <p className='gradeMain'> {grade} </p>
                          <p className='price'> {fees}</p>

                  </div>
                
                <p className='descriptionMain'>{description}</p>
              
            <button className='btn'><FaClipboardCheck  className='icon'/>Details</button>
          </div>
          
         </div>
         ))}
       </div>
      </section>
    </div>
  )
}

export default Main