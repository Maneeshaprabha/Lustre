import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import ProductDetailPage from './Category/ProductDetailPage';
// Import the PDP

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        
        {/* Navbar stays at the top */}
        <Navbar />

        {/* flex-grow ensures the footer stays at the bottom of short pages */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/shop" element={<CategorySection />} />
            <Route path="/shop/all" element={<ShopPage />} />
            <Route path="/shop/womenswear" element={<WomenswearPage />} />
            <Route path="/shop/menswear" element={<MenswearPage />} />
            <Route path="/shop/kids" element={<KidsPage />} />
            <Route path="/shop/accessories" element={<AccessoriesPage />} />
            <Route path="/collections" element={<CollectionPage />} />
            
            {/* Dynamic route for the Product Detail Page */}
            <Route path="/product/:id" element={<ProductDetailPage />} />
          </Routes>
        </main>

        {/* Footer stays at the bottom */}

        
             <Footer/>
        
      </div>
    </Router>
  )
}

export default App
