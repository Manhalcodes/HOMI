import React from 'react';
import { FiMessageSquare } from 'react-icons/fi';

const TalkToHomiButton = ({ onClick, className = '', showText = true }) => {
  console.log('Rendering TalkToHomiButton with showText:', showText);
  return (
    <button 
      onClick={onClick}
      className={`fixed bottom-6 right-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white p-3 rounded-full shadow-lg flex items-center gap-2 z-[9999] text-base font-medium transition-all duration-300 hover:scale-105 ${className}`}
      style={{
        boxShadow: '0 4px 6px -1px rgba(147, 51, 234, 0.3), 0 2px 4px -1px rgba(236, 72, 153, 0.2)'
      }}
      aria-label="Talk to Homi"
      title="Get AI-powered insights"
    >
      <FiMessageSquare className="w-4 h-4" />
      {showText && <span className="text-sm">Talk to Homi</span>}
    </button>
  );
};

export default TalkToHomiButton;
