import React, { useState } from 'react';
import { FaCog, FaTimes, FaBars } from 'react-icons/fa';
import Header from '../Home/Header';
import Footer from '../Home/Footer';

export default function FeaturesPage() {
  // State to track which chapter is currently active (1 through 6)
  const [activeChapter, setActiveChapter] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Chapter Data
  const chapters = [
    { id: 1, title: "1. Typography" },
    { id: 2, title: "2. Theme Core Features" },
    { id: 3, title: "3. Flexible Layout" },
    { id: 4, title: "4. Responsive Design" },
    { id: 5, title: "5. Multilanguage" },
    { id: 6, title: "6. Built-in Components" }
  ];

  // Navigation Handlers
  const handleNext = () => setActiveChapter(prev => Math.min(prev + 1, 6));
  const handlePrev = () => setActiveChapter(prev => Math.max(prev - 1, 1));

  const Chapter1Typography = () => (
    <div>
        <div className="animate-fadeIn space-y-12">
      {/* Headings */}
      <section>
        <h2 className="text-3xl font-light text-slate-800 mb-6 border-b pb-2">Headings</h2>
        <div className="bg-white border border-gray-200 p-6 rounded-sm">
          <div className="text-xs text-gray-500 font-bold uppercase mb-4 tracking-wider">Example</div>
          <div className="space-y-4 text-slate-800">
            <h1 className="text-4xl font-bold">h1 heading <span className="text-gray-400 font-light text-2xl">Secondary text</span></h1>
            <h2 className="text-3xl font-bold">h2 heading <span className="text-gray-400 font-light text-xl">Secondary text</span></h2>
            <h3 className="text-2xl font-bold">h3 heading <span className="text-gray-400 font-light text-lg">Secondary text</span></h3>
            <h4 className="text-xl font-bold">h4 heading <span className="text-gray-400 font-light text-base">Secondary text</span></h4>
            <h5 className="text-lg font-bold">h5 heading <span className="text-gray-400 font-light text-sm">Secondary text</span></h5>
            <h6 className="text-base font-bold">h6 heading <span className="text-gray-400 font-light text-xs">Secondary text</span></h6>
          </div>
        </div>
      </section>

      {/* Paragraphs */}
      <section>
        <h2 className="text-3xl font-light text-slate-800 mb-6 border-b pb-2">Paragraph and Lead Text</h2>
        <div className="bg-white border border-gray-200 p-6 rounded-sm">
          <div className="text-xs text-gray-500 font-bold uppercase mb-4 tracking-wider">Example</div>
          <p className="text-xl font-light text-gray-800 mb-4 leading-relaxed">
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
          </p>
          <p className="text-gray-600">
            Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.
          </p>
        </div>
      </section>

      {/* Blockquote */}
      <section>
        <h2 className="text-3xl font-light text-slate-800 mb-6 border-b pb-2">Blockquote</h2>
        <div className="bg-white border border-gray-200 p-6 rounded-sm">
          <div className="text-xs text-gray-500 font-bold uppercase mb-4 tracking-wider">Example</div>
          <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 space-y-2">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer className="text-sm text-gray-400 mt-2">- Someone famous in <cite title="Source Title">Source Title</cite></footer>
          </blockquote>
        </div>
      </section>

      {/* Tables */}
      <section>
        <h2 className="text-3xl font-light text-slate-800 mb-6 border-b pb-2">Tables</h2>
        <div className="bg-white border border-gray-200 p-6 rounded-sm overflow-x-auto">
          <div className="text-xs text-gray-500 font-bold uppercase mb-4 tracking-wider">Example</div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-800 text-white">
                <th className="p-3 font-semibold">#</th>
                <th className="p-3 font-semibold">First</th>
                <th className="p-3 font-semibold">Last</th>
                <th className="p-3 font-semibold">Handle</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="p-3">1</td><td className="p-3">Mark</td><td className="p-3">Otto</td><td className="p-3">@mdo</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3">2</td><td className="p-3">Jacob</td><td className="p-3">Thornton</td><td className="p-3">@fat</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3">3</td><td className="p-3">Larry</td><td className="p-3">the Bird</td><td className="p-3">@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Alert */}
      <section>
        <h2 className="text-3xl font-light text-slate-800 mb-6 border-b pb-2">Font Awesome</h2>
        <div className="bg-[#d9534f] text-white p-4 rounded-sm flex items-start gap-3 shadow-sm">
          <FaCog className="text-xl mt-0.5 shrink-0" />
          <p className="font-medium">Icons are important to web projects because they are a visual way to help add meaning to elements.</p>
        </div>
      </section>
    </div>
    </div>
    
  );

  const Chapter2CoreFeatures = () => {
    const features = [
      { title: "Custom Layouts", desc: "Choose between a 'boxed' and a 'wide' page layout with further setting options." },
      { title: "Header Options", desc: "Create the perfect header for your site and add a flexible top bar." },
      { title: "Footer Options", desc: "Change the footer style with columns for core Moodle blocks and add your social channels." },
      { title: "Moodle Blocks", desc: "Multiple block positions and styles allow you to enhance your core course content." },
      { title: "Unlimited Colors", desc: "The theme options make it easy for you to customize the style of your Moodle site." },
      { title: "Frontpage Settings", desc: "Hero section for calling extra attention to some special content that attract your visitors." },
      { title: "Font Selector", desc: "Select different fonts for body text and heading from the Google font Collection." },
      { title: "Various UI components", desc: "Dozens of reusable components to enhance your courses or to create your custom pages." },
      { title: "Social Media", desc: "Theme Lambda makes it easy for you to place social network icons to your Moodle site." },
      { title: "Multilanguage Support", desc: "Theme Lambda provides support for multilingual websites in LTR and RTL languages." },
      { title: "Scroll To Top", desc: "Enable a scroll to top arrow for your site." },
      { title: "Regular updates", desc: "Theme Lambda is the longest standing premium Moodle theme." }
    ];

    return (

        <div>


        <div className="animate-fadeIn">
        <div className="text-center mb-10">
          <h4 className="text-lambda-primary uppercase tracking-widest text-sm font-semibold mb-2">Theme Core Features</h4>
          <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-4">Options for everything you need!</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">Theme Lambda allows you to build your own style. It comes bundled with many powerful options and clever features.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-6 border border-gray-100 shadow-sm rounded-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-medium text-slate-800 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
        </div>
      
    );
  };

  const Chapter3FlexibleLayout = () => (
    <div>
<div className="animate-fadeIn">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-4">Powerful Layout Options</h2>
        <h3 className="text-xl text-lambda-primary mb-6">Quick and easy customization - options for everything you need!</h3>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">Theme Lambda allows you to build your own style. You get easy and intuitive options to customize and change every part of your Moodle site. Lambda's theme options give you control over the layout settings, header, footer, sidebars, course pages and a lot more.</p>
      </div>
      <div className="bg-white border border-gray-200 rounded-sm p-12 flex justify-center shadow-sm">
        <div className="w-full max-w-3xl h-64 bg-slate-100 rounded flex items-center justify-center text-slate-400 font-bold border-4 border-dashed border-slate-200">
          Layout Illustration Placeholder
        </div>
      </div>
    </div>
    </div>
    
  );

  const Chapter4ResponsiveDesign = () => (
    <div>
<div className="animate-fadeIn">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-4">Fully Responsive</h2>
        <h3 className="text-xl text-lambda-primary mb-6">Stellar display and clean interface across all devices!</h3>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">No matter what screen resolution your customers use, Theme Lambda will look great on any device.</p>
      </div>
      <div className="bg-white border border-gray-200 rounded-sm p-12 flex justify-center shadow-sm">
        <div className="w-full max-w-2xl h-64 bg-slate-100 rounded flex items-center justify-center text-slate-400 font-bold border-4 border-dashed border-slate-200">
           Responsive Devices Illustration Placeholder
        </div>
      </div>
    </div>

    </div>
    
  );

  const Chapter5Multilanguage = () => (

    <div>

<div className="animate-fadeIn text-center">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-4">100% Multilanguage Support</h2>
        <h3 className="text-xl text-lambda-primary mb-6">Over 100 built-in language packs that can easily be enabled</h3>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">Do you want your Moodle site content to be displayed in more than one language? You've come to the right place with Theme Lambda!</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        <div className="bg-white border border-gray-200 p-6 rounded shadow-sm">
          <h3 className="font-bold text-slate-800 mb-2">Full Multilanguage Support</h3>
          <p className="text-gray-600 text-sm">Lambda does not contain any hard-coded text or phrases.</p>
        </div>
        <div className="bg-white border border-gray-200 p-6 rounded shadow-sm">
          <h3 className="font-bold text-slate-800 mb-2">Moodle Language Menu</h3>
          <p className="text-gray-600 text-sm">All header styles fully support the Moodle core language menu.</p>
        </div>
        <div className="bg-white border border-gray-200 p-6 rounded shadow-sm">
          <h3 className="font-bold text-slate-800 mb-2">Multilanguage Filter</h3>
          <p className="text-gray-600 text-sm">For your own contents you can use the Moodle multilanguage filter.</p>
        </div>
        <div className="bg-white border border-gray-200 p-6 rounded shadow-sm">
          <h3 className="font-bold text-slate-800 mb-2">Course Files</h3>
          <p className="text-gray-600 text-sm">Show resources and activities within your course only for certain users depending on their language.</p>
        </div>
      </div>
    </div>
    </div>
    
  );

  const Chapter6Components = () => (

    <div>
<div className="animate-fadeIn">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-4">Available Components</h2>
        <h3 className="text-xl text-lambda-primary mb-6">Full of features, easy to include</h3>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">Lambda offers dedicated content plugins with multiple components that you can customize. It's very easy to create a page with your unique settings and you don't need to know a single line of code.</p>
      </div>
      <div className="space-y-6 text-left">
        <div className="bg-white border border-gray-200 rounded-sm p-0 flex flex-col sm:flex-row overflow-hidden shadow-sm">
          <div className="w-full sm:w-64 h-48 shrink-0 bg-[#568f45] flex items-center justify-center text-white text-6xl font-bold font-serif border-r border-gray-200">
            C
          </div>
          <div className="p-6 flex flex-col justify-center flex-grow">
            <h3 className="text-xl font-medium text-slate-800">Content components</h3>
            <p className="text-sm text-gray-400 mb-2">Miscellaneous</p>
            <p className="text-gray-600 mb-4 text-sm">Collection of components for the content plugins.</p>
            <div><button className="bg-lambda-primary hover:bg-lambda-primary-hover text-white text-sm font-medium py-2 px-4 rounded transition">Click to enter this course</button></div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-sm p-0 flex flex-col sm:flex-row overflow-hidden shadow-sm">
          <div className="w-full sm:w-64 h-48 shrink-0 bg-[#563d7c] flex items-center justify-center text-white text-6xl font-bold font-serif border-r border-gray-200">
            B
          </div>
          <div className="p-6 flex flex-col justify-center flex-grow">
            <h3 className="text-xl font-medium text-slate-800">Bootstrap Components</h3>
            <p className="text-sm text-gray-400 mb-2">Miscellaneous</p>
            <p className="text-gray-600 mb-4 text-sm">Bootstrap is a powerful, feature-packed frontend toolkit... This course contains a collection of available components for this framework.</p>
            <div><button className="bg-lambda-primary hover:bg-lambda-primary-hover text-white text-sm font-medium py-2 px-4 rounded transition">Click to enter this course</button></div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );

  const renderActiveChapter = () => {
    switch(activeChapter) {
      case 1: return <Chapter1Typography />;
      case 2: return <Chapter2CoreFeatures />;
      case 3: return <Chapter3FlexibleLayout />;
      case 4: return <Chapter4ResponsiveDesign />;
      case 5: return <Chapter5Multilanguage />;
      case 6: return <Chapter6Components />;
      default: return <Chapter1Typography />;
    }
  };

  return (
    <section className="bg-slate-50 min-h-screen pb-12">
      {/* Top Breadcrumb Bar */}
      <div className="bg-white border-b border-gray-200 shadow-sm mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center text-sm">
          <span className="font-medium text-slate-800 mr-4">Book</span>
          <span className="text-gray-500 hover:text-lambda-primary cursor-pointer flex items-center gap-1">More <FaBars className="text-xs" /></span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* ================= LEFT: MAIN CONTENT AREA ================= */}
          <div className="w-full lg:flex-1 bg-[#fcfcfc] min-h-[600px] flex flex-col p-6 rounded-sm shadow-sm border border-gray-200">
            
            {/* Top Prev/Next Navigation */}
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
              <button 
                onClick={handlePrev} 
                disabled={activeChapter === 1}
                className={`px-4 py-2 rounded-sm text-sm font-medium transition ${activeChapter === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              >
                Previous
              </button>
              <button 
                onClick={handleNext} 
                disabled={activeChapter === 6}
                className={`px-6 py-2 rounded-sm text-sm font-medium transition ${activeChapter === 6 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-slate-700 text-white hover:bg-slate-800'}`}
              >
                Next
              </button>
            </div>

            {/* Dynamic Content Container */}
            <div className="flex-grow">
              {renderActiveChapter()}
            </div>

            {/* Bottom Prev/Next Navigation */}
            <div className="flex justify-between items-center mt-12 pt-6 border-t border-gray-200">
              <button 
                onClick={handlePrev} 
                disabled={activeChapter === 1}
                className={`px-4 py-2 rounded-sm text-sm font-medium transition ${activeChapter === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              >
                Previous
              </button>
              <button 
                onClick={handleNext} 
                disabled={activeChapter === 6}
                className={`px-6 py-2 rounded-sm text-sm font-medium transition ${activeChapter === 6 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-slate-700 text-white hover:bg-slate-800'}`}
              >
                Next
              </button>
            </div>

          </div>

          {/* ================= RIGHT: SIDEBAR TABLE OF CONTENTS ================= */}
          {sidebarOpen && (
            <div className="w-full lg:w-72 shrink-0 bg-white border border-gray-200 shadow-sm rounded-sm sticky top-6 animate-fadeIn">
              
              {/* Sidebar Header */}
              <div className="bg-gray-50 border-b border-gray-200 p-4 flex justify-between items-center">
                <h3 className="font-semibold text-slate-800 text-lg">Table of contents</h3>
                <button 
                  onClick={() => setSidebarOpen(false)} 
                  className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                  title="Close block drawer"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Sidebar Links */}
              <ul className="p-4 space-y-3 text-sm">
                {chapters.map((chapter) => (
                  <li key={chapter.id}>
                    <button 
                      onClick={() => setActiveChapter(chapter.id)}
                      className={`text-left w-full hover:underline transition-colors cursor-pointer ${
                        activeChapter === chapter.id 
                          ? 'text-lambda-primary font-bold' 
                          : 'text-gray-600 hover:text-lambda-primary'
                      }`}
                    >
                      {chapter.title}
                    </button>
                  </li>
                ))}
              </ul>

            </div>
          )}

          {/* Toggle to reopen sidebar */}
          {!sidebarOpen && (
             <button 
               className="fixed right-0 top-1/3 bg-slate-700 text-white p-3 rounded-l shadow-md cursor-pointer hover:bg-slate-800 transition z-50" 
               onClick={() => setSidebarOpen(true)}
               title="Open Table of Contents"
             >
               <FaBars />
             </button>
          )}

        </div>
      </div>
    </section>
  );
}

