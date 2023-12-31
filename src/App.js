import Home from "./pages/Home";
import About from "./pages/About";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return(
    <>
  <Navbar />
    <div className='cotainer'>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  </>
  );
}

export default App