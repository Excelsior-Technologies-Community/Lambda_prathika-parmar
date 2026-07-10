import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function FAQPage() {
  // Pehla item (index 0) default roop se open rahega
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      title: "#01 - What is Lorem Ipsum?",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      title: "#02 - Where does it come from?",
      content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
    },
    {
      title: "#03 - Why do we use it?",
      content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'."
    },
    {
      title: "#04 - Where can I get some?",
      content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    }
  ];

  const toggleFAQ = (index) => {
    // Agar same index click ho toh band (null) kar do, warna naya open karo
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* === Top Illustration Section === */}
        <div className="flex justify-center mb-12">
          {/* Yahan aap apna original logo/image laga sakte hain, abhi ek illustration use kiya hai */}
          <img 
            src="https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&w=600&q=80" 
            alt="FAQ Question Mark" 
            className="w-full max-w-sm h-64 object-cover rounded-md shadow-sm opacity-90"
          />
        </div>

        {/* === Accordion Section === */}
        <div className="space-y-2">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div key={index} className="flex flex-col">
                {/* Accordion Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center bg-[#4a5359] text-white px-5 py-4 text-left font-medium hover:bg-[#3d454a] transition-colors duration-200"
                >
                  <span className="tracking-wide text-sm sm:text-base">{faq.title}</span>
                  {isOpen ? (
                    <FaChevronUp className="text-sm font-light text-gray-300" />
                  ) : (
                    <FaChevronDown className="text-sm font-light text-gray-300" />
                  )}
                </button>
                
                {/* Accordion Content (with smooth max-height transition) */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100 border border-t-0 border-gray-200' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 text-gray-600 font-light leading-relaxed bg-white text-sm sm:text-base">
                    {faq.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}