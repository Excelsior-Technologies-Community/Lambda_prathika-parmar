import React, { useState, useEffect } from 'react';

export default function AdminPanel() {
  const [activeView, setActiveView] = useState('Dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Simple SVG Icons for UI
  const Icon = ({ d }) => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={d} />
    </svg>
  );

  const menuItems = [
    { name: 'Dashboard', icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
    { name: 'Users', icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" },
    { name: 'Courses', icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
    { name: 'Messages', icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
    { name: 'Settings', icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" },
  ];

  return (
    <div className="flex h-screen bg-gray-50 text-slate-800 font-sans">
      {/* Sidebar */}
      <aside className={`bg-slate-900 text-white transition-all duration-300 flex flex-col ${isSidebarOpen ? 'w-64' : 'w-20 shrink-0'}`}>
        <div className="p-6 text-xl font-bold flex justify-between items-center cursor-pointer hover:bg-slate-800 transition" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen && <span>AdminPanel</span>}
          <span>☰</span>
        </div>
        <nav className="mt-6 flex-grow">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveView(item.name)}
              className={`flex items-center w-full p-4 hover:bg-slate-800 transition ${activeView === item.name ? 'border-l-4 border-[#f2b938] bg-slate-800 text-[#f2b938]' : ''}`}
            >
              <Icon d={item.icon} />
              {isSidebarOpen && <span className="ml-4 text-sm font-medium">{item.name}</span>}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white p-5 shadow-sm border-b flex justify-between items-center shrink-0">
          <h2 className="text-xl font-semibold uppercase tracking-wider text-slate-700">{activeView}</h2>
          <button onClick={() => { localStorage.clear(); window.location.href = '/login'; }} className="text-sm font-medium text-red-500 hover:text-red-700 transition">
            Logout
          </button>
        </header>

        <section className="p-6 md:p-8 flex-1 overflow-y-auto">
          <div className="bg-white p-6 md:p-8 rounded-lg border border-gray-200 shadow-sm min-h-full">
            {activeView === 'Dashboard' && <DashboardContent />}
            {activeView === 'Users' && <UsersContent />}
            {activeView === 'Courses' && <CoursesContent />}
            {activeView === 'Messages' && <MessagesContent />}
            {activeView === 'Settings' && <SettingsContent />}
          </div>
        </section>
      </main>
    </div>
  );
}

/* =========================================
   1. DASHBOARD COMPONENT
========================================= */
const DashboardContent = () => {
  const [stats, setStats] = useState({ courses: 0, users: 0, messages: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const courseRes = await fetch('http://localhost:5000/api/courses');
        const courses = await courseRes.json();
        
        const msgRes = await fetch('http://localhost:5000/api/contact');
        const messages = await msgRes.json();
        
        setStats({ courses: courses.length || 0, users: 125, messages: messages.length || 0 });
      } catch (err) {
        console.error("Failed to load stats");
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="animate-in fade-in duration-500">
      <h3 className="text-2xl font-semibold text-slate-800 mb-2">System Overview</h3>
      <p className="text-gray-500 mb-8">Welcome back! Here is what's happening on your platform today.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-blue-50 border border-blue-100 p-6 rounded-lg">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-1">Total Courses</p>
          <h4 className="text-4xl font-bold text-blue-900">{stats.courses}</h4>
        </div>
        <div className="bg-green-50 border border-green-100 p-6 rounded-lg">
          <p className="text-green-600 text-sm font-semibold uppercase tracking-wider mb-1">Total Users</p>
          <h4 className="text-4xl font-bold text-green-900">{stats.users}</h4>
        </div>
        <div className="bg-purple-50 border border-purple-100 p-6 rounded-lg">
          <p className="text-purple-600 text-sm font-semibold uppercase tracking-wider mb-1">Messages</p>
          <h4 className="text-4xl font-bold text-purple-900">{stats.messages}</h4>
        </div>
        <div className="bg-amber-50 border border-amber-100 p-6 rounded-lg">
          <p className="text-amber-600 text-sm font-semibold uppercase tracking-wider mb-1">Active Sessions</p>
          <h4 className="text-4xl font-bold text-amber-900">42</h4>
        </div>
      </div>
    </div>
  );
};

/* =========================================
   2. COURSES COMPONENT (Full CRUD)
========================================= */
const CoursesContent = () => {
  const [courses, setCourses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ title: '', category: '', description: '', image_url: '' });
  const [editingId, setEditingId] = useState(null);

  const fetchCourses = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/courses');
      const data = await response.json();
      setCourses(data);
    } catch (err) {
      console.error("Error fetching courses", err);
    }
  };

  useEffect(() => { fetchCourses(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const url = editingId ? `http://localhost:5000/api/courses/${editingId}` : 'http://localhost:5000/api/courses';
    const method = editingId ? 'PUT' : 'POST';

    try {
      await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify(formData)
      });
      setIsModalOpen(false);
      setFormData({ title: '', category: '', description: '', image_url: '' });
      setEditingId(null);
      fetchCourses();
    } catch (err) {
      alert("Error saving course");
    }
  };

  const handleEdit = (course) => {
    setEditingId(course.id);
    setFormData(course);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this course?")) return;
    const token = localStorage.getItem('token');
    try {
      await fetch(`http://localhost:5000/api/courses/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      fetchCourses();
    } catch (err) {
      alert("Error deleting course");
    }
  };

  return (
    <div className="animate-in fade-in duration-500 relative min-h-[400px]">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-2xl font-semibold text-slate-800">Course Manager</h3>
          <p className="text-gray-500 text-sm">Add, update, or remove courses from the catalog.</p>
        </div>
        <button 
          onClick={() => { setEditingId(null); setFormData({title:'', category:'', description:'', image_url:''}); setIsModalOpen(true); }}
          className="bg-[#f2b938] hover:bg-[#dfa728] text-white px-4 py-2 rounded shadow-sm text-sm font-medium transition"
        >
          + Add New Course
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-600 text-sm uppercase tracking-wider">
              <th className="p-3 border-b">ID</th>
              <th className="p-3 border-b">Course Title</th>
              <th className="p-3 border-b">Category</th>
              <th className="p-3 border-b text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {courses.length === 0 && <tr><td colSpan="4" className="text-center p-4">No courses found.</td></tr>}
            {courses.map(course => (
              <tr key={course.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{course.id}</td>
                <td className="p-3 font-medium text-slate-800">{course.title}</td>
                <td className="p-3"><span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">{course.category}</span></td>
                <td className="p-3 flex justify-center gap-3">
                  <button onClick={() => handleEdit(course)} className="text-blue-600 hover:underline">Edit</button>
                  <button onClick={() => handleDelete(course.id)} className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <div className="absolute inset-0 bg-white/90 backdrop-blur-sm z-10 flex items-center justify-center p-4">
          <form onSubmit={handleSubmit} className="bg-white border border-gray-200 shadow-xl rounded-lg p-6 w-full max-w-md">
            <h4 className="text-lg font-bold mb-4">{editingId ? 'Edit Course' : 'Create New Course'}</h4>
            <div className="space-y-3">
              <input required type="text" placeholder="Course Title" className="w-full border p-2 rounded focus:outline-[#f2b938]" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
              <input required type="text" placeholder="Category (e.g., Literacy)" className="w-full border p-2 rounded focus:outline-[#f2b938]" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} />
              <textarea placeholder="Description" className="w-full border p-2 rounded h-24 focus:outline-[#f2b938]" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} />
              <input type="text" placeholder="Image URL" className="w-full border p-2 rounded focus:outline-[#f2b938]" value={formData.image_url} onChange={e => setFormData({...formData, image_url: e.target.value})} />
            </div>
            <div className="mt-5 flex justify-end gap-2">
              <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">Cancel</button>
              <button type="submit" className="px-4 py-2 bg-[#f2b938] text-white rounded hover:bg-[#dfa728]">Save</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

/* =========================================
   3. USERS COMPONENT 
========================================= */
const UsersContent = () => {
  const dummyUsers = [
    { id: 1, username: 'admin', email: 'admin@moodle.com', role: 'admin' },
    { id: 2, username: 'john_doe', email: 'john@example.com', role: 'user' },
    { id: 3, username: 'sara_smith', email: 'sara@example.com', role: 'user' }
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <h3 className="text-2xl font-semibold text-slate-800 mb-2">User Management</h3>
      <p className="text-gray-500 text-sm mb-6">View and manage registered users on the platform.</p>
      
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-600 text-sm uppercase tracking-wider">
            <th className="p-3 border-b">ID</th>
            <th className="p-3 border-b">Username</th>
            <th className="p-3 border-b">Email</th>
            <th className="p-3 border-b">Role</th>
          </tr>
        </thead>
        <tbody className="text-gray-700 text-sm">
          {dummyUsers.map(user => (
            <tr key={user.id} className="border-b hover:bg-gray-50">
              <td className="p-3">{user.id}</td>
              <td className="p-3 font-medium">{user.username}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3">
                <span className={`px-2 py-1 text-xs rounded-full ${user.role === 'admin' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-700'}`}>
                  {user.role}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

/* =========================================
   4. MESSAGES COMPONENT (NAYA PANEL)
========================================= */
const MessagesContent = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/contact');
        const data = await response.json();
        setMessages(data);
      } catch (err) {
        console.error("Error fetching messages", err);
      } finally {
        setLoading(false);
      }
    };
    fetchMessages();
  }, []);

  return (
    <div className="animate-in fade-in duration-500">
      <h3 className="text-2xl font-semibold text-slate-800 mb-2">Contact Messages</h3>
      <p className="text-gray-500 text-sm mb-6">View inquiries and messages submitted via the Contact Us form.</p>
      
      {loading ? (
        <p className="text-gray-500">Loading messages...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-600 text-sm uppercase tracking-wider">
                <th className="p-3 border-b">Date</th>
                <th className="p-3 border-b">Name</th>
                <th className="p-3 border-b">Email</th>
                <th className="p-3 border-b">Subject</th>
                <th className="p-3 border-b w-1/3">Message</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm">
              {messages.length === 0 && (
                <tr><td colSpan="5" className="text-center p-4">No messages found.</td></tr>
              )}
              {messages.map(msg => (
                <tr key={msg.id} className="border-b hover:bg-gray-50 align-top">
                  <td className="p-3 whitespace-nowrap">
                    {new Date(msg.created_at).toLocaleDateString()}
                  </td>
                  <td className="p-3 font-medium">{msg.name}</td>
                  <td className="p-3 text-blue-600">
                    <a href={`mailto:${msg.email}`}>{msg.email}</a>
                  </td>
                  <td className="p-3 font-medium">{msg.subject}</td>
                  <td className="p-3 text-gray-600">{msg.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

/* =========================================
   5. SETTINGS COMPONENT
========================================= */
const SettingsContent = () => (
  <div className="animate-in fade-in duration-500 max-w-2xl">
    <h3 className="text-2xl font-semibold text-slate-800 mb-2">General Settings</h3>
    <p className="text-gray-500 text-sm mb-6">Configure platform preferences.</p>
    
    <div className="space-y-6">
      <div className="bg-gray-50 p-5 rounded border border-gray-200">
        <h4 className="font-semibold text-gray-700 mb-2">Platform Name</h4>
        <input type="text" defaultValue="Lambda Premium Moodle Theme" className="w-full border p-2 rounded focus:outline-[#f2b938]" />
      </div>
      
      <div className="bg-gray-50 p-5 rounded border border-gray-200">
        <h4 className="font-semibold text-gray-700 mb-2">Allow New Registrations</h4>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" defaultChecked className="w-4 h-4 text-[#f2b938]" />
          <span>Enable public registration page</span>
        </label>
      </div>

      <button className="bg-[#f2b938] text-white px-6 py-2 rounded shadow-sm hover:bg-[#dfa728]">
        Save Changes
      </button>
    </div>
  </div>
);