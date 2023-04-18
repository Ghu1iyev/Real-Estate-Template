import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './Pages/Home.jsx'
import PropertyDetails from './Pages/PropertyDetails.jsx'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className='max-w-[1440px] mx-auto bg-white'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/property/:id' element={<PropertyDetails />}/>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
