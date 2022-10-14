import React from 'react';
import './Work.css'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Hub from '../../img/hub.jpg'
import Havilah from '../../img/havilah.jpg'
import Glance from '../../img/glance.jpg'
import { themeContext } from '../../Context';
import {useContext} from  'react'

function Work() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className='works'>
        <div className="awesome">
            <span style={{color: darkMode? 'white': ''}}>Work for All these</span>
            <span>Brands & Clients</span>
            <span>
                I've built dynamic websites for a variety of companies and brands 
                <br/>
                using both web 3.0 and 2.0 technologies, 
                <br/>
                and I've also helped organize and analyze data.
               
            </span>
            
            <button className='button s-button'><a href='http://wa.me/2348137033213'>Hire me</a></button>
 
            
            <div className="blur  s-blur1" style={{background:"#ABF1FF94"}}>
                </div> 
        </div>

        {/* right-side */}
        <div className="w-right">
            <div className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={Upwork} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Fiverr} alt="" />
                </div>
                <div className="w-secCircle">
                    <img className='smallImg' src={Hub} alt="" />
                </div>
                <div className="w-secCircle">
                    <img  className='smallImg' src={Havilah} alt="" />
                </div>
                <div className="w-secCircle">
                    <img  className='smallImg' src={Glance} alt="" />
                </div>
            </div>
            {/* backgroud Circles */}
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
        </div>
      
    </div>
  );
}

export default Work;
