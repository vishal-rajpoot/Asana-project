import React from 'react'
import logo from '../Components/images/logo.png'
import '../Components/Header.css'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { VscGlobe} from 'react-icons/vsc';
import { Link } from "react-router-dom";


const Header = () => {

    const handleClick =() => {
        alert('Click button is working')
    }
  return (
    <>
        <nav className='main-nav'>
            <div className="logo">
            <Link to="/Asana-project"><img src={logo} alt="" className='logoImg'/></Link>
            </div>
            <div className="menu-link">
                <ul>
                    <li>
                        <Link to="/Asana-project/redirectedpage">Why asana? <MdOutlineKeyboardArrowDown/></Link>
                    </li>
                    <li>
                        <Link to="/Asana-project/redirectedpage">Features <MdOutlineKeyboardArrowDown/></Link>
                    </li>
                    <li>
                        <Link to="/Asana-project/redirectedpage">Resources <MdOutlineKeyboardArrowDown/></Link>
                    </li>
                    <li>
                        <Link to="/Asana-project/redirectedpage">Enterprise</Link>
                    </li>
                    <li>
                        <Link to="/Asana-project/redirectedpage">Pricing</Link>
                    </li>
                </ul>
            </div>
            <div className="external-links">
                <ul>
                    <li>
                        <Link to="/Asana-project/redirectedpage"> <VscGlobe size={25}/></Link>
                    </li>
                    <li>
                        <Link to="/Asana-project/redirectedpage">Contact Sales</Link>
                    </li>
                    <li>
                        <Link to="/Asana-project/redirectedpage">Login</Link>
                    </li>
                    <li>
                        <button className='btn' onClick={handleClick}>Get Started</button>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Header