import React from 'react'
import Header from './Header'
import '../Components/Home.css'
import bg from '../Components/images/bg.png'
import { BsArrowRight } from 'react-icons/bs';

const Home = () => {
  return (
    <div className='App'>
        <Header/>
        <div className="container">
            <div className="content-section">
              <h5><span>GALLERY</span> <BsArrowRight/> DESIGN TEMPLATES</h5>
              <h4>Design <br /> templates</h4>
              <p>Make your process to prioritize, <br /> manage, and approve design <br /> work feel as 
                smooth as the  <br /> creative flow itself.</p>
            </div>
          <div className="work-flow-img">
              <img src={bg} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Home