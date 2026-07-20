import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import './App.css'

import Homepage from './pages/Home';
import CategorySection from './Category/CategorySection';
import Footer from './pages/Footer';
import Navbar from './layouts/navbar';
import ShopPage from './Category/ShopPage';
import WomenswearPage from './Category/WomenswearPage';
import MenswearPage from './Category/MenswearPage';
import KidsPage from './Category/KidsPage';
import AccessoriesPage from './Category/AccessoriesPage';
import CollectionPage from './Category/CollectionPage';

function App() {
  return (
    <Router>
       <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path ="/shop" element={<CategorySection />} />
        <Route path="/shop/all" element={<ShopPage/>} />
        <Route path="/shop/womenswear" element={<WomenswearPage />} />
          <Route path="/shop/menswear" element={<MenswearPage />} />
            <Route path="/shop/kids" element={<KidsPage />} />
              <Route path="/shop/accessories" element={<AccessoriesPage />} />
              <Route path="/collections" element={<CollectionPage />} />

      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
