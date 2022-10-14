import React from 'react';
import './Footer.css';
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Wave from '../../img/wave.png'

function Footer() {
  return (
    <div className='footer'>
     <img src={Wave} alt="" style={{width: '100%'}}/>
     <div className="f-content">
        <span>gadreuben76@gmail.com</span>
        <div className="f-icons">
            <a href='https://instagram.com/kalcaffrey/?hl=en'><Insta color='white' size='3rem' /></a>
            <Facebook color='white' size='3rem' />
            <a href='https://github.com/kal-caffrey'><Github color='white' size='3rem' /></a>
        </div>
     </div>
    </div>
  );
}

export default Footer;
