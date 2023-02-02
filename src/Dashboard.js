// import { Link } from 'react-router-dom';
import "./style.css";
import img1 from './images/photo.jpg';
import img2 from './images/profile.jpg';
const Dashboard = () => {
    return (
        <>
            <div className='container'>
                <h2>Welcome to my dashboard page!</h2>
            </div>
            <div class="dropdown">
                <button class="dropbtn">Dropdown</button>
                <div class="dropdown-content">
                 <img className="image1" src={img1}/>
                 <img className="image2" src={img2}/>
                </div>
                
            </div>
        </>
    );
}


export default Dashboard;