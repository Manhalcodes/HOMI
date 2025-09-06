import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthCard from "../components/AuthCard";

export default function Login() {
  // mock-only login - no backend
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleEnter = (e) => {
    e.preventDefault();
    // mock flow — pretend success and navigate to dashboard
    nav("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 flex items-center justify-center py-12 px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-lg relative z-10">
        {/* Header section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white text-2xl font-bold mb-4 shadow-xl">
            H
          </div>
          <h1 className="text-4xl font-bold text-white mb-3 font-space-grotesk">Welcome back</h1>
          <p className="text-lg text-purple-200">Your safe space awaits you</p>
        </div>

        <AuthCard
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          onSubmit={handleEnter}
        />

        {/* Footer links */}
        <div className="text-center mt-8 space-y-4">
          <Link 
            to="/signup" 
            className="inline-flex items-center gap-2 text-purple-300 font-semibold hover:text-purple-200 hover:underline transition-colors duration-200"
          >
            <span>New here? Join Homi</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          
          <div className="text-sm text-purple-300/70">
            <Link to="/" className="hover:text-purple-200 transition-colors duration-200">
              ← Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
