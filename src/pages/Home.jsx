import React from "react";
import { Link } from "react-router-dom";
import HeroCard from "../components/HeroCard";

/*
  Landing page — autumn theme, centered hero card and CTA.
*/
export default function Home() {
  // Replace the quote text below with the exact quote you shared earlier if you want.
  const autumnQuote = "always a fall girly, the kind that wraps mornings in cozy and evenings in warm tea.";

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-orange-50 to-rose-100 flex flex-col items-center relative overflow-hidden">
      <main className="flex-1 w-full flex items-center justify-center px-6">
        <div className="max-w-3xl w-full text-center relative">
          {/* Pencil Image with Bounce Animation */}
          <div className="absolute -top-4 -left-16">
            <img 
              src="homipencil.png.png" 
              alt="Decorative pencil" 
              className="w-32 h-auto animate-bounce-slow opacity-90 -rotate-12"
              style={{
                animationDuration: '3s',
                animationIterationCount: 'infinite',
                animationTimingFunction: 'ease-in-out'
              }}
            />
          </div>
          <h2 className="text-5xl font-bold text-homi-olive mb-2 font-space-grotesk">HOMI</h2>
          <p className="text-orange-700/80 mb-8">Your gentle companion for journaling and self-reflection.</p>

          <HeroCard quote={autumnQuote} />

          <div className="mt-10">
            <Link to="/login" className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-orange-400 to-rose-400 text-white shadow-lg hover:brightness-105">
              Enter Your Safe Space →
            </Link>
          </div>
        </div>
      </main>

      <footer className="w-full py-6 text-center text-xs text-gray-400">© Homi</footer>
    </div>
  );
}
