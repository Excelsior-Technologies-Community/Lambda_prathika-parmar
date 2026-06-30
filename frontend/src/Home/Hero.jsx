import React, { useState, useEffect} from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Hero  () {

    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [

       {
        id: 1,
        image: "https://lambda-demo-01.redpithemes.com/pluginfile.php/1/theme_lambda2/slideshow_image_3/1758302184/slide-03.jpg",
        overlayStyle: "center-light",
        title: "Teaching with Moodle",
        description: "Create effective online teaching and learning experiences in a collaborative, private environment.",
        buttonText: "Learn More", 
       },

       {
        id: 2,
        image: "https://lambda-demo-01.redpithemes.com/pluginfile.php/1/theme_lambda2/slideshow_image_1/1758302184/slide-01.jpg",
        overlayStyle: "right-light",
        title: "CREATIVE. POWERFULL. CUSTOMIZABLE",
        description: "Lambda gives you creative freedom for your e-learning website.",
        buttonText: "null", 
       },
       {
        id: 3,
        image: "https://lambda-demo-01.redpithemes.com/pluginfile.php/1/theme_lambda2/slideshow_image_2/1758302184/slide-02b.jpg",
        overlayStyle: "right-amber",
        title: "Online learning you can access anywhere ",
        description: "Transform your Moodle site into the perfect learning platform.",
        buttonText: "null", 
       },
    ]

    const nextSlide = () =>{
        setCurrentSlide((prev) => (prev === slides.length-1 ? 0 : prev + 1));   // slides are 3 >>> slides.length = 2
    };
    const prevSlide = () =>{
        setCurrentSlide((prev) => (prev === 0 ? slides.length-1 : prev - 1))
    }

    // autoplay functionality

    useEffect(() => {
        const slideInterval = setInterval(nextSlide,5000);
        return () => clearInterval(slideInterval);
    }, []);

    const renderOverlay = (slide) => {
        // 1. The wrapper string that aligns with the Header
        const alignmentWrapper = "w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center";

        if (slide.overlayStyle === "center-light") {
            return (
                <div className="absolute inset-0 pointer-events-none">
                    {/* 2. Used alignmentWrapper here with justify-center */}
                    <div className={`${alignmentWrapper} justify-center`}>
                        <div className="bg-white/90 backdrop-blur-sm p-10 md:p-14 rounded shadow-lg text-center max-w-2xl transform transition-all duration-700 translate-y-0 pointer-events-auto">
                            <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-4">{slide.title}</h2>
                            <p className="text-lg text-gray-600 mb-8">{slide.description}</p>
                            {/* Check for "null" string since you updated your data array */}
                            {slide.buttonText && slide.buttonText !== "null" && (
                                <button className="bg-lambda-primary hover:bg-lambda-primary-hover text-white font-bold py-2.5 px-6 rounded transition">
                                    {slide.buttonText}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            );
        }
        
        if (slide.overlayStyle === "right-light") {
            return (
                <div className="absolute inset-0 pointer-events-none">
                    {/* 3. Used alignmentWrapper here with justify-end */}
                    <div className={`${alignmentWrapper} justify-end`}>
                        <div className="bg-white/90 backdrop-blur-sm p-10 md:p-14 rounded shadow-lg text-right max-w-xl pointer-events-auto">
                            <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-4 leading-tight">{slide.title}</h2>
                            <p className="text-lg text-gray-600">{slide.description}</p>
                        </div>
                    </div>
                </div>
            );
        }
        
        if (slide.overlayStyle === "right-amber") {
            return (
                <div className="absolute inset-0 pointer-events-none">
                    {/* 4. Used alignmentWrapper here with justify-end */}
                    <div className={`${alignmentWrapper} justify-end`}>
                        <div className="bg-lambda-primary/95 p-10 md:p-12 shadow-lg text-right max-w-xl border-l-4 border-white pointer-events-auto">
                            <h2 className="text-4xl md:text-5xl font-light text-white mb-4 leading-tight">{slide.title}</h2>
                            <p className="text-lg text-white/90">{slide.description}</p>
                        </div>
                    </div>
                </div>
            );
        }
    };

    return(
        <div className="relative w-full h-[500px]  md:h-[600px] overflow-hidden bg-gray-900 group">
      
      {/* 1. The Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-linear transform scale-105"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Subtle overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
          
          {/* Slide Content Box */}
          {renderOverlay(slide)}
        </div>
      ))}

      {/* 2. Left Navigation Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-500 hover:text-lambda-primary p-4 h-24 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-4 cursor-pointer shadow-md"
        aria-label="Previous Slide"
      >
        <FaChevronLeft className="text-xl" />
      </button>

      {/* 3. Right Navigation Arrow (Matches the "NEXT ->" look from the video) */}
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-500 hover:text-lambda-primary pl-4 pr-3 py-4 h-24 flex items-center gap-2 transition-all opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4 cursor-pointer shadow-md"
        aria-label="Next Slide"
      >
        <span className="text-xs font-bold tracking-widest hidden md:block">NEXT</span>
        <FaChevronRight className="text-lg" />
      </button>

    </div>
  );
}