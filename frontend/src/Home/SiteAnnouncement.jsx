import React from 'react';
import { FaUser, FaClock } from 'react-icons/fa';

export default function SiteAnnouncements() {
  const announcements = [
    {
      id: 1,
      image: "https://lambda-demo-01.redpithemes.com/pluginfile.php/148/mod_label/intro/fp-why-choose.jpg",
      title: "Suggestions for course design",
      author: "Admin User",
      date: "Saturday, 30 December 2023",
      time: "12:40 PM",
      excerpt: "Ut enim ad minima veniam, quis nostrum exercitationem. Cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=500&q=80",
      title: "Mobile hybrid teaching sets",
      author: "Admin User",
      date: "Saturday, 30 December 2023",
      time: "12:39 PM",
      excerpt: "Fugiat quo voluptas nulla pariatur? At vero eos et accusamus. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=500&q=80",
      title: "The importance of digital skills",
      author: "Admin User",
      date: "Saturday, 30 December 2023",
      time: "12:38 PM",
      excerpt: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit."
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&q=80",
      title: "Video service for teaching",
      author: "Admin User",
      date: "Saturday, 30 December 2023",
      time: "12:37 PM",
      excerpt: "Animi, id est laborum et dolorum fuga. Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
    }
  ];

  return (
    <section className="py-16 bg-lambda-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-3xl font-light text-slate-800 mb-10">Site announcements</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {announcements.map(post => (
            <div key={post.id} className="card-lambda flex flex-col">
              {/* Card Image */}
              <div className="h-40 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition duration-300 hover:scale-105" />
              </div>
              
              {/* Card Body */}
              <div className="p-5 flex-grow flex flex-col">
                <h3 className="text-lg font-medium text-slate-800 mb-3 leading-tight">{post.title}</h3>
                
                {/* Meta data */}
                <div className="text-xs text-gray-500 mb-4 space-y-1">
                  <div className="flex items-center gap-1.5">
                    <FaUser className="text-gray-400" /> by <span className="text-lambda-primary">{post.author}</span> - {post.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FaClock className="text-gray-400" /> {post.time}
                  </div>
                </div>
                
                {/* Excerpt */}
                <p className="text-sm text-gray-600 mb-5">{post.excerpt}</p>
                
                {/* Button */}
                <div className="mt-auto">
                  <button className="bg-lambda-primary hover:bg-lambda-primary-hover text-white text-xs font-bold py-1.5 px-3 rounded transition">
                    More...
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}