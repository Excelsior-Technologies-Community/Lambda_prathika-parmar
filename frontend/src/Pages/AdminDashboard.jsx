import React, { useState } from 'react';

/**
 * Admin Dashboard - Optimized and dependency-free
 */
export default function App() {
  const [activeView, setActiveView] = useState('Dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Simple SVG Icons for UI
  const Icon = ({ d }) => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={d} />
    </svg>
  );

  const menuItems = [
    { name: 'Dashboard', icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
    { name: 'Users', icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" },
    { name: 'Courses', icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
    { name: 'Settings', icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" },
  ];

  return (
    <div className="flex h-screen bg-gray-50 text-slate-800">
      {/* Sidebar */}
      <aside className={`bg-slate-900 text-white transition-all duration-300 flex flex-col ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
        <div className="p-6 text-xl font-bold flex justify-between items-center cursor-pointer" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen && <span>AdminPanel</span>}
          <span>☰</span>
        </div>
        <nav className="mt-6 flex-grow">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveView(item.name)}
              className={`flex items-center w-full p-4 hover:bg-slate-800 transition ${activeView === item.name ? 'border-l-4 border-blue-500 bg-slate-800' : ''}`}
            >
              <Icon d={item.icon} />
              {isSidebarOpen && <span className="ml-4 text-sm font-medium">{item.name}</span>}
            </button>
          ))}
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="bg-white p-6 shadow-sm border-b flex justify-between items-center">
          <h2 className="text-xl font-bold uppercase tracking-wider text-slate-700">{activeView}</h2>
          <button className="text-sm font-semibold text-red-600 hover:text-red-700">Logout</button>
        </header>

        <section className="p-8">
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm min-h-[400px]">
            {activeView === 'Dashboard' && <Content title="Welcome back, Admin" desc="Check your system stats." />}
            {activeView === 'Users' && <Content title="User Management" desc="Manage, add, and remove user accounts." />}
            {activeView === 'Courses' && <Content title="Course Manager" desc="Update lessons and track course progress." />}
            {activeView === 'Settings' && <Content title="General Settings" desc="Configure your preferences." />}
          </div>
        </section>
      </main>
    </div>
  );
}

const Content = ({ title, desc }) => (
  <div className="animate-in fade-in duration-500">
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="text-gray-500">{desc}</p>
    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      {[1, 2, 3].map(i => (
        <div key={i} className="bg-gray-50 p-6 rounded-lg border border-gray-100 h-32 flex items-center justify-center text-gray-400">
          Widget {i}
        </div>
      ))}
    </div>
  </div>
);