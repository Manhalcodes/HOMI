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
    <div className="h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 flex flex-col items-center relative overflow-hidden animate-fade-in-up">
      {/* Apple Liquid Glass Effect - Dark Theme */}
      <div className="absolute inset-0 z-10">
        {/* Primary Glass Layer - Dark Theme */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-2xl"></div>
        
        {/* Liquid Glass Orbs - Dark Theme */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/20 via-pink-400/15 to-transparent rounded-full blur-3xl animate-gentle-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-pink-400/18 via-indigo-400/12 to-transparent rounded-full blur-3xl animate-gentle-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-indigo-400/15 via-purple-400/10 to-transparent rounded-full blur-2xl animate-gentle-float" style={{animationDelay: '4s'}}></div>
        
        {/* Glass Refraction Effects - Dark Theme */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-purple-400/5 to-transparent"></div>
        <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-purple-400/8 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-pink-400/6 rounded-full blur-lg animate-pulse" style={{animationDelay: '3s'}}></div>
        
        {/* Subtle Glass Reflections - Dark Theme */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-purple-400/30 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-pink-400/35 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-indigo-400/25 rounded-full animate-pulse" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute bottom-10 right-10 w-1 h-1 bg-white/22 rounded-full animate-pulse" style={{animationDelay: '3.5s'}}></div>
        
        {/* Additional Dark Theme Glass Elements */}
        <div className="absolute top-1/6 right-1/6 w-48 h-48 bg-gradient-to-br from-indigo-400/25 via-purple-400/15 to-transparent rounded-full blur-2xl animate-gentle-float" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-1/6 left-1/6 w-40 h-40 bg-gradient-to-br from-pink-400/20 via-purple-400/12 to-transparent rounded-full blur-xl animate-gentle-float" style={{animationDelay: '3.5s'}}></div>
        
        {/* Floating Glass Shards - Dark Theme */}
        <div className="absolute top-1/3 right-1/5 w-16 h-16 bg-purple-400/12 rounded-full blur-lg animate-gentle-drift" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute bottom-1/3 left-1/5 w-12 h-12 bg-pink-400/10 rounded-full blur-md animate-floating-glow" style={{animationDelay: '4.5s'}}></div>
        <div className="absolute top-2/3 right-1/3 w-8 h-8 bg-indigo-400/14 rounded-full blur-sm animate-light-dance" style={{animationDelay: '1.2s'}}></div>
        
        {/* Gentle Glass Waves - Dark Theme */}
        <div className="absolute top-1/4 left-1/2 w-32 h-32 bg-gradient-to-r from-purple-400/8 to-transparent rounded-full blur-2xl animate-pulse" style={{animationDelay: '3s', animationDuration: '6s'}}></div>
        <div className="absolute bottom-1/4 right-1/2 w-24 h-24 bg-gradient-to-l from-pink-400/6 to-transparent rounded-full blur-xl animate-pulse" style={{animationDelay: '5s', animationDuration: '8s'}}></div>
      </div>

      {/* Stunning Background Elements - COOL ANIMATIONS */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Main gradient orbs - DARK THEME */}
        <div className="absolute -top-60 -right-60 w-[800px] h-[800px] bg-gradient-to-br from-purple-500/30 via-pink-500/25 to-indigo-500/30 rounded-full blur-3xl animate-gentle-float"></div>
        <div className="absolute -bottom-60 -left-60 w-[700px] h-[700px] bg-gradient-to-br from-indigo-500/30 via-purple-500/25 to-pink-500/30 rounded-full blur-3xl animate-gentle-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-pink-500/25 via-purple-500/20 to-indigo-500/25 rounded-full blur-3xl animate-gentle-float" style={{animationDelay: '4s'}}></div>
        
        {/* Additional floating orbs for more movement - DARK THEME */}
        <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-gradient-to-br from-purple-400/20 via-pink-400/15 to-indigo-400/20 rounded-full blur-2xl animate-gentle-drift" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-20 w-[350px] h-[350px] bg-gradient-to-br from-indigo-400/20 via-purple-400/15 to-pink-400/20 rounded-full blur-2xl animate-gentle-drift" style={{animationDelay: '3s'}}></div>

        {/* Floating geometric shapes - DARK THEME */}
        <div className="absolute top-20 left-20 w-6 h-6 bg-gradient-to-br from-purple-500/60 to-pink-500/60 rounded-full animate-gentle-wave" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-32 right-40 w-4 h-4 bg-gradient-to-br from-indigo-500/70 to-purple-500/70 rounded-full animate-soft-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-40 left-40 w-8 h-8 bg-gradient-to-br from-pink-500/55 to-purple-500/55 rounded-full animate-gentle-rotate" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-gradient-to-br from-purple-500/65 to-indigo-500/65 rounded-full animate-light-dance" style={{animationDelay: '3s'}}></div>
        
        {/* Additional floating shapes for more movement - DARK THEME */}
        <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-gradient-to-br from-pink-500/50 to-purple-500/50 rounded-full animate-gentle-drift" style={{animationDelay: '0.8s'}}></div>
        <div className="absolute top-2/3 right-1/3 w-4 h-4 bg-gradient-to-br from-indigo-500/55 to-pink-500/55 rounded-full animate-soft-pulse" style={{animationDelay: '2.2s'}}></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-gradient-to-br from-purple-500/60 to-indigo-500/60 rounded-full animate-light-dance" style={{animationDelay: '3.8s'}}></div>

        {/* Animated mesh gradient - DARK THEME */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/20 animate-pulse" style={{animationDuration: '8s'}}></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-indigo-500/15 via-transparent to-purple-500/15 animate-pulse" style={{animationDuration: '12s', animationDelay: '2s'}}></div>
        
        {/* Subtle grid pattern - DARK THEME */}
        <div className="absolute inset-0 opacity-15" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(147,51,234,0.2) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>

        {/* Floating particles - DARK THEME */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-purple-500/50 rounded-full animate-gentle-drift" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-pink-500/55 rounded-full animate-soft-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-indigo-500/52 rounded-full animate-light-dance" style={{animationDelay: '3.5s'}}></div>
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-purple-500/48 rounded-full animate-gentle-wave" style={{animationDelay: '4.5s'}}></div>
        
        {/* Additional particles for more movement - DARK THEME */}
        <div className="absolute top-1/6 right-1/6 w-1 h-1 bg-pink-500/45 rounded-full animate-gentle-drift" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-1/6 left-1/6 w-1.5 h-1.5 bg-indigo-500/50 rounded-full animate-soft-pulse" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute top-5/6 left-1/2 w-1 h-1 bg-purple-500/45 rounded-full animate-light-dance" style={{animationDelay: '4s'}}></div>

        {/* Soft light rays - DARK THEME */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/25 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-pink-500/25 to-transparent animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-indigo-500/23 to-transparent animate-pulse" style={{animationDelay: '5s'}}></div>
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent animate-pulse" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-pink-500/20 to-transparent animate-pulse" style={{animationDelay: '4.5s'}}></div>
        
        {/* Floating Light Particles - DARK THEME */}
        <div className="absolute top-1/5 left-1/6 w-1 h-1 bg-purple-500/60 rounded-full animate-gentle-drift" style={{animationDelay: '0.8s'}}></div>
        <div className="absolute top-3/5 right-1/6 w-1.5 h-1.5 bg-pink-500/55 rounded-full animate-soft-pulse" style={{animationDelay: '2.2s'}}></div>
        <div className="absolute bottom-1/5 left-1/3 w-1 h-1 bg-indigo-500/58 rounded-full animate-light-dance" style={{animationDelay: '3.8s'}}></div>
        <div className="absolute bottom-2/5 right-1/4 w-1.2 h-1.2 bg-purple-500/52 rounded-full animate-gentle-wave" style={{animationDelay: '4.2s'}}></div>
        
        {/* Additional light particles for more movement - DARK THEME */}
        <div className="absolute top-2/5 left-1/5 w-0.5 h-0.5 bg-pink-500/50 rounded-full animate-gentle-drift" style={{animationDelay: '1.2s'}}></div>
        <div className="absolute bottom-3/5 right-1/5 w-1 h-1 bg-indigo-500/55 rounded-full animate-soft-pulse" style={{animationDelay: '3.2s'}}></div>
        <div className="absolute top-4/5 right-1/3 w-0.8 h-0.8 bg-purple-500/50 rounded-full animate-light-dance" style={{animationDelay: '4.8s'}}></div>
        
        {/* Gentle Floating Orbs - DARK THEME */}
        <div className="absolute top-1/6 left-1/4 w-20 h-20 bg-gradient-to-br from-purple-500/45 to-transparent rounded-full blur-xl animate-floating-glow" style={{animationDelay: '2.8s'}}></div>
        <div className="absolute bottom-1/6 right-1/4 w-16 h-16 bg-gradient-to-br from-pink-500/42 to-transparent rounded-full blur-lg animate-gentle-drift" style={{animationDelay: '4.8s'}}></div>
        <div className="absolute top-2/3 left-1/5 w-12 h-12 bg-gradient-to-br from-indigo-500/40 to-transparent rounded-full blur-md animate-light-dance" style={{animationDelay: '1.8s'}}></div>
        
        {/* Additional floating orbs for more movement - DARK THEME */}
        <div className="absolute top-1/3 right-1/6 w-14 h-14 bg-gradient-to-br from-purple-500/35 to-transparent rounded-full blur-lg animate-gentle-float" style={{animationDelay: '3.5s'}}></div>
        <div className="absolute bottom-1/3 left-1/6 w-18 h-18 bg-gradient-to-br from-pink-500/38 to-transparent rounded-full blur-xl animate-floating-glow" style={{animationDelay: '5.5s'}}></div>
        <div className="absolute top-1/2 right-1/5 w-10 h-10 bg-gradient-to-br from-indigo-500/35 to-transparent rounded-full blur-md animate-gentle-drift" style={{animationDelay: '2.2s'}}></div>
        
        {/* Subtle Light Streaks - DARK THEME */}
        <div className="absolute top-1/3 left-0 w-32 h-px bg-gradient-to-r from-transparent via-purple-500/23 to-transparent animate-pulse" style={{animationDelay: '2.5s', animationDuration: '7s'}}></div>
        <div className="absolute bottom-1/3 right-0 w-28 h-px bg-gradient-to-l from-transparent via-pink-500/21 to-transparent animate-pulse" style={{animationDelay: '4.5s', animationDuration: '9s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-indigo-500/19 to-transparent animate-pulse" style={{animationDelay: '3.2s', animationDuration: '6s'}}></div>
        
        {/* Additional light streaks for more movement - DARK THEME */}
        <div className="absolute top-1/6 right-0 w-20 h-px bg-gradient-to-l from-transparent via-purple-500/17 to-transparent animate-pulse" style={{animationDelay: '1.5s', animationDuration: '8s'}}></div>
        <div className="absolute bottom-1/6 left-0 w-24 h-px bg-gradient-to-r from-transparent via-pink-500/15 to-transparent animate-pulse" style={{animationDelay: '5.5s', animationDuration: '10s'}}></div>
        <div className="absolute top-3/4 left-1/4 w-16 h-px bg-gradient-to-r from-transparent via-indigo-500/13 to-transparent animate-pulse" style={{animationDelay: '4s', animationDuration: '5s'}}></div>
        </div>

      <main className="flex-1 w-full flex items-center justify-center px-4 py-4 relative z-10">
        {/* Shimmer Effect Overlay - DARK THEME */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/8 to-transparent animate-light-shimmer pointer-events-none"></div>
        
        <div className="max-w-5xl w-full text-center relative">
          {/* Enhanced Pencil Image with Advanced Animation */}
          <div className="absolute -top-8 -left-20 z-20 group magnetic-hover smooth-hover">
            <div className="relative">
              <img 
                src="homipencil.png.png" 
                alt="Decorative pencil" 
                className="w-36 h-auto animate-gentle-rotate opacity-90 -rotate-12 drop-shadow-lg group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                style={{
                  animationDuration: '8s',
                  animationIterationCount: 'infinite',
                  animationTimingFunction: 'ease-in-out'
                }}
              />
              <div className="absolute inset-0 bg-orange-400/20 rounded-full blur-lg group-hover:bg-orange-400/40 transition-all duration-500 -z-10 animate-glow-pulse"></div>
            </div>
          </div>

          {/* Enhanced Tea Image with Advanced Animation */}
          <div className="absolute -top-6 -right-20 z-20 group magnetic-hover smooth-hover">
            <div className="relative">
              <img 
                src="homitea.png.png" 
                alt="Decorative tea cup" 
                className="w-28 h-auto animate-smooth-float opacity-80 rotate-12 drop-shadow-lg group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                style={{
                  animationDuration: '5s',
                  animationIterationCount: 'infinite',
                  animationTimingFunction: 'ease-in-out',
                  animationDelay: '1s'
                }}
              />
              <div className="absolute inset-0 bg-rose-400/20 rounded-full blur-lg group-hover:bg-rose-400/40 transition-all duration-500 -z-10 animate-glow-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>

          {/* Enhanced Main heading with dramatic animations */}
          <div className="mb-6 relative gentle-hover">
            <div className="relative inline-block">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-3 font-space-grotesk tracking-tight relative z-10">
                <span className="inline-block hover:scale-105 hover:rotate-1 transition-all duration-300 cursor-default group/letter interactive-text" style={{animationDelay: '0.2s'}}>H</span>
                <span className="inline-block hover:scale-105 hover:rotate-1 transition-all duration-300 cursor-default group/letter interactive-text" style={{animationDelay: '0.4s'}}>O</span>
                <span className="inline-block hover:scale-105 hover:rotate-1 transition-all duration-300 cursor-default group/letter interactive-text" style={{animationDelay: '0.6s'}}>M</span>
                <span className="inline-block hover:scale-105 hover:rotate-1 transition-all duration-300 cursor-default group/letter interactive-text" style={{animationDelay: '0.8s'}}>I</span>
              </h1>
              {/* Animated underline with shimmer effect */}
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-4 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>
            <p className="text-lg text-purple-200 max-w-xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              Your gentle companion for journaling and self-reflection
            </p>
          </div>

          <HeroCard quote={autumnQuote} />

          {/* Enhanced CTA section */}
          <div className="mt-6 space-y-3">
            <Link 
              to="/login" 
              className="group inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white font-semibold text-base shadow-2xl hover:shadow-purple-200/50 hover:scale-125 transform transition-all duration-500 hover:brightness-110 relative overflow-hidden btn-modern interactive-button animate-glow-pulse smooth-hover"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative z-10">Enter Your Safe Space</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            
            <div className="flex items-center justify-center gap-6 text-sm text-purple-300 mt-6">
              <div className="flex items-center gap-2 group/trust">
                <div className="w-2 h-2 bg-purple-400 rounded-full group-hover/trust:scale-125 transition-transform duration-300"></div>
                <span className="group-hover/trust:text-purple-200 transition-colors duration-300">100% Private</span>
              </div>
              <div className="flex items-center gap-2 group/trust">
                <div className="w-2 h-2 bg-pink-400 rounded-full group-hover/trust:scale-125 transition-transform duration-300"></div>
                <span className="group-hover/trust:text-pink-200 transition-colors duration-300">AI-Powered</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full py-8 text-center text-sm text-purple-300 relative z-10">
        <div className="flex items-center justify-center gap-2">
          <span>© Homi</span>
          <span>•</span>
          <span>Made with warmth and care</span>
        </div>
      </footer>
    </div>
  );
}
