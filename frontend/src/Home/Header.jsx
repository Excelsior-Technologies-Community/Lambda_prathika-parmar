import React, { useState } from 'react';
// Importing standard icons from react-icons
import { FaGraduationCap, FaUser, FaLock, FaArrowRight, FaBars, FaTimes, FaHome, FaSearch, FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const toggleMobileDropdown = (menu) => {
    setMobileDropdown(mobileDropdown === menu ? null : menu);
  };

  return (
    <header className="w-full shadow-sm">
      {/* ================= 1. TOP BRAND & ALWAYS-VISIBLE LOGIN BAR ================= */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-4 lg:h-24 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          
          {/* Top Row on Mobile / Left on Desktop: Logo + Hamburger */}
          <div className="flex items-center justify-between w-full lg:w-auto">
            <a href="/" className="flex items-center gap-3.5 group text-decoration-none">
                              <img src="https://lambda-demo-01.redpithemes.com/pluginfile.php/1/core_admin/logo/0x200/1758302184/logo-site-01.png" alt="" />

            </a>

            {/* Mobile Hamburger Button (Only toggles the navigation links now) */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>

          {/* Login Form: Visible on BOTH Mobile and Desktop */}
          <div className="flex flex-col items-stretch lg:items-end gap-1.5 w-full lg:w-auto pt-2 lg:pt-0 border-t lg:border-t-0 border-gray-100">
            <form className="flex flex-wrap sm:flex-nowrap items-center gap-2" onSubmit={(e) => e.preventDefault()}>
              
              {/* Username Input */}
              <div className="flex items-center border border-gray-300 rounded bg-gray-50 focus-within:bg-white focus-within:border-lambda-primary transition overflow-hidden h-9 flex-1 sm:w-36">
                <span className="px-2.5 bg-gray-100 border-r border-gray-300 text-gray-500 h-full flex items-center">
                  <FaUser className="text-xs" />
                </span>
                <input type="text" placeholder="Username" className="px-3 text-sm text-gray-700 bg-transparent focus:outline-none w-full" />
              </div>

              {/* Password Input */}
              <div className="flex items-center border border-gray-300 rounded bg-gray-50 focus-within:bg-white focus-within:border-lambda-primary transition overflow-hidden h-9 flex-1 sm:w-36">
                <span className="px-2.5 bg-gray-100 border-r border-gray-300 text-gray-500 h-full flex items-center">
                  <FaLock className="text-xs" />
                </span>
                <input type="password" placeholder="Password" autoComplete='current-password' className="px-3 text-sm text-gray-700 bg-transparent focus:outline-none w-full" />
              </div>

              {/* Submit Button */}
              <button type="submit" className="h-9 px-4 bg-slate-600 hover:bg-lambda-primary text-white font-bold rounded transition flex items-center justify-center cursor-pointer w-full sm:w-auto mt-1 sm:mt-0">
                <FaArrowRight className="text-sm" />
              </button>
            </form>

            <a href="#forgot" className="text-xs font-medium text-lambda-primary hover:underline text-right">
              Forgotten your username or password?
            </a>
          </div>

        </div>
      </div>

      {/* ================= 2. DESKTOP NAVIGATION BAR ================= */}
      <nav className="bg-lambda-dark text-gray-200 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-12">
          
          <div className="flex items-center h-full">
            {/* Active Home Button */}
            <a href="/" className="h-full px-5 bg-lambda-primary hover:bg-lambda-primary-hover text-white flex items-center justify-center transition">
              <FaHome className="text-lg" />
            </a>

            {/* Dropdown 1: Courses */}
            <div className="relative group h-full flex items-center">
              <button className="px-4 h-full text-sm font-medium hover:text-white hover:bg-black/20 flex items-center gap-1.5 cursor-pointer">
                Courses <FaChevronDown className="text-[10px] opacity-70" />
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block w-56 bg-white text-gray-800 shadow-xl rounded-b border-t-2 border-lambda-primary py-2 z-50">
                <a href="/courses" className="block px-4 py-2 text-sm hover:bg-slate-100 hover:text-lambda-primary font-medium">All courses</a>
                <a href="#sample" className="block px-4 py-2 text-sm hover:bg-slate-100 hover:text-lambda-primary font-medium">Sample course</a>
                <a href="#tiles" className="block px-4 py-2 text-sm hover:bg-slate-100 hover:text-lambda-primary font-medium">Tiles course format</a>
                <a href="#butons" className="block px-4 py-2 text-sm hover:bg-slate-100 hover:text-lambda-primary font-medium">Buttons course format</a>
                <a href="#coursedetails" className="block px-4 py-2 text-sm hover:bg-slate-100 hover:text-lambda-primary font-medium">Course details</a>
              </div>
            </div>

            {/* Dropdown 2: Features */}
            <div className="relative group h-full flex items-center">
              <button className="px-4 h-full text-sm font-medium hover:text-white hover:bg-black/20 flex items-center gap-1.5 cursor-pointer">
                Features <FaChevronDown className="text-[10px] opacity-70" />
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block w-56 bg-white text-gray-800 shadow-xl rounded-b border-t-2 border-lambda-primary py-2 z-50">
                <a href="/features" className="block px-4 py-2 text-sm hover:bg-slate-100 hover:text-lambda-primary font-medium">Typography</a>
                <a href="#core" className="block px-4 py-2 text-sm hover:bg-slate-100 hover:text-lambda-primary font-medium">Theme Core Features</a>
                <a href="#flexibalLayout" className="block px-4 py-2 text-sm hover:bg-slate-100 hover:text-lambda-primary font-medium">Flexibal Layout</a>
                <a href="#responssiveDesign" className="block px-4 py-2 text-sm hover:bg-slate-100 hover:text-lambda-primary font-medium">Responsive Design</a>
                <a href="#multilanguage" className="block px-4 py-2 text-sm hover:bg-slate-100 hover:text-lambda-primary font-medium">Multi-language Support</a>
                <a href="#builtincomponents" className="block px-4 py-2 text-sm hover:bg-slate-100 hover:text-lambda-primary font-medium">Built-in Components</a>
              </div>
            </div>

            {/* Dropdown 3: Pages */}
            <div className="relative group h-full flex items-center">
              <button className="px-4 h-full text-sm font-medium hover:text-white hover:bg-black/20 flex items-center gap-1.5 cursor-pointer">
                Pages <FaChevronDown className="text-[10px] opacity-70" />
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block w-56 bg-white text-gray-800 shadow-xl rounded-b border-t-2 border-lambda-primary py-2 z-50">
                <a href="/about" className="block px-4 py-2 text-sm hover:bg-slate-100 hover:text-lambda-primary font-medium">About Us</a>
                <a href="#contactus" className="block px-4 py-2 text-sm hover:bg-slate-100 hover:text-lambda-primary font-medium">Contact Us</a>
                <a href="/image" className="block px-4 py-2 text-sm hover:bg-slate-100 hover:text-lambda-primary font-medium">Image Gallery</a>
                <a href="#faq" className="block px-4 py-2 text-sm hover:bg-slate-100 hover:text-lambda-primary font-medium">FAQ</a>
                <a href="#loginpage" className="block px-4 py-2 text-sm hover:bg-slate-100 hover:text-lambda-primary font-medium">Login Page</a>
              </div>
            </div>

            {/* Direct Links */}
            <a href="#docs" className="px-4 h-full text-sm font-medium hover:text-white hover:bg-black/20 flex items-center">Documentation</a>
          </div>

          {/* Search Button */}
          <button className="h-full px-4 hover:text-white hover:bg-black/20 flex items-center justify-center cursor-pointer">
            <FaSearch className="text-sm" />
          </button>

        </div>
      </nav>

      {/* ================= 3. MOBILE COLLAPSIBLE DRAWER (MENU LINKS ONLY) ================= */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-lambda-dark text-gray-200 border-t border-gray-700">
          <div className="px-4 py-4 space-y-3">
            
            <a href="/" className="flex items-center gap-2 py-2 font-medium text-lambda-primary border-b border-slate-700">
              <FaHome /> Home
            </a>

            {/* Accordion 1: Courses */}
            <div>
              <button onClick={() => toggleMobileDropdown('courses')} className="w-full flex justify-between items-center py-2 font-medium">
                <span>Courses</span>
                {mobileDropdown === 'courses' ? <FaChevronUp className="text-xs" /> : <FaChevronDown className="text-xs" />}
              </button>
              {mobileDropdown === 'courses' && (
                <div className="pl-4 py-2 space-y-2 border-l border-slate-700 mt-1 text-sm text-gray-400">
                  <a href="#all" className="block hover:text-white">All courses</a>
                  <a href="#sample" className="block hover:text-white">Sample course</a>
                  <a href="#tiles" className="block hover:text-white">Tiles course format</a>
                </div>
              )}
            </div>

            {/* Accordion 2: Features */}
            <div>
              <button onClick={() => toggleMobileDropdown('features')} className="w-full flex justify-between items-center py-2 font-medium">
                <span>Features</span>
                {mobileDropdown === 'features' ? <FaChevronUp className="text-xs" /> : <FaChevronDown className="text-xs" />}
              </button>
              {mobileDropdown === 'features' && (
                <div className="pl-4 py-2 space-y-2 border-l border-slate-700 mt-1 text-sm text-gray-400">
                  <a href="#type" className="block hover:text-white">Typography</a>
                  <a href="#core" className="block hover:text-white">Theme Core Features</a>
                </div>
              )}
            </div>

            <a href="#pages" className="block py-2 font-medium hover:text-white">Pages</a>
            <a href="#docs" className="block py-2 font-medium hover:text-white">Documentation</a>
            
          </div>
        </div>
      )}
    </header>
  );
}