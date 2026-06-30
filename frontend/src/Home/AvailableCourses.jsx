import React from 'react';

export default function AvailableCourses() {
  const courses = [
    {
      id: 1,
      image: "https://thfvnext.bing.com/th/id/OIP.ZGqDEerVvolT42IfZPYfUgHaFR?w=259&h=184&c=7&r=0&o=7&cb=thfvnextfalcon3&dpr=1.3&pid=1.7&rm=3",
      title: "Creative Writing",
      category: "Literacy",
      desc: "This is a sample course with contents and activities. You can take a look how resources and activities are displayed in a course view.",
    },
    {
      id: 2,
      image: "https://thfvnext.bing.com/th?q=1424+Art+History&w=120&h=120&c=1&rs=1&qlt=70&r=0&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
      title: "Art History",
      category: "Art and Media",
      desc: "This is a sample course with contents and activities. You can take a look how resources and activities are displayed in a course view.",
    },
    {
      id: 3,
      image: "https://thfvnext.bing.com/th/id/OIP.n1GJixI1hscXChwQmSq9pwHaEN?w=285&h=180&c=7&r=0&o=7&cb=thfvnextfalcon3&dpr=1.3&pid=1.7&rm=3",
      title: "Biology",
      category: "Science and Mathematics",
      desc: "This is a sample course with contents and activities. You can take a look how resources and activities are displayed in a course view.",
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-3xl font-light text-slate-800 mb-10">Available courses</h2>

        <div className="space-y-6">
          {courses.map(course => (
            <div key={course.id} className="course-row-lambda flex flex-col md:flex-row gap-6 p-0 overflow-hidden">
              <div className="w-full md:w-64 h-48 md:h-auto shrink-0">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
              </div>
              
              <div className="p-6 md:p-8 flex-grow flex flex-col justify-center">
                <h3 className="text-xl font-medium text-slate-800">{course.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{course.category}</p>
                <p className="text-gray-600 mb-6 text-sm">{course.desc}</p>
                <div>
                  <button className="btn-lambda-primary">
                    Click to enter this course
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button className="bg-slate-700 hover:bg-slate-800 text-white font-medium py-2 px-6 rounded transition">
            All courses
          </button>
        </div>

      </div>
    </section>
  );
}