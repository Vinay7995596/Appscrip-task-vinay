import './index.css'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import image1 from '../../Group 136195.svg';
import image2 from '../../Group 136190.svg';
import image3 from '../../Group 136192.svg';
import image4 from '../../Group 136193.svg';
import image5 from '../../Rectangle 29406.svg';
import coutry from '../../United States of America (US).svg'
const Footer = () => {
    return (
        <div>
            <div className="main-footer-section">
                <div className='footer-section-one'>
                    <div>
                        <h5 className='footer-hading'>Be the first to know</h5>
                        <p className='footer-section-descreption'>Sign up for updates from mettā muse</p>
                        <div>
                            <input className='input-section-footer' type='email' placeholder='Enter your e-mail' />
                            <button className='button-container-footer'>SUBSCRIBE</button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h5 className='footer-hading'>CONTACT US</h5>
                            <ul>
                                <li className='footer-section-descreption list-order-section-footer'>+44 221 133 5360</li>
                                <li className='footer-section-descreption list-order-section-footer'>customercare@mettamuse.com</li>
                            </ul>
                        </div>
                        <div>
                            <h5 className='footer-hading'>Currency</h5>
                            <ul>
                                <li className='footer-section-descreption list-order-section-footer'>
                                    <div>
                                        <img src={coutry} alt='usa'/>
                                        <span className='footer-section-descreption'>USD</span>
                                    </div>
                                </li>
                                <li className='footer-section-descreption list-order-section-footer2'>Transactions will be completed in Euros and a currency reference is available on hover.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* secons-section */}
                <hr />
                <div className='footer-section-one'>
                    <div>
                        <h5 className='footer-hading'>mettā muse</h5>
                        <ul>
                            <li className='footer-section-descreption list-order-section-footer'>About</li>
                            <li className='footer-section-descreption list-order-section-footer'>Stories</li>
                            <li className='footer-section-descreption list-order-section-footer'>Artisans</li>
                            <li className='footer-section-descreption list-order-section-footer'>Boutiques</li>
                            <li className='footer-section-descreption list-order-section-footer'>Contact Us</li>
                            <li className='footer-section-descreption list-order-section-footer'>EU Compliances Docs</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className='footer-hading'>Quick Links</h5>
                        <ul>
                            <li className='footer-section-descreption list-order-section-footer'>Order & Shipping</li>
                            <li className='footer-section-descreption list-order-section-footer'>Join/Login as a Seller</li>
                            <li className='footer-section-descreption list-order-section-footer'>Payment & Pricing</li>
                            <li className='footer-section-descreption list-order-section-footer'>Returns & Refunds</li>
                            <li className='footer-section-descreption list-order-section-footer'>FAQs</li>
                            <li className='footer-section-descreption list-order-section-footer'>Privacy Policy</li>
                            <li className='footer-section-descreption list-order-section-footer'>Terms & Conditions</li>
                        </ul>
                    </div>
                    <div>
                    <div>
                    <h5 className='footer-hading'>Follow Us</h5>
                    <div className='icons-container-footer'>
                        <FaInstagram className='icons-footer'/>
                        <FaLinkedin className='icons-footer'/>
                    </div>
                    </div>
                    <div>
                    <h5 className='footer-hading'>mettā muse Accepts</h5>
                    <div>
                        <img className='images-container-footer' src={image1} alt='imag1'/>
                        <img className='images-container-footer' src={image2} alt='imag2'/>
                        <img className='images-container-footer' src={image3} alt='imag3'/>
                        <img className='images-container-footer' src={image4} alt='imag4'/>
                        <img className='images-container-footer' src={image5} alt='image5'/>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer