// import { Link } from 'react-router-dom';
import img1 from './images/photo.jpg';
import img2 from './images/profile.jpg';

import "./style.css";

const Student =()=>{
    return(
     <>
        <div className='container'>
        <h2>Welcome to my dashboard page!</h2>
        </div>
        <img className="image1" src={img1}/>
        <img className="image2" src={img2}/>


     </>    
    );
}

export default Student;