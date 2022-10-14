import React from 'react';
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card';
import ResumeDocx from './Resume.docx'
import { themeContext } from '../../Context';
import {useContext} from  'react'


function Services() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className='services' id='Services'>
        {/* left-side */}
        <div className="awesome">
            <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
            <span>services</span>
            <span>
            I'm a full-stack web developer 
            <br/>
            who can handle both the backend and the frontend of your website.
            <br/>
            If you need good data analysis so that your business can make informed decisions,<br/> 
            I'm the one to contact.
            </span>
            <a href={ResumeDocx} download>
            <button className='button s-button'>Download CV</button>
            </a>
            
            <div className="blur  s-blur1" style={{background:"#ABF1FF94"}}>
                </div> 
        </div>
         {/* right-side */}
         <div className="cards">
            {/*first card*/}
            <div className='float4'>
                <Card 
                    emoji = {HeartEmoji}
                    heading = {'Data Analyst'}
                    detail = {"SQL, MySql, Python, Excel, Tableau, Power BI, Jupiter"}
                />
            </div>
                {/* second card*/}
            <div className='float5'style={{top:'12rem'}}>
                <Card 
                    emoji = {Glasses}
                    heading = {'Backend Developer'}
                    detail = {"Nodejs, Python, JavaScript, Django, Flask, Solidity, SQL, MongoDB"}
                />
            </div>
            
                {/*third card*/}
            <div className='float6' style={{top:'19rem'}}>
                <Card 
                    emoji = {Humble}
                    heading = {'Frontend Developer'}
                    detail = {"Html, Css, JavaScript, React, Bootstrap, Tailwind Css"}
                />
            </div>
            <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>

         </div>
      
    </div>
  );
}

export default Services;
