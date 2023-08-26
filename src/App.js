import Home from "./pages/Home";
import HomeAlone from "./pages/HomeAlone";
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
        <Route path='home' element={<Home />} />
        <Route path='home-alone' element={<HomeAlone />} />
      </Routes>
    </div>

    </>

  );
}

export default App