import { useEffect, useState } from 'react';
import img1 from './images/photo.jpg';
import img2 from './images/profile.jpg';
import "./style.css";

// import {useEffect, useState} from 'react';

const Theme =()=>{
    return(
     <>
        <img className="image1" src={img1}/>
        <img className="image2" src={img2}/>
        <a href='#' className='btn1' onClick={()=> toggleTheme()}>Toggle Theme</a>
     </>    
    );
}

export default Theme;