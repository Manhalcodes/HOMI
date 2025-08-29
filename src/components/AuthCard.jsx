import React from "react";

export default function AuthCard({ email, password, setEmail, setPassword, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="bg-white rounded-2xl p-8 shadow-xl border border-orange-100">
      <label className="block text-sm font-semibold text-orange-700 mb-2">Email</label>
      <div className="mb-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="w-full p-3 rounded-xl border border-orange-200 focus:outline-none"
        />
      </div>

      <label className="block text-sm font-semibold text-orange-700 mb-2">Password</label>
      <div className="mb-6">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          className="w-full p-3 rounded-xl border border-orange-200 focus:outline-none"
        />
      </div>

      <button type="submit" className="w-full py-3 rounded-full bg-gradient-to-r from-orange-400 to-rose-400 text-white font-semibold shadow-lg">
        Enter My Space
      </button>
    </form>
  );
}
