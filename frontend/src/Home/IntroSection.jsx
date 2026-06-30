import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function IntroSection() {

    const intros = [
        {
            id: 1,
            image: "https://lambda-demo-01.redpithemes.com/pluginfile.php/146/mod_label/intro/fp-schools.jpg",
            title: 'Educational Institutions',
            desc: "From elementary schools to universities, enrich teaching methodologies and engage learners effectively across diverse educational levels.",

        },
        {
            id: 2,
            image: "https://lambda-demo-01.redpithemes.com/pluginfile.php/146/mod_label/intro/fp-corporate.jpg",
            title: 'Corporate Training',
            desc: "Offer internal training and employee development programs, fostering continuous learning and skill enhancement among their teams.",

        },
        {
            id: 3,
            image: "https://lambda-demo-01.redpithemes.com/pluginfile.php/146/mod_label/intro/fp-online-courses.jpg",
            title: 'Online Course Platforms ',
            desc: "Elevate your online course experiences, providing a robust and adaptable learning environment for users seeking comprehensive educational resources.",

        },
    ];

    return(
        <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Typography Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-light text-slate-600 tracking-wide">
            Self-Paced Learning Courses Online
          </h2>
          <h3 className="text-3xl md:text-4xl font-light text-slate-800">
            with <span className="text-lambda-primary font-medium">Lambda</span> - Premium Moodle Theme
          </h3>
          
          <div className="flex items-center justify-center gap-2 text-gray-500 pt-4">
            <FaArrowRight className="text-sm font-light text-gray-400" />
            <p className="text-lg font-light">The perfect choice for your Moodle site</p>
          </div>
        </div>

        {/* 3-Column Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {intros.map((card) => (
            <div key={card.id} className="flex flex-col group cursor-pointer">
              {/* Image Container with slight hover zoom */}
              <div className="w-full h-56 overflow-hidden mb-5 rounded-sm">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Text Content */}
              <h4 className="text-sm font-bold text-slate-800 mb-2 uppercase tracking-wide">
                {card.title}:
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
    );
}