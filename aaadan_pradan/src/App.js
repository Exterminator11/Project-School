import './App.css';
import {Navbar,Wel,Footer,AboutUs} from './components/com';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import { Dash } from './components/dashboard';
import { Main } from './components/Bundle';
function App() {
  return (
      <div className="App">
        <Navbar/>
        <Wel/>
        <AboutUs/>
      </div>
  );
}

export default App;