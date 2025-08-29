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
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-orange-50 to-rose-100 flex items-start justify-center py-12 px-6">
      <div className="w-full max-w-lg">

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-orange-800 mb-2">Welcome back</h2>
          <p className="text-orange-700/70">Your safe space awaits</p>
        </div>

        <AuthCard
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          onSubmit={handleEnter}
        />

        <div className="text-center mt-6">
          <Link to="/signup" className="text-orange-600 font-semibold hover:underline">New here? Join Homi</Link>
        </div>
      </div>
    </div>
  );
}
