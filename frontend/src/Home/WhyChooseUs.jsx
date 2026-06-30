import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaPlug, FaStar, FaSync } from 'react-icons/fa';

export default function WhyChooseUs() {
  const [activeAccordion, setActiveAccordion] = useState(1);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <section className="py-16 bg-lambda-bg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Split Section */}
        <div className="flex flex-col lg:flex-row gap-12 mb-12">
          {/* Left: Text & Accordion */}
          <div className="lg:w-1/2">
            <h3 className="text-lambda-primary font-medium mb-2">Why choose us?</h3>
            <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-8 leading-tight">
              A few reasons why our valued customers choose Lambda for Moodle.
            </h2>
            
            <div className="space-y-2">
              {/* Accordion Item 1 */}
              <div className="border-b border-gray-300 pb-2">
                <button onClick={() => toggleAccordion(1)} className="w-full flex justify-between items-center py-2 text-left font-semibold text-slate-800 hover:text-lambda-primary transition">
                  <span className={activeAccordion === 1 ? "text-lambda-primary" : ""}>Reliable and stable</span>
                  {activeAccordion === 1 ? <FaChevronUp className="text-xs text-lambda-primary" /> : <FaChevronDown className="text-xs" />}
                </button>
                {activeAccordion === 1 && (
                  <p className="text-gray-600 mt-2 pb-4 text-sm leading-relaxed">
                    Daily approved and trusted by over 10,000 satisfied customers, Theme Lambda stands tall, celebrating nine years as the unparalleled #1 selling Moodle theme. Renowned for its reliability and robustness, Lambda emerges as the consistent choice.
                  </p>
                )}
              </div>

              {/* Accordion Item 2 */}
              <div className="border-b border-gray-300 pb-2">
                <button onClick={() => toggleAccordion(2)} className="w-full flex justify-between items-center py-2 text-left font-semibold text-slate-800 hover:text-lambda-primary transition">
                  <span className={activeAccordion === 2 ? "text-lambda-primary" : ""}>Excellent support</span>
                  {activeAccordion === 2 ? <FaChevronUp className="text-xs text-lambda-primary" /> : <FaChevronDown className="text-xs" />}
                </button>
                {activeAccordion === 2 && (
                  <p className="text-gray-600 mt-2 pb-4 text-sm leading-relaxed">
                    Theme Lambda not only offers a helpful and robust customer support system, ensuring your queries are promptly addressed...
                  </p>
                )}
              </div>

              {/* Accordion Item 3 */}
              <div className="border-b border-gray-300 pb-2">
                <button onClick={() => toggleAccordion(3)} className="w-full flex justify-between items-center py-2 text-left font-semibold text-slate-800 hover:text-lambda-primary transition">
                  <span className={activeAccordion === 3 ? "text-lambda-primary" : ""}>Full documentation</span>
                  {activeAccordion === 3 ? <FaChevronUp className="text-xs text-lambda-primary" /> : <FaChevronDown className="text-xs" />}
                </button>
                {activeAccordion === 3 && (
                  <p className="text-gray-600 mt-2 pb-4 text-sm leading-relaxed">
                    Comprehensive installation guides and tutorials accompany each component and plugin included with Theme Lambda.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Students collaborating" 
              className="w-full h-auto rounded shadow-sm"
            />
          </div>
        </div>

        {/* Bottom Highlight Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-tint-amber border border-yellow-200 p-6 flex items-start gap-4 rounded-sm">
            <FaPlug className="text-3xl text-lambda-primary shrink-0" />
            <div>
              <h4 className="font-bold text-slate-800 mb-1">Plugins Ready</h4>
              <p className="text-sm text-gray-600">Compatible with plugins from the Moodle plugins directory.</p>
            </div>
          </div>
          <div className="bg-tint-cream border border-yellow-100 p-6 flex items-start gap-4 rounded-sm">
            <FaStar className="text-3xl text-lambda-primary shrink-0" />
            <div>
              <h4 className="font-bold text-slate-800 mb-1">Best Rated</h4>
              <p className="text-sm text-gray-600">The most popular theme for Moodle with 5-star rating.</p>
            </div>
          </div>
          <div className="bg-white border border-gray-200 p-6 flex items-start gap-4 rounded-sm">
            <FaSync className="text-3xl text-lambda-primary shrink-0" />
            <div>
              <h4 className="font-bold text-slate-800 mb-1">Lifetime Updates</h4>
              <p className="text-sm text-gray-600">Lambda is regularly updated and all updates are free.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}