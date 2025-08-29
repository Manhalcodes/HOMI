import React from 'react';
import { FiMessageSquare } from 'react-icons/fi';

const TalkToHomiButton = ({ onClick, className = '', showText = true }) => {
  console.log('Rendering TalkToHomiButton with showText:', showText);
  return (
    <button 
      onClick={onClick}
      className={`fixed bottom-6 right-6 bg-[#9caf88] hover:bg-[#8a9c77] text-white p-3 rounded-full shadow-lg flex items-center gap-2 z-[9999] text-base font-medium transition-colors ${className}`}
      style={{
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1)'
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
