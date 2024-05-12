import './index.css';
import { FaSearch, FaRegUser, FaShoppingBag } from "react-icons/fa";
import {CiHeart} from 'react-icons/ci';
import { RiEnglishInput } from "react-icons/ri";
import logo from '../../Vector@2x.jpg'
import { useState } from 'react';

const Navbar = () => {
    const [isHere, notThere] = useState(true)
  
    const isinputhere = () => {
        notThere(!isHere)
        }
    
    
    return (
        <div>
            <div className='nav-bar-main-container '>
                <div className='logo-container'>
                    <img alt='log' src={logo} className='logo-size' />
                </div>
                <div>
                    <h4 className='logo-heading'>LOGO</h4>
                </div>
                <div>
                    <ul className='list-order'>
                        <button className='button-searc-container' onClick={isinputhere}><li><FaSearch className='search-icons'/></li></button>
                        <li><CiHeart className='search-icons'/></li>
                        <li><FaShoppingBag className='search-icons'/></li>
                        <li><FaRegUser className='search-icons'/></li>
                        <li><RiEnglishInput className='search-icons'/></li>
                    </ul>
                    <div>
                        <input className={`input-isther ${isHere ? 'input-is-not-there' : ''}`} type='text' placeholder='Search'/>
                    </div>
                </div>
            </div>
            <div className='list-order-container-two'>
                    <ul className='list-order'>
                        <li className='list-order-two'>SHOP</li>
                        <li className='list-order-two'>SKILLS</li>
                        <li className='list-order-two'>STORIES</li>
                        <li className='list-order-two'>STORIES</li>
                        <li className='list-order-two'>ABOUT</li>
                        <li className='list-order-two'>CONTACT US</li>
                    </ul>
            </div>
        </div>
    )
}

export default Navbar