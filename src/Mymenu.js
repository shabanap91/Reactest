import { Link } from 'react-router-dom';
import "./style.css";
const Mymenu = () => {
    return (
        <>
        
            <ul>
                <li><Link to="/Dashboard" > Dashboard </Link></li>
                <li> <Link to="/Manegement">Orgainization Manegement</Link></li>
                <li> <Link to="/USer">User Manegement</Link></li>
                <li> <Link to="/Student">Student Manegement</Link></li>
                <li> <Link to="/Settings">Settings</Link></li>
                <li><button><Link to="/Logout" > Logout </Link></button></li>
                <li><button><Link to="/Theme" > Theme Change </Link></button></li>

            </ul>
      {/* <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" ></img> */}


            
        </>
    );

}


export default Mymenu;

