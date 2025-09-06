import React, { useState } from "react";

export default function AuthCard({ email, password, setEmail, setPassword, onSubmit }) {
  const [focusedField, setFocusedField] = useState(null);

  return (
    <div className="relative group">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md rounded-3xl shadow-2xl border border-purple-400/30"></div>
      
      {/* Gradient border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/40 via-pink-500/40 to-indigo-500/40 rounded-3xl p-[1px]">
        <div className="w-full h-full bg-black/20 backdrop-blur-xl rounded-3xl"></div>
      </div>
      
      <form onSubmit={onSubmit} className="relative bg-black/30 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-purple-400/30">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">Welcome back</h2>
          <p className="text-purple-200">Sign in to your safe space</p>
        </div>

        {/* Email field */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-white mb-3">
            Email Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              placeholder="your@email.com"
              className={`w-full pl-12 pr-4 py-4 rounded-2xl border-2 transition-all duration-300 focus:outline-none text-white placeholder-purple-300/50 ${
                focusedField === 'email' 
                  ? 'border-purple-400 bg-purple-500/20 shadow-lg shadow-purple-500/20' 
                  : 'border-purple-400/50 hover:border-purple-400/70 bg-black/40'
              }`}
            />
          </div>
        </div>

        {/* Password field */}
        <div className="mb-8">
          <label className="block text-sm font-semibold text-white mb-3">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setFocusedField('password')}
              onBlur={() => setFocusedField(null)}
              placeholder="••••••••"
              className={`w-full pl-12 pr-4 py-4 rounded-2xl border-2 transition-all duration-300 focus:outline-none text-white placeholder-purple-300/50 ${
                focusedField === 'password' 
                  ? 'border-purple-400 bg-purple-500/20 shadow-lg shadow-purple-500/20' 
                  : 'border-purple-400/50 hover:border-purple-400/70 bg-black/40'
              }`}
            />
          </div>
        </div>

        {/* Submit button */}
        <button 
          type="submit" 
          className="group w-full py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-lg shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-[1.02] transform transition-all duration-300 hover:brightness-110"
        >
          <span className="flex items-center justify-center gap-2">
            <span>Enter My Space</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </button>

        {/* Additional options */}
        <div className="mt-6 text-center">
          <a href="#" className="text-sm text-purple-300 hover:text-purple-200 hover:underline transition-colors duration-200">
            Forgot your password?
          </a>
        </div>
      </form>
    </div>
  );
}
