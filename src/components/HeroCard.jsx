import React from "react";

/*
  Card used on landing. Keeps shape, title and three small feature items.
*/
export default function HeroCard({ quote }) {
  return (
            <div className="relative group interactive-card card-hover">
              {/* Apple Liquid Glass Effect */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl rounded-3xl shadow-2xl border border-white/20 animate-gentle-pulse"></div>
              
              {/* Liquid Glass Orbs */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/15 rounded-full blur-2xl animate-gentle-float"></div>
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-white/12 rounded-full blur-xl animate-gentle-float" style={{animationDelay: '2s'}}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/8 rounded-full blur-lg animate-gentle-float" style={{animationDelay: '4s'}}></div>

              {/* Glass Refraction Layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/3 rounded-3xl"></div>

              {/* Enhanced Glassmorphism background */}
              <div className="absolute inset-0 bg-white/20 backdrop-blur-2xl rounded-3xl border border-white/30"></div>

              {/* Gradient border effect - DARK THEME */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/40 via-pink-500/40 to-indigo-500/40 rounded-3xl p-[1px]">
                <div className="w-full h-full bg-black/20 backdrop-blur-xl rounded-3xl"></div>
              </div>

              <div className="relative bg-black/20 backdrop-blur-2xl rounded-3xl p-6 text-left mx-2 shadow-2xl border border-purple-400/30 glass-effect">
                {/* Header section */}
                <div className="mb-6">
                  <h3 className="text-3xl font-extrabold text-white mb-3 leading-tight drop-shadow-sm">
                    Welcome home, gentle soul
                  </h3>
                  <p className="text-base text-purple-200 leading-relaxed drop-shadow-sm">
                    Here, you can write without judgment, reflect without pressure, and grow at your own pace. Your AI friend is here to listen, understand, and gently guide you through your thoughts.
                  </p>
                </div>

                {/* Features grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-purple-900/30 hover:bg-purple-900/40 transition-colors duration-300 group/feature interactive-card smooth-hover">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white text-xl shadow-lg group-hover/feature:scale-110 transition-transform duration-300 animate-gentle-pulse">
                      📓
                    </div>
                    <div>
                      <div className="font-semibold text-white interactive-text drop-shadow-sm">Safe Journaling</div>
                      <div className="text-sm text-purple-200 drop-shadow-sm">Private & secure</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-pink-900/30 hover:bg-pink-900/40 transition-colors duration-300 group/feature interactive-card smooth-hover">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center text-white text-xl shadow-lg group-hover/feature:scale-110 transition-transform duration-300 animate-gentle-pulse" style={{animationDelay: '0.5s'}}>
                      ❤️
                    </div>
                    <div>
                      <div className="font-semibold text-white interactive-text drop-shadow-sm">AI Companion</div>
                      <div className="text-sm text-pink-200 drop-shadow-sm">Always listening</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-indigo-900/30 hover:bg-indigo-900/40 transition-colors duration-300 group/feature interactive-card smooth-hover">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center text-white text-xl shadow-lg group-hover/feature:scale-110 transition-transform duration-300 animate-gentle-pulse" style={{animationDelay: '1s'}}>
                      📈
                    </div>
                    <div>
                      <div className="font-semibold text-white interactive-text drop-shadow-sm">Growth Tracking</div>
                      <div className="text-sm text-indigo-200 drop-shadow-sm">See your progress</div>
                    </div>
                  </div>
                </div>

                {/* Quote section with enhanced styling - DARK THEME */}
                <div className="pt-4 border-t border-purple-400/30">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full drop-shadow-sm"></div>
                    <div className="text-sm font-medium text-purple-300 italic drop-shadow-sm">Autumn note</div>
                  </div>
                  <div className="text-base text-white leading-relaxed font-medium italic bg-black/20 backdrop-blur-sm p-3 rounded-2xl border-l-4 border-purple-400 drop-shadow-sm">
                    "{quote}"
                  </div>
                </div>
      </div>
    </div>
  );
}