import React from 'react';
import { FaCog, FaDesktop, FaGlobe, FaPuzzlePiece, FaCaretRight } from 'react-icons/fa';

export default function FeaturesGrid() {
  const features = [
    {
      icon: <FaCog className="text-3xl" />,
      title: "Powerful Admin Settings",
      desc: "Quick and easy customization: Control style and design of your Moodle site with Lambda.",
    },
    {
      icon: <FaDesktop className="text-3xl" />,
      title: "Flexible Layout",
      desc: "Lambda gives you the flexibility to set the preferred layout for your e-learning site.",
    },
    {
      icon: <FaGlobe className="text-3xl" />,
      title: "Multilanguage",
      desc: "100+ built-in language packs: Teach in your native language or take your courses globally.",
    },
    {
      icon: <FaPuzzlePiece className="text-3xl" />,
      title: "Built-in Components",
      desc: "Enhance your courses and create your own content pages easily without coding.",
    }
  ];

  return (
    <section className="py-12 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-slate-800 mb-6">Our Features</h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            Lambda is a high quality and very flexible theme with lots of powerful features and theme options. 
            It lets you present your content in whatever way you like.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full border border-gray-200 flex items-center justify-center text-lambda-primary mb-6 group-hover:border-lambda-primary transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">{item.title}</h3>
              <p className="text-gray-500 mb-4">{item.desc}</p>
              <a href="#more" className="btn-lambda-link mt-auto">
                More... <FaCaretRight className="text-xs ml-1" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}