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
import ContactUs from './Pages/ContactUsPage';
import FAQPage from './Pages/FAQPage';
import DocumentationPage from './Pages/DocumentationPage';
import ComponentPage from './Pages/ComponentPage';

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
      <Route path='/contact' element={<ContactUs />} />
      <Route path='/faq' element={<FAQPage />} />
      <Route path='/docs' element={<DocumentationPage />} />
      <Route path='/components' element={<ComponentPage/>} />
      </Routes>
        </main>

        <Footer />
      

      </div>
      

      

    </Router>
    
    </>
    
  );
}

export default App
