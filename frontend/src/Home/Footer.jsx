import React from 'react';
import { 
  FaGraduationCap, 
  FaChevronRight, 
  FaCaretRight,
  FaFacebookF, 
  FaInstagram, 
  FaDribbble, 
  FaTwitter 
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full font-sans mt-auto">
      
      {/* ================= 1. MAIN FOOTER (4 COLUMNS) ================= */}
      <div className="bg-[#1e2228] pt-16 pb-12 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Column 1: Brand & CTA */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-lambda-primary flex items-center justify-center text-white text-xl">
                  <FaGraduationCap />
                </div>
                <div>
                  <span className="text-2xl font-normal tracking-tight text-white block leading-none">
                    lambda
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 block mt-1">
                    Premium Moodle Theme
                  </span>
                </div>
              </div>
              <a href="#buy" className="inline-flex items-center gap-2 text-lambda-primary hover:text-white font-bold text-sm transition-colors group">
                <FaCaretRight className="text-lg group-hover:translate-x-1 transition-transform" />
                BUY THEME LAMBDA NOW!
              </a>
            </div>

            {/* Column 2: Links */}
            <div>
              <h4 className="text-white text-lg font-medium mb-6">Links</h4>
              <ul className="space-y-3">
                {['Features', 'Components', 'H5P', 'Support', 'Documentation'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-white text-sm flex items-center gap-2 transition-colors">
                      <FaChevronRight className="text-[10px]" /> {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Popular Categories */}
            <div>
              <h4 className="text-white text-lg font-medium mb-6">Popular Categories</h4>
              <ul className="space-y-3">
                {['Society and Environment', 'Art and Media', 'Literacy', 'Physical Education', 'Science and Mathematics'].map((category) => (
                  <li key={category}>
                    <a href={`#${category.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-400 hover:text-white text-sm flex items-center gap-2 transition-colors">
                      <FaChevronRight className="text-[10px]" /> {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Latest Announcements */}
            <div>
              <h4 className="text-white text-lg font-medium mb-6">Latest announcements</h4>
              <div className="space-y-4">
                
                <div>
                  <div className="text-gray-400 text-xs mb-1">30 Dec, 12:43 <span className="ml-2">Admin User</span></div>
                  <a href="#post1" className="text-lambda-primary hover:underline text-sm font-medium">Suggestions for course design</a>
                </div>
                
                <div>
                  <div className="text-gray-400 text-xs mb-1">30 Dec, 12:39 <span className="ml-2">Admin User</span></div>
                  <a href="#post2" className="text-lambda-primary hover:underline text-sm font-medium">Mobile hybrid teaching sets</a>
                </div>
                
                <div>
                  <div className="text-gray-400 text-xs mb-1">30 Dec, 12:38 <span className="ml-2">Admin User</span></div>
                  <a href="#post3" className="text-lambda-primary hover:underline text-sm font-medium">The importance of digital skills</a>
                </div>

                <div className="pt-2">
                  <a href="#older" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Older topics ...
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ================= 2. BOTTOM COPYRIGHT BAR ================= */}
      <div className="bg-[#15181c] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Left Side: Copyright Text */}
          <div className="text-xs text-gray-500 space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <FaGraduationCap className="text-gray-400 text-sm" />
              <span className="text-gray-300">Lambda Premium Moodle Theme</span>
            </div>
            <p>(c) Copyright 2026 redPitThemes. All rights reserved.</p>
            <p><a href="#data" className="hover:text-white transition-colors underline">Data retention summary</a></p>
          </div>

          {/* Right Side: Social Icons */}
          <div className="flex items-center gap-3">
            <a href="#fb" className="w-8 h-8 rounded-full bg-[#3b5998] hover:opacity-80 flex items-center justify-center text-white transition-opacity">
              <FaFacebookF className="text-sm" />
            </a>
            <a href="#ig" className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] hover:opacity-80 flex items-center justify-center text-white transition-opacity">
              <FaInstagram className="text-sm" />
            </a>
            <a href="#dr" className="w-8 h-8 rounded-full bg-[#ea4c89] hover:opacity-80 flex items-center justify-center text-white transition-opacity">
              <FaDribbble className="text-sm" />
            </a>
            <a href="#tw" className="w-8 h-8 rounded-full bg-[#1da1f2] hover:opacity-80 flex items-center justify-center text-white transition-opacity">
              <FaTwitter className="text-sm" />
            </a>
          </div>

        </div>
      </div>

    </footer>
  );
}