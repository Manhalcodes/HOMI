import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FiPlus, 
  FiSearch, 
  FiGrid, 
  FiList, 
  FiStar, 
  FiTrash2, 
  FiMenu, 
  FiX, 
  FiLoader
} from 'react-icons/fi';
import Navbar from '../components/Navbar';
import TalkToHomiButton from '../components/TalkToHomiButton';

// Utility function to format dates consistently
const formatDate = (dateString) => {
  if (!dateString) return '';
  try {
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  } catch (error) {
    console.error('Error formatting date:', error);
    return dateString;
  }
};

const Dashboard = () => {
  const [state, setState] = useState({
    isSidebarOpen: true,
    activeView: 'grid',
    searchQuery: '',
    isLoading: true,
    error: null,
    entries: []
  });
  
  const navigate = useNavigate();
  
  // Fetch journal entries
  useEffect(() => {
    const fetchEntries = async () => {
      try {
        // In a real app, this would be an API call
        const mockEntries = [
          { 
            id: 1, 
            title: 'Morning Reflection', 
            date: new Date().toISOString(), 
            preview: 'Today I feel grateful for...', 
            isFavorite: true 
          },
          { 
            id: 2, 
            title: 'Weekly Goals', 
            date: new Date(Date.now() - 86400000).toISOString(), 
            preview: 'This week I want to focus on...', 
            isFavorite: false 
          },
          { 
            id: 3, 
            title: 'Evening Thoughts', 
            date: new Date(Date.now() - 172800000).toISOString(), 
            preview: 'Reflecting on the day...', 
            isFavorite: true 
          },
        ];
        
        setState(prev => ({
          ...prev,
          entries: mockEntries,
          isLoading: false
        }));
      } catch (error) {
        console.error('Failed to fetch entries:', error);
        setState(prev => ({
          ...prev,
          error: 'Failed to load journal entries',
          isLoading: false
        }));
      }
    };
    
    fetchEntries();
  }, []);
  
  const { isSidebarOpen, activeView, searchQuery, isLoading, error, entries } = state;

  const toggleFavorite = useCallback(async (id) => {
    try {
      // Optimistic UI update
      const updatedEntries = entries.map(entry => 
        entry.id === id ? { ...entry, isFavorite: !entry.isFavorite } : entry
      );
      
      setState(prev => ({
        ...prev,
        entries: updatedEntries
      }));
      
      // In a real app, this would be an API call
      // await api.updateEntry(id, { isFavorite: !entry.isFavorite });
    } catch (error) {
      console.error('Failed to update favorite status:', error);
      // Revert on error
      setState(prev => ({
        ...prev,
        error: 'Failed to update entry'
      }));
    }
  }, [entries]);

  const filteredEntries = useMemo(() => {
    if (!searchQuery.trim()) return entries;
    
    const query = searchQuery.toLowerCase();
    return entries.filter(entry => 
      entry.title.toLowerCase().includes(query) ||
      (entry.preview && entry.preview.toLowerCase().includes(query))
    );
  }, [entries, searchQuery]);

  // Loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <FiLoader className="animate-spin text-purple-400 text-2xl mr-2" />
        <span className="text-purple-300">Loading your journal...</span>
      </div>
    );
  }
  
  // Error state
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen p-4 text-center">
        <div className="bg-red-50 text-red-700 p-4 rounded-lg max-w-md">
          <h2 className="font-bold text-lg mb-2">Something went wrong</h2>
          <p className="mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Navigation Header */}
      <Navbar />
      
      {/* Enhanced Background decorative elements - DARK THEME */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 via-pink-500/15 to-indigo-500/20 rounded-full blur-3xl animate-gentle-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-500/20 via-purple-500/15 to-indigo-500/20 rounded-full blur-3xl animate-gentle-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-500/15 via-purple-500/10 to-pink-500/15 rounded-full blur-3xl animate-gentle-float" style={{animationDelay: '2s'}}></div>
        
        {/* Subtle floating elements - DARK THEME */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-purple-500/60 rounded-full animate-bounce-gentle" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-40 right-32 w-4 h-4 bg-pink-500/70 rounded-full animate-bounce-gentle" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-32 left-32 w-2 h-2 bg-indigo-500/80 rounded-full animate-bounce-gentle" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-purple-500/60 rounded-full animate-bounce-gentle" style={{animationDelay: '3s'}}></div>
        
        {/* Soft gradient orbs - DARK THEME */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-500/25 to-pink-500/25 rounded-full blur-2xl animate-rotate-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-pink-500/25 to-indigo-500/25 rounded-full blur-2xl animate-rotate-slow" style={{animationDirection: 'reverse'}}></div>
      </div>

      {/* Main Content Area - No gap */}
      <div className="flex h-screen">
        {/* Enhanced Sidebar - DARK THEME */}
        <div className={`${isSidebarOpen ? 'w-72' : 'w-20'} bg-black/40 backdrop-blur-md border-r border-purple-400/30 transition-all duration-500 flex flex-col h-full relative z-10 shadow-xl hover:shadow-2xl group`}>
        {/* Sidebar Header - DARK THEME */}
        <div className="p-6 border-b border-purple-400/30 flex items-center justify-between">
          {isSidebarOpen && (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-lg font-bold">
                H
              </div>
              <div>
                <h1 className="text-xl font-bold text-white font-space-grotesk">Homi Journal</h1>
                <p className="text-xs text-purple-300/70">Your safe space</p>
              </div>
            </div>
          )}
          <button 
            onClick={() => setState(prev => ({ ...prev, isSidebarOpen: !isSidebarOpen }))}
            className="p-2 rounded-xl text-purple-300/70 hover:text-white hover:bg-purple-500/20 transition-all duration-300"
          >
            {isSidebarOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
        
        {/* New Journal Button */}
        <div className="p-6">
          <Link 
            to="/journal/new"
            className="group flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-4 rounded-2xl hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 justify-center"
            aria-label="Create new journal entry"
          >
            <FiPlus className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            {isSidebarOpen && <span className="font-semibold">New Journal</span>}
          </Link>
        </div>

        {/* Navigation - DARK THEME */}
        <nav className="flex-1 overflow-y-auto p-4">
          <div className="space-y-2">
            <button className="group w-full flex items-center gap-3 px-4 py-3 rounded-2xl bg-purple-500/20 text-white shadow-md hover:shadow-lg transition-all duration-300">
              <FiGrid className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              {isSidebarOpen && <span className="font-medium">All Pages</span>}
            </button>
            <button className="group w-full flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-purple-500/20 text-purple-300/70 hover:text-white transition-all duration-300">
              <FiStar className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              {isSidebarOpen && <span className="font-medium">Favorites</span>}
            </button>
            <button className="group w-full flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-purple-500/20 text-purple-300/70 hover:text-white transition-all duration-300">
              <FiTrash2 className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              {isSidebarOpen && <span className="font-medium">Trash</span>}
            </button>
          </div>
        </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden relative z-10">
        {/* Enhanced Header */}
        <header className="bg-black/40 backdrop-blur-md border-b border-purple-400/30 p-4 shadow-sm hover:shadow-lg transition-all duration-300 group">
          <div className="flex items-center justify-between">
            {/* Enhanced Search */}
            <div className="relative flex-1 max-w-md group/search">
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 group-hover/search:scale-110 transition-transform duration-300" />
              <input
                type="text"
                placeholder="Search your journal..."
                className="w-full pl-12 pr-4 py-3 border-2 border-purple-400/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 bg-black/40 hover:bg-black/60 transition-all duration-300 group-hover/search:scale-105 group-hover/search:shadow-lg text-white placeholder-purple-300/50"
                value={searchQuery}
                onChange={(e) => setState(prev => ({ ...prev, searchQuery: e.target.value }))}
              />
            </div>
            
            {/* View Toggle */}
            <div className="flex items-center gap-2 ml-6">
              <div className="bg-purple-500/10 rounded-2xl p-1">
                <button 
                  onClick={() => setState(prev => ({ ...prev, activeView: 'grid' }))}
                  className={`p-3 rounded-xl transition-all duration-300 ${
                    activeView === 'grid' 
                      ? 'bg-white shadow-md text-purple-600' 
                      : 'text-purple-300/70 hover:text-purple-300 hover:bg-white/50'
                  }`}
                >
                  <FiGrid className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setState(prev => ({ ...prev, activeView: 'list' }))}
                  className={`p-3 rounded-xl transition-all duration-300 ${
                    activeView === 'list' 
                      ? 'bg-white shadow-md text-purple-600' 
                      : 'text-purple-300/70 hover:text-purple-300 hover:bg-white/50'
                  }`}
                >
                  <FiList className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-4 bg-transparent">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-white font-space-grotesk mb-1">My Journal</h2>
                      <p className="text-purple-300/70">Your thoughts, memories, and reflections</p>
                    </div>
              <div className="flex items-center gap-4">
                <div className="text-sm text-purple-300 bg-purple-500/10 px-4 py-2 rounded-full">
                  {filteredEntries.length} {filteredEntries.length === 1 ? 'entry' : 'entries'}
                </div>
              </div>
            </div>

            {activeView === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredEntries.map((entry, index) => (
                  <div key={entry.id} className="group relative z-10 gentle-glow" style={{animationDelay: `${index * 0.1}s`}}>
                    {/* Enhanced Glassmorphism card - OLIVE THEME */}
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-md rounded-3xl shadow-lg border border-purple-400/30 group-hover:shadow-2xl group-hover:shadow-purple-500/10 transition-all duration-300 z-0"></div>
                    
                    <div className="relative bg-black/30 backdrop-blur-md rounded-3xl p-4 h-full min-h-[160px] hover:bg-black/40 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/20 group-hover:border-purple-400/50 border border-purple-400/20 z-10">
                      {/* Enhanced Favorite button */}
                      <div className="absolute right-3 top-3 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <button 
                          onClick={() => toggleFavorite(entry.id)}
                          className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 hover:shadow-xl group/star"
                        >
                          <FiStar className={`w-4 h-4 ${entry.isFavorite ? 'text-yellow-400 fill-current' : 'text-gray-400'} group-hover/star:scale-110 transition-transform duration-300`} />
                        </button>
                      </div>
                      
                      <Link
                        to={`/journal/${entry.id}`}
                        className="block h-full"
                      >
                        <h3 className="font-semibold text-white mb-3 line-clamp-2 text-lg group-hover:text-purple-200 group-hover:scale-110 transition-all duration-300">
                          {entry.title}
                        </h3>
                        <p className="text-purple-200/70 mb-4 line-clamp-3 text-sm leading-relaxed">
                          {entry.preview}
                        </p>
                        <div className="flex items-center justify-between mt-auto">
                          <div className="text-xs text-purple-300/60 font-medium">
                            {formatDate(entry.date)}
                          </div>
                          {entry.isFavorite && (
                            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          )}
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
                
                {/* Enhanced New Page Card */}
                <Link
                  to="/journal/new"
                  className="group relative z-10 gentle-glow"
                  style={{animationDelay: `${filteredEntries.length * 0.1}s`}}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 backdrop-blur-md rounded-3xl border-2 border-dashed border-purple-400/60 group-hover:border-purple-400 group-hover:from-purple-500/50 group-hover:to-pink-500/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-purple-500/20 z-0"></div>
                  
                  <div className="relative flex flex-col items-center justify-center p-6 h-full min-h-[160px] group-hover:scale-110 transition-all duration-300 z-10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-180 transition-all duration-500 ease-out shadow-lg group-hover:shadow-xl group-hover:shadow-purple-500/30">
                    <FiPlus className="text-white text-lg group-hover:scale-110 group-hover:rotate-180 transition-all duration-500 ease-out" />
                    </div>
                    <span className="text-white font-semibold text-base group-hover:text-purple-200 transition-all duration-300 group-hover:scale-110">New Page</span>
                    <span className="text-purple-300/70 text-xs mt-1 group-hover:text-purple-200 transition-all duration-300 group-hover:scale-110">Start writing</span>
                  </div>
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredEntries.map((entry, index) => (
                  <div 
                    key={entry.id} 
                    className="group relative"
                  >
                    {/* Glassmorphism card for list view - OLIVE THEME */}
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-2xl shadow-lg border border-purple-400/30"></div>
                    
                    <div className="relative bg-black/30 backdrop-blur-sm rounded-2xl p-6 hover:bg-black/40 transition-all duration-300 hover:scale-[1.05] hover:shadow-xl hover:shadow-purple-500/10">
                      <div className="flex items-center">
                        <button 
                          onClick={() => toggleFavorite(entry.id)}
                          className="p-2 mr-4 text-purple-300/70 hover:text-yellow-400 hover:scale-110 transition-all duration-300"
                        >
                          <FiStar className={`w-5 h-5 ${entry.isFavorite ? 'text-yellow-400 fill-current' : ''}`} />
                        </button>
                        <Link to={`/journal/${entry.id}`} className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-white text-lg group-hover:text-purple-200 group-hover:scale-110 transition-all duration-300 truncate pr-4">
                              {entry.title}
                            </h3>
                            <span className="text-sm text-purple-300/60 font-medium whitespace-nowrap ml-4">
                              {formatDate(entry.date)}
                            </span>
                          </div>
                          <p className="text-purple-200/70 text-sm leading-relaxed line-clamp-2">
                            {entry.preview}
                          </p>
                        </Link>
                        {entry.isFavorite && (
                          <div className="w-3 h-3 bg-yellow-400 rounded-full ml-4"></div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                
                {filteredEntries.length === 0 && (
                  <div className="text-center py-16">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-200/50 to-emerald-200/50 flex items-center justify-center mx-auto mb-6">
                      <FiSearch className="w-12 h-12 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">No entries found</h3>
                    <p className="text-purple-300/80 mb-6">Create your first journal entry to get started!</p>
                    <Link
                      to="/journal/new"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
                    >
                      <FiPlus className="w-5 h-5" />
                      <span className="font-semibold">Create New Entry</span>
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </main>
        
        <TalkToHomiButton 
          onClick={() => {
            // In a real app, this would open a chat interface
            const message = 'Talk to Homi is coming soon! This feature will help you analyze your journal entries and provide insights.';
            alert(message);
          }}
          showText={isSidebarOpen}
        />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
