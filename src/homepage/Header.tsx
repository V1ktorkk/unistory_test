import React from 'react';
import './Header.css';
import ConnectionButton from "./ConnectionButton";
import {texts} from "../texts/texts";



function Header() {
    return (
        <React.Fragment>
           <div className='header_main'>
               <div className='logo'> {texts.logo} </div>
               <ConnectionButton/>
           </div>
        </React.Fragment>
    );
}

export default Header;
