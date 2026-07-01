import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Header from './Home/Header';
import Footer from './Home/Footer';
import FeaturesPage from './Pages/FeaturePage';
import ImageGallery from './Pages/ImageGallery';

function App() {

  return (

    <>
    <Router>
      <div>
        <Header />
        <main className='flex-grow w-full'>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/features" element={<FeaturesPage />} />
      <Route path='/image' element={<ImageGallery />} /> 
      </Routes>
        </main>

        <Footer />
      

      </div>
      

      

    </Router>
    
    </>
    
  );
}

export default App
