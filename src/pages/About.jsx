import React from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 p-6 relative overflow-hidden">
      {/* Tea Image with Floating Animation */}
      <img 
        src="/homitea.png.png" 
        alt="Decorative tea" 
        className="absolute bottom-0 right-0 w-64 h-auto opacity-60"
        style={{
          animation: 'float 6s ease-in-out infinite',
        }}
      />
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-6">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-purple-300 hover:text-purple-200 transition-colors"
          >
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back
          </button>
        </div>
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          About Homi ✨
        </h1>
        
        <div className="bg-black/40 backdrop-blur-md rounded-2xl shadow-lg p-8 mb-8 border border-purple-400/30">
          <p className="text-purple-200 text-lg mb-6 leading-relaxed">
            Homi isn't just another journaling app, it's a little friend created to make your everyday life easier, calmer, and more mindful. 💭
          </p>
          
          <div className="bg-purple-500/20 p-6 rounded-xl mb-6 border-l-4 border-purple-400">
            <p className="text-purple-200 italic">
              "The idea was born from the perspective of Manal Anjum, a Gen Z student at Online Manipal University, who truly understood how overwhelming studies, deadlines, and daily life can feel."
            </p>
          </div>
          
          <p className="text-purple-200 mb-6 leading-relaxed">
            Sometimes, all we need is a safe space where we can pause, write our thoughts, and reflect without judgment. That's exactly why this app was created. 🌱
          </p>
          
          <p className="text-purple-200 mb-6 leading-relaxed">
            In today's world, it often feels like no one really understands us. That's why this app exists — to be your digital home, a place where you can express yourself freely without fear of being misunderstood. With our AI, you don't just journal, you connect with a friend who listens, understands, and stays with you through every high and low.
          </p>
          
          <p className="text-purple-200 mb-6 leading-relaxed">
            This is your gentle reminder that your feelings matter, your routines can be beautiful, and your growth deserves to be celebrated. 💖
          </p>
          
          <div className="mt-8 p-4 bg-pink-500/20 rounded-lg border border-pink-400/30">
            <p className="text-sm text-pink-200">
              Note: While this app can bring comfort, clarity, and a sense of companionship, it is not a substitute for professional therapy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
