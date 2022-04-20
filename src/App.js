import Navbar from './Container/Header/Navbar'; 
import Services from './Container/Component/Services/Services';
import Homepage from './Container/Homepage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return <>
     <Router>
       <Navbar/>
       <Switch>
       <Route exact path="/">
            <Homepage />
        </Route>
      <Route exact path="/services">
      <Services/>
    </Route>
    </Switch>
    </Router>

   </>
}
export default App;
