import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    // Mock signup - in a real app, you would make an API call here
    console.log("Signup data:", formData);
    
    // Redirect to dashboard after successful signup
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 flex items-start justify-center py-12 px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>
      <div className="w-full max-w-lg relative z-10">

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Create your account</h2>
          <p className="text-purple-200">Start your journey with us</p>
        </div>

        {error && (
          <div className="mb-6 bg-red-500/20 border-l-4 border-red-400 p-4 rounded-lg">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-red-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-200">{error}</p>
              </div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-black/40 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-purple-400/30">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="w-full p-3 rounded-xl border border-purple-400/50 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-black/40 text-white placeholder-purple-300/50"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                className="w-full p-3 rounded-xl border border-purple-400/50 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-black/40 text-white placeholder-purple-300/50"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
                className="w-full p-3 rounded-xl border border-purple-400/50 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-black/40 text-white placeholder-purple-300/50"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-2">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                required
                className="w-full p-3 rounded-xl border border-purple-400/50 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-black/40 text-white placeholder-purple-300/50"
              />
            </div>
          </div>

          <div className="mt-6 flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-purple-400 rounded"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-purple-200">
              I agree to the{' '}
              <a href="#" className="font-medium text-purple-300 hover:text-purple-200">
                Terms
              </a>{' '}
              and{' '}
              <a href="#" className="font-medium text-purple-300 hover:text-purple-200">
                Privacy Policy
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full mt-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:opacity-90 transition-opacity"
          >
            Create Account
          </button>
        </form>

        <div className="text-center mt-6">
          <span className="text-purple-200">Already have an account? </span>
          <Link to="/login" className="text-purple-300 font-semibold hover:underline">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
