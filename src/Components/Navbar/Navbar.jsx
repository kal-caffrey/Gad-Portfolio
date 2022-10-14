import React from 'react';
import './Navbar.css'
import Toggle from '../Toggle/Toggle';
import {Link} from 'react-scroll'
import { themeContext } from '../../Context';
import {useContext} from  'react'


function Navbar() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
      <div id='nav' className="n-wrapper" style={{position:'fixed',width:'100%', top:'0px', left:"0px", display:'flex', }}>
        <div className="n-left">
            <div className="n-name" >Gad</div>
            <Toggle />

        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType:'none', }}>
                    <Link spy={true} to='Navbar' smooth={true} >
                    <li className='touch'>Home</li>
                    </Link>
                    <Link spy={true} to='Services' smooth={true}>
                    <li className='touch'>Services</li>
                    </Link>
                    <Link spy={true} to='Experience' smooth={true}>
                    <li className='touch'>Experience</li>
                    </Link>
                    <Link spy={true} to='Portfolio' smooth={true}>
                    <li className='touch'>Portfolio</li>
                    </Link>
                    <Link spy={true} to='Testimonials' smooth={true}>
                    <li className='touch'>Testimonials</li>
                    </Link>
                    
                </ul>
            </div>
            <Link spy={true} to='Contact' smooth={true}>
            <button className='button n-button'>Contact</button>
                    </Link>
            

        </div>
      </div>
   
  );
}

export default Navbar;
