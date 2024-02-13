import logo from './logo.svg';
import './App.css';
import { Home } from './components/home';
import { AboutMe } from './components/AboutMe';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <div className="App">
     <Router>
        <div>
          <Routes> 
            <Route exact path = "/" Component = {Home}/> 
            <Route path = "/" Component = {AboutMe}/>
            <Route path = "*" Component = {Home}/> 
            {/* star redirects to not found page */}
          </Routes>
        </div>
     </Router>
    </div>
  );
}

export default App;
