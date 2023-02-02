import './App.css';
import { ContactUs } from './components/ContactUs';
import { Help } from './components/Help';
import { AboutUs, Home, Navbar } from './components/com';
import { Dash } from './components/dashboard';
import { InsDash } from './components/insdash';
import { Login } from './components/login';
import { Search } from './components/search';
import { Signup } from './components/signup';
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<AboutUs/>}></Route>
        <Route path="/help" element={<Help/>}></Route>
        <Route path="/contact" element={<ContactUs/>}></Route>
        <Route path="/search" element={<Search/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;