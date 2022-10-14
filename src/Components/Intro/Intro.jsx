import React from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import Linkedln from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesemoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from '../../Context';
import {useContext} from  'react'





function Intro() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;


  return (
    <div className='intro' id='Navbar'>
        <div className="i-left">
            <div className="i-name">
                <span style={{color: darkMode? 'white': ''}}>Hy! I Am</span>
                <span>Gad Reuben</span>
                <span>I am a programmer, data analyst, 
                    and full stack web developer with extensive experience in web design and development,
                     as well as producing high-quality work.
                </span>
            </div>
            <button className="button i-button" ><a href='http://wa.me/2348137033213'>Hire me</a></button>
            
            <div className="i-icons">
                <a href='https://github.com/kal-caffrey' > 
                <img src={Github} alt="" />
                </a>
                <a href='https://www.linkedin.com/mwlite/in/gad-reuben-93a478233' > 
                <img src={Linkedln} alt="" />
                </a>
                <a href='https://instagram.com/kalcaffrey/?hl=en' > 
                <img src={Instagram} alt="" />
                </a>
                
            </div>
        </div>
        
        <div className="i-right">
       
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img className='boy'src={boy} alt="" />
                <img className='float3' src={glassesemoji} alt="" />
                <div className='float1 floating-div' >
                    <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
                </div>
                <div className='float2 floating-div'>
                    <FloatingDiv image={thumbup} txt1="Data" txt2="Analyst" />
                </div>


                {/* blur div */} 
                <div className="blur" style={{background:"rgb(238 210 255)"}}>
                </div> 
                <div className="blur" style={{background:"#c1f5ff", 
                top:"17rem",
                width:"21rem",
                height:"11rem",
                left:"-9rem"}}>
                </div> 
        </div>
      
    </div>
  );
}

export default Intro;
