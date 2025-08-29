import React from 'react';
import { SparklesIcon, LightBulbIcon, ChatBubbleLeftRightIcon, HeartIcon } from '@heroicons/react/24/outline';

const Report = ({ analysis }) => {
  if (!analysis) return null;

  const getMoodEmoji = (mood) => {
    switch(mood.toLowerCase()) {
      case 'positive': return '😊';
      case 'negative': return '😔';
      case 'anxious': return '😟';
      default: return '😌';
    }
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-homi-sage/20 p-6 my-6 animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <SparklesIcon className="h-7 w-7 text-homi-yellow" />
        <h2 className="text-2xl font-bold text-homi-darkolive">Your Journal Insights</h2>
      </div>
      
      <div className="space-y-5">
        <div className="p-5 bg-homi-lightyellow/40 rounded-xl border border-homi-sage/20">
          <div className="flex items-center gap-2 mb-3">
            <HeartIcon className="h-5 w-5 text-homi-yellow" />
            <h3 className="text-lg font-semibold text-homi-darkolive">Mood Analysis</h3>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-4xl">{getMoodEmoji(analysis.mood.type)}</span>
            <div>
              <p className="text-homi-olive">{analysis.mood.overview}</p>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
                <span className="px-3 py-1 bg-homi-yellow/10 text-homi-darkolive rounded-full border border-homi-yellow/20">
                  {analysis.mood.type.charAt(0).toUpperCase() + analysis.mood.type.slice(1)}
                </span>
                <div className="w-24 bg-homi-sage/20 rounded-full h-2">
                  <div 
                    className="bg-homi-yellow h-2 rounded-full" 
                    style={{ width: `${analysis.mood.intensity * 10}%` }}
                  />
                </div>
                <span className="text-homi-olive/80">{analysis.mood.intensity}/10</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 bg-homi-lightyellow/30 rounded-xl border border-homi-sage/20">
          <div className="flex items-center gap-2 mb-3">
            <LightBulbIcon className="h-5 w-5 text-homi-yellow" />
            <h3 className="text-lg font-semibold text-homi-darkolive">Key Themes</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {analysis.themes.map((theme, index) => (
              <span 
                key={index} 
                className="px-3 py-1.5 bg-homi-yellow/10 text-homi-darkolive text-sm rounded-full border border-homi-yellow/20 hover:bg-homi-yellow/20 transition-colors"
              >
                {theme}
              </span>
            ))}
          </div>
        </div>

        <div className="p-5 bg-homi-lightyellow/20 rounded-xl border border-homi-sage/20">
          <div className="flex items-center gap-2 mb-3">
            <ChatBubbleLeftRightIcon className="h-5 w-5 text-homi-yellow" />
            <h3 className="text-lg font-semibold text-homi-darkolive">Reflection Prompts</h3>
          </div>
          <ul className="space-y-3 pl-1">
            {analysis.prompts.map((prompt, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-homi-yellow mt-1">•</span>
                <span className="text-homi-olive">{prompt}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-5 bg-gradient-to-r from-homi-yellow/5 to-homi-sage/5 rounded-xl border border-homi-sage/20">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-homi-yellow/10 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-homi-yellow" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10a1 1 0 01-1.64 0l-7-10A1 1 0 014 7h4V2a1 1 0 01.7-.954l2.6-.8z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-homi-darkolive">Self-Care Suggestion</h3>
          </div>
          <p className="mt-2 pl-8 text-homi-olive">{analysis.selfCareSuggestion}</p>
        </div>
      </div>
    </div>
  );
};

export default Report;
