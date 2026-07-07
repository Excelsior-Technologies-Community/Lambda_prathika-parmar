import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [formData, setFormData] = useState({ username: "", email: "", password: "", confirmPassword: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match");
    }

    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Account created successfully, redirecting to login....");
        setFormData({ username: "", email: "", password: "", confirmPassword: "" });

        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        setError(data.error || "Registration failed. Email may already exist");
      }
    } catch (err) {
      setError("Server connection failed. Please ensure backend is running.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div 
      className="w-full bg-white p-8 sm:p-10 rounded shadow-md border border-gray-200" 
      style={{ maxWidth: '450px', margin: '50px auto' }}
    >
      
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-light text-slate-800 mb-2">Create Account</h2>
        <p className="text-sm text-gray-500">Join our Moodle learning platform</p>
      </div>

      {/* Error / Success Message Alerts */}
      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-3 mb-6 text-sm rounded" role="alert">
          {error}
        </div>
      )}
      {success && (
        <div className="bg-green-50 border-l-4 border-green-500 text-green-700 p-3 mb-6 text-sm rounded" role="alert">
          {success}
        </div>
      )}

      {/* Register Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* Username */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
          <input 
            type="text" 
            placeholder="johndoe" 
            required
            autoComplete="username"
            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#f2b938] focus:border-transparent transition-all"
            value={formData.username}
            onChange={(e) => setFormData({...formData, username: e.target.value})}
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input 
            type="email" 
            placeholder="john@example.com" 
            required
            autoComplete="email"
            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#f2b938] focus:border-transparent transition-all"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
        
        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input 
            type="password" 
            placeholder="••••••••" 
            required
            autoComplete="new-password"
            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#f2b938] focus:border-transparent transition-all"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
          <input 
            type="password" 
            placeholder="••••••••" 
            required
            autoComplete="new-password"
            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#f2b938] focus:border-transparent transition-all"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
          />
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          disabled={isLoading}
          className={`w-full text-white font-medium py-3 mt-4 rounded shadow transition duration-150 ease-in-out ${
            isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#f2b938] hover:bg-[#dfa728]'
          }`}
        >
          {isLoading ? 'Creating account...' : 'Register'}
        </button>
      </form>

      {/* Footer Link */}
      <div className="mt-8 text-center text-sm text-gray-600 border-t pt-5">
        Already have an account? <Link to="/login" className="text-[#f2b938] hover:underline font-medium ml-1">Log In</Link>
      </div>

    </div>
  );
}
