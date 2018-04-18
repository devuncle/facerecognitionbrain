import React from 'react';
import brain from './brain.png';
import Tilt from 'react-tilt';
import './Logo.css';
 


const Logo = () => {
    return (
        <div className='ma4 mt0'>
        <Tilt className="Tilt br2 shadow-2" options={{ max : 45 }} style={{ height: 150, width: 150 }} >
            <div className="Tilt-inner"> <img src={brain} alt="brain" srcset=""/> </div>
        </Tilt>

        </div>
    );
}

export default Logo;