import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';

export default function LoginPage() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const loginUrl = "http://localhost:5000/api/users/login"; 
    console.log("Sending request to:", loginUrl); // Console mein check karein

    try {
        const response = await fetch(loginUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error || `Error ${response.status}: Route not found`);
        }

        const data = await response.json();

        if (response.ok) {
    // 1. Token aur User details save karein
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user)); 
    
    // 2. ROLE BASED REDIRECTION
    if (data.user.role === 'admin') {
        navigate('/admin'); // Admin 
    } else {
        navigate('/');      // user
    }
} else {
    setError(data.error || "Login failed");
}
    } catch (err) {
        console.error("Fetch Error:", err);
        setError(err.message);
    } finally {
        setIsLoading(false);
    }
};

    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
            <div className="bg-white p-8 md:p-10 rounded-sm shadow-md border border-gray-200 w-full max-w-md">
                
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-light text-slate-800 mb-2">Welcome Back</h2>
                    <p className="text-sm text-gray-500">Sign in to access your Moodle account</p>
                </div>

                {error && (
                    <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-3 mb-6 text-sm" role="alert">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input 
                            type="email" 
                            placeholder="admin@example.com" 
                            required
                            autoComplete="username"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#f2b938] focus:border-transparent transition-shadow"
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                    </div>
                    
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                        </div>
                        <input 
                            type="password" 
                            placeholder="••••••••" 
                            required
                            autoComplete="current-password"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#f2b938] focus:border-transparent transition-shadow"
                            onChange={(e) => setFormData({...formData, password: e.target.value})}
                        />
                    </div>

                    <button 
                        type="submit" 
                        disabled={isLoading}
                        className={`w-full text-white font-medium py-2.5 rounded shadow-sm transition duration-150 ease-in-out ${
                            isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#f2b938] hover:bg-[#dfa728]'
                        }`}
                    >
                        {isLoading ? 'Signing in...' : 'Log In'}
                    </button>
                </form>

                <div className="mt-8 text-center text-sm text-gray-600 border-t pt-4">
                    Don't have an account? <Link to="/register" className="text-[#f2b938] hover:underline font-medium">Create one</Link>
                </div>
            </div>
        </div>
    );
}