import React from 'react';
import './reactcashews.css';

import logo_icon from '../Assets/image1.png';
import cashew_icon from '../Assets/cashews.jpg';
import fb_icon from '../Assets/fb.jpg';
import insta_icon from '../Assets/insta.jpg';
import pin_icon from '../Assets/pin.jpg';
import twitter_icon from '../Assets/twit.jpg';

const reactcashews=()=>{
    return(
   
        <div className='Container'>
            <div className='Navbar'>
                <div className='Logo'>
                    <img src={logo_icon} alt=""/>
                </div>
                <div className='Home'>LIFE IS ALWAYS BETTER WITH HEALTHY AND FLAVOURED CASHEWS BY YOUR SIDE</div>   
            </div>
           
            <div className='Image1'>
                <img src={cashew_icon} alt=""/>
            </div>
           
            <div className='login'>
                    <h4>SM CASHEWS</h4>
                    <div className="tab1"><p>Login</p></div>
                    <div className="tab2"><p>Sign up</p></div>
                
            </div>
            <div class="login2">
                <h2 class="title">
                <span class="title-word title-word-1">Wanna </span>
                <span class="title-word title-word-2">Try </span>
                <span class="title-word title-word-3">the </span>
                <span class="title-word title-word-4">Best?</span>
                </h2>
            </div>
            <div class="footer">
                <div className='company'>
                    COMPANY
                    <ul className='a'>
                     <li>About us</li>
                     <li>Team</li>
                    <li>Career</li>
                    </ul>
                </div>
                <div className='contact'>
                    CONTACT
                    <ul class="b">
                            <li>+91-9489696937</li>
                            <li>smcashews74@gmail.com</li>
                    </ul>
                </div>
                <div className='learnmore'>
                    <p>LEARN MORE</p>
                    <ul class="b">
                        <li> Terms & Conditions</li>
                        <li> Refund & Cancellation</li>
                        <li> Privacy Policy</li>
                        <li>Cookie Policy</li>
                    </ul>
                </div>
                <div className='sociallinks'>
                    SOCIAL LINKS
                    <a  class="pin" href="https://in.pinterest.com/">
                         <img src={pin_icon} alt=""/>
                    </a>
                    <a  class="insta" href="https://in.pinterest.com/">
                         <img src={insta_icon} alt=""/>
                    </a>
                    <a  class="twitter" href="https://in.pinterest.com/">
                         <img src={twitter_icon} alt=""/>
                    </a>
                    <a  class="fb" href="https://in.pinterest.com/">
                         <img src={fb_icon} alt=""/>
                    </a>
                </div>
            </div>

           

        </div>
    )

}
export default reactcashews