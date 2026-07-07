import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Header from './Home/Header';
import Footer from './Home/Footer';
import FeaturesPage from './Pages/FeaturePage';
import ImageGallery from './Pages/ImageGallery';
import CourseCatalog from './components/CourseCatalog';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import AdminDashboard from './Pages/AdminDashboard';

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
      <Route path="/courses" element={<CourseCatalog />} />
      <Route path='/image' element={<ImageGallery />} /> 
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/admin' element={<AdminDashboard />} />
      </Routes>
        </main>

        <Footer />
      

      </div>
      

      

    </Router>
    
    </>
    
  );
}

export default App
