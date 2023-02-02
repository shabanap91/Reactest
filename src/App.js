
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom" ;
import Mymenu from "./Mymenu";
import Manegement from "./Manegement";
import Dashboard from "./Dashboard";
import Settings from "./Settings";
import Student from "./Student";
import User from "./User";
import Logout from "./Logout";
import Theme from "./Theme";
const App=()=>
{
  return (
    <>    
    <Router>
      <Mymenu />
        <Routes>
              <Route path="/Dashboard" element={ <Dashboard /> } />
              <Route path="/Manegement" element={ <Manegement /> } />
              <Route path="/Student" element={ <Student /> } />
              <Route path="/Settings" element={ <Settings /> } />
              <Route path="/User" element={ <User /> } />
              <Route path="/Logout" element={ <Logout /> } />
              <Route path="/Theme" element={ <Theme /> } />

        </Routes>
    </Router>

  
    </>
  );
}
export default App;
