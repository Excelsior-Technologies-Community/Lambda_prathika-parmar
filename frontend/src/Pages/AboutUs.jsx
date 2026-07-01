import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import Header from '../Home/Header';
import Footer from '../Home/Footer';

export default function AboutUs() {
  const team = [
    {
      id: 1,
      name: "David Olsson",
      role: "Co-Founder, Creative Director",
      bio: "You can introduce your site and your teachers here. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&q=80", // Placeholder for David
      socials: { fb: "#", ig: "#", x: "#" }
    },
    {
      id: 2,
      name: "Sara Lisbon",
      role: "Adobe Certified Expert",
      bio: "You can introduce your site and your teachers here. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80", // Placeholder for Sara
      socials: { fb: "#", ig: "#", x: "#" }
    }
  ];

  return (

    
    <section className="py-16 md:py-24 bg-white">

        
    
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= 1. PAGE HEADER ================= */}
        <div className="text-center mb-16 space-y-4">
          <h4 className="text-lambda-primary uppercase tracking-widest text-sm font-semibold">
            About Us
          </h4>
          <h2 className="text-4xl md:text-5xl font-light text-slate-800">
            Who We Are
          </h2>
          <p className="text-lg text-gray-500 font-light">
            You can introduce your site and your teachers here.
          </p>
        </div>

        {/* ================= 2. TEAM MEMBERS LIST ================= */}
        <div className="space-y-12">
          {team.map((member, index) => (
            <div 
              key={member.id} 
              // Adds a top border to every item except the very first one to match the video
              className={`flex flex-col md:flex-row gap-8 items-center md:items-start ${
                index !== 0 ? 'border-t border-gray-200 pt-12' : ''
              }`}
            >
              
              {/* Profile Image */}
              <div className="w-48 h-48 rounded-full overflow-hidden shrink-0 shadow-sm border border-gray-100">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover" 
                />
              </div>

              {/* Text Content */}
              <div className="text-center md:text-left flex-grow pt-2">
                <h3 className="text-2xl font-normal text-slate-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-500 mb-4 font-medium">
                  {member.role}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {member.bio}
                </p>

                {/* Social Icons */}
                <div className="flex items-center justify-center md:justify-start gap-3">
                  {/* Facebook */}
                  <a href={member.socials.fb} className="w-9 h-9 rounded-full bg-[#3b5998] hover:opacity-80 flex items-center justify-center text-white transition-opacity shadow-sm">
                    <FaFacebookF className="text-sm" />
                  </a>
                  {/* Instagram */}
                  <a href={member.socials.ig} className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] hover:opacity-80 flex items-center justify-center text-white transition-opacity shadow-sm">
                    <FaInstagram className="text-sm" />
                  </a>
                  {/* X (Twitter) */}
                  <a href={member.socials.x} className="w-9 h-9 rounded-full bg-black hover:opacity-80 flex items-center justify-center text-white transition-opacity shadow-sm">
                    {/* Using a bold text 'X' to match the specific icon in the video */}
                    <span className="font-bold text-sm font-sans">X</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>


  );
}