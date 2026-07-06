import React, { useState, useEffect, useMemo } from 'react';

// NAYA: 'export default function' use kiya hai taaki ReferenceError na aaye
export default function CourseCatalog() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // 1. Fetch Courses from Backend
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/courses');
        if (response.ok) {
          const data = await response.json();
          setCourses(data);
        } else {
          // Fallback dummy data
          setCourses(dummyCourses);
        }
      } catch (error) {
        console.error("Error fetching courses, using fallback data:", error);
        setCourses(dummyCourses);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // 2. Extract Unique Categories & Calculate Counts for Sidebar
  const categoriesWithCount = useMemo(() => {
    const counts = {};
    courses.forEach(course => {
      const cat = course.category || 'Miscellaneous';
      counts[cat] = (counts[cat] || 0) + 1;
    });
    return counts;
  }, [courses]);

  // 3. Filter Courses based on Category & Search Input
  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
      const matchesSearch = course.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            course.description?.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [courses, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800 pt-10">
      
      {/* --- TOP HEADER BANNER --- */}
      <header className="bg-[#f2b938] text-white py-6 px-8 shadow-md">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-normal tracking-wide">
            {selectedCategory === 'All' ? 'Lambda Premium Moodle Theme' : selectedCategory}
          </h1>
        </div>
      </header>

      {/* --- MAIN CONTENT CONTAINER --- */}
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* ================= LEFT COLUMN: COURSES LIST (3/4 Width) ================= */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Dropdown Category Filter */}
            <div className="bg-white p-4 rounded shadow-sm flex items-center justify-between border border-gray-200">
              <label htmlFor="category-select" className="text-sm font-semibold text-gray-600">
                Course format / Category:
              </label>
              <select
                id="category-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded px-3 py-1.5 text-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#f2b938]"
              >
                <option value="All">All courses</option>
                {Object.keys(categoriesWithCount).map((cat, idx) => (
                  <option key={idx} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Courses Cards List */}
            {loading ? (
              <div className="text-center py-12 text-gray-500 font-medium">Loading courses...</div>
            ) : filteredCourses.length === 0 ? (
              <div className="bg-white p-8 rounded shadow-sm text-center text-gray-500 border border-gray-200">
                No courses found matching your criteria.
              </div>
            ) : (
              <div className="space-y-6">
                {filteredCourses.map((course) => (
                  <div key={course.id} className="bg-white rounded border border-gray-200 shadow-sm overflow-hidden flex flex-col md:flex-row transition hover:shadow-md">
                    
                    {/* Course Image / Thumbnail */}
                    <div className="md:w-64 md:flex-shrink-0 bg-gray-200">
                      <img
                        src={course.image_url || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&q=80"}
                        alt={course.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>

                    {/* Course Details */}
                    <div className="p-6 flex flex-col justify-between flex-grow">
                      <div>
                        <h2 className="text-xl font-normal text-gray-800 hover:text-[#f2b938] cursor-pointer transition">
                          {course.title}
                        </h2>
                        <p className="text-xs text-[#5f9e40] font-semibold tracking-wider uppercase mt-1">
                          {course.category}
                        </p>
                        <p className="text-sm text-gray-600 mt-3 line-clamp-3 leading-relaxed">
                          {course.description}
                        </p>
                      </div>

                      {/* Action Button */}
                      <div className="mt-6">
                        <button className="bg-[#f2b938] hover:bg-[#dfa728] text-white font-medium text-sm px-5 py-2 rounded shadow-sm transition duration-150 ease-in-out">
                          Click to enter this course
                        </button>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ================= RIGHT COLUMN: SIDEBAR FILTERS (1/4 Width) ================= */}
          <div className="space-y-6">
            
            {/* Search Box Widget */}
            <div className="bg-white p-5 rounded border border-gray-200 shadow-sm">
              <h3 className="text-base font-semibold text-gray-700 mb-3 border-b pb-2">Search courses</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full border border-gray-300 rounded pl-3 pr-9 py-1.5 text-sm focus:outline-none focus:border-[#f2b938]"
                />
                <span className="absolute right-3 top-2 text-gray-400">
                  🔍
                </span>
              </div>
            </div>

            {/* Course Categories Sidebar Widget */}
            <div className="bg-white p-5 rounded border border-gray-200 shadow-sm">
              <h3 className="text-base font-semibold text-gray-700 mb-3 border-b pb-2">Course categories</h3>
              <ul className="space-y-2 text-sm">
                
                {/* All Courses Link */}
                <li>
                  <button
                    onClick={() => setSelectedCategory('All')}
                    className={`w-full text-left flex justify-between items-center py-1 transition ${
                      selectedCategory === 'All' ? 'text-[#f2b938] font-bold' : 'text-gray-600 hover:text-[#f2b938]'
                    }`}
                  >
                    <span>All Courses</span>
                    <span className="bg-gray-100 text-gray-500 text-xs px-2 py-0.5 rounded border">
                      {courses.length}
                    </span>
                  </button>
                </li>

                {/* Individual Category Links with Badges */}
                {Object.entries(categoriesWithCount).map(([categoryName, count], idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => setSelectedCategory(categoryName)}
                      className={`w-full text-left flex justify-between items-center py-1 transition ${
                        selectedCategory === categoryName ? 'text-[#f2b938] font-bold' : 'text-gray-600 hover:text-[#f2b938]'
                      }`}
                    >
                      <span className="truncate pr-2">{categoryName}</span>
                      <span className="bg-gray-100 text-gray-500 text-xs px-2 py-0.5 rounded border font-normal">
                        {count}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}

// Fallback dummy data
const dummyCourses = [
  {
    id: 1,
    title: "Creative Writing",
    category: "Literacy",
    description: "This is a sample course with contents and activities. You can take a look how resources and activities are displayed in a course view. This sample course uses the 'Topics' course format.",
    image_url: "https://images.unsplash.com/photo-1455390582262-044cdead27d8?w=500&q=80"
  },
  {
    id: 2,
    title: "Art History",
    category: "Art and Media",
    description: "This is a sample course with contents and activities. You can take a look how resources and activities are displayed in a course view. This sample course uses the 'Files' course format.",
    image_url: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=500&q=80"
  },
  {
    id: 3,
    title: "Biology",
    category: "Science and Mathematics",
    description: "This is a sample course with contents and activities. You can take a look how resources and activities are displayed in a course view. This sample course uses the 'Buttons' course format.",
    image_url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500&q=80"
  },
  {
    id: 4,
    title: "Bootstrap Components",
    category: "Miscellaneous",
    description: "Bootstrap is a powerful, feature-packed frontend toolkit. This course contains a collection of available components for this framework.",
    image_url: "https://images.unsplash.com/photo-1618401471353-b98aedd04e11?w=500&q=80"
  },
  {
    id: 5,
    title: "Effective Memory Techniques",
    category: "Society and Environment",
    description: "Learn how to improve your cognitive retention and memorize complex data sets using scientific memory models.",
    image_url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&q=80"
  }
];