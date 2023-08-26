import Home from "./pages/Home";
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
        <Route path='Home' element={<Home />} />
      </Routes>

    </div>
  </>
  );
}

export default App