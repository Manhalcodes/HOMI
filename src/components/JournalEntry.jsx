import React, { useState } from "react";
import { FiStar, FiMoreVertical, FiClock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const JournalEntry = ({ entry, viewMode = 'grid' }) => {
  // Format date
  const formatDate = (dateString) => {
    const options = { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (viewMode === 'grid') {
    return (
      <Link 
        to={`/journal/${entry.id}`}
        className="block group"
      >
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden h-full flex flex-col hover:shadow-md transition-shadow duration-200">
          <div className="p-5 flex-1">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-medium text-gray-900 group-hover:text-homi-orange transition-colors line-clamp-2">
                {entry.title}
              </h3>
              <button 
                className="text-gray-400 hover:text-yellow-500 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  // Toggle favorite
                }}
              >
                <FiStar 
                  className={`w-5 h-5 ${entry.isFavorite ? 'text-yellow-400 fill-current' : ''}`} 
                />
              </button>
            </div>
            <p className="text-gray-500 text-sm line-clamp-3 mb-4">
              {entry.preview}
            </p>
          </div>
          <div className="px-5 py-3 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
            <span className="text-xs text-gray-500 flex items-center">
              <FiClock className="mr-1" />
              {formatDate(entry.date)}
            </span>
            <button className="text-gray-400 hover:text-gray-600">
              <FiMoreVertical />
            </button>
          </div>
        </div>
      </Link>
    );
  }

  // List view
  return (
    <Link 
      to={`/journal/${entry.id}`}
      className="block group"
    >
      <div className="bg-white rounded-lg border border-gray-200 p-4 hover:bg-gray-50 transition-colors">
        <div className="flex items-start">
          <div className="flex-1 min-w-0">
            <div className="flex items-center">
              <h3 className="text-base font-medium text-gray-900 group-hover:text-homi-orange transition-colors truncate pr-2">
                {entry.title}
              </h3>
              <span className="text-xs text-gray-500 whitespace-nowrap">
                {formatDate(entry.date)}
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-1 line-clamp-1">
              {entry.preview}
            </p>
          </div>
          <div className="ml-4 flex items-center">
            <button 
              className="text-gray-400 hover:text-yellow-500 transition-colors p-1"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                // Toggle favorite
              }}
            >
              <FiStar 
                className={`w-5 h-5 ${entry.isFavorite ? 'text-yellow-400 fill-current' : ''}`} 
              />
            </button>
            <button className="text-gray-400 hover:text-gray-600 p-1 ml-1">
              <FiMoreVertical />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default JournalEntry;