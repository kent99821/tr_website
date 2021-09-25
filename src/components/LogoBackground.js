import React from 'react';
import logo from '../assets/logo.gif';
import {Image} from 'antd';
import '../assets/css/LogoBackground.css';
function LogoBackground(){
    return(
        <div className="logoBack">
        <Image className="logoBack" src={logo}  preview={false}/>
        </div>
    )
}
export default LogoBackground;
