import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import './App.css'

import Homepage from './pages/Home';
import CategorySection from './Category/CategorySection';
import Footer from './pages/Footer';
import Navbar from './layouts/navbar';
import ShopPage from './Category/ShopPage';

function App() {
  return (
    <Router>
       <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path ="/shop" element={<CategorySection />} />
        <Route path="/collections" element={<ShopPage/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
