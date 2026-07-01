import React from "react";

export default function ImageGallery() {
     const images = [
        "https://lambda-demo-01.redpithemes.com/pluginfile.php/283/block_lambdacb/gallery/gallery-img-01.jpg",
        "https://lambda-demo-01.redpithemes.com/pluginfile.php/283/block_lambdacb/gallery/gallery-img-02.jpg",
        "https://lambda-demo-01.redpithemes.com/pluginfile.php/283/block_lambdacb/gallery/gallery-img-03.jpg",
        "https://lambda-demo-01.redpithemes.com/pluginfile.php/283/block_lambdacb/gallery/gallery-img-04.jpg",
        "https://lambda-demo-01.redpithemes.com/pluginfile.php/283/block_lambdacb/gallery/gallery-img-05.jpg",
        "https://lambda-demo-01.redpithemes.com/pluginfile.php/283/block_lambdacb/gallery/gallery-img-07.jpg",
        "https://lambda-demo-01.redpithemes.com/pluginfile.php/283/block_lambdacb/gallery/gallery-img-08.jpg",
        "https://lambda-demo-01.redpithemes.com/pluginfile.php/283/block_lambdacb/gallery/gallery-img-06.jpg"
     ];

     return(
        <section className="px-14 py-14 mb:py-24 bg-white">
        <h2 className="font-5xl font-bold text-slate-1000 mb-10">
            Image Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {images.map((url, index) => (
        <div 
          key={index} 
          className="aspect-square overflow-hidden rounded-sm cursor-pointer group shadow-sm"
        >
          <img 
            src={url} 
            alt={`Gallery image ${index + 1}`} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      ))}
    </div>

  
        </section>
        
     );
}