import img1 from './images/photo.jpg';
import img2 from './images/profile.jpg';

import "./style.css";

const Logout = () => {

  return (
    <>
      <h1>Welcome to Logout page.</h1>

      <div className="btn"><br/><br/>
        <form>
          Enter your email Id :<input type="email" placeholder="Enter your mail id" /><br /><br />
          Enter your password :<input type="password" placeholder="Enter your password" /><br /><br />
          If your are fill your data then click this checkbox...<input type="checkbox" /><br /><br />
          <button type="submit">Logout</button>
        </form>
      </div>
      <img className="image1" src={img1}/>
      <img className="image2" src={img2}/>



    </>


  );
}

export default Logout;