
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom';
import NotFount from './pages/NotFount';


import NavBar from './pages/NavBar';

function App() {
  return (
    <>
   <div>
    <NavBar />
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFount />} />
      </Routes>
   </div>
    
    </>
  );
}


export default App
