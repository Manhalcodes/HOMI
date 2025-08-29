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
        <FiLoader className="animate-spin text-homi-olive text-2xl mr-2" />
        <span className="text-homi-olive">Loading your journal...</span>
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
            className="bg-homi-sage text-white px-4 py-2 rounded hover:bg-homi-olive transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-homi-sage/10">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'w-64' : 'w-16'} bg-white/90 backdrop-blur-sm border-r border-homi-olive/10 transition-all duration-300 flex flex-col h-full`}>
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          {isSidebarOpen && <h1 className="text-xl font-bold text-homi-olive">Homi Journal</h1>}
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-gray-500 hover:text-gray-700"
          >
            {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        
        <div className="p-4">
          <Link 
            to="/journal/new"
            className="flex items-center gap-2 bg-homi-sage text-white px-4 py-2.5 rounded-lg hover:bg-homi-olive transition-colors justify-center"
            aria-label="Create new journal entry"
          >
            <FiPlus className="w-5 h-5" />
            {isSidebarOpen && <span className="font-medium">New Journal</span>}
          </Link>
        </div>

        <nav className="flex-1 overflow-y-auto p-2">
          <div className="space-y-1">
            <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-orange-50 text-homi-orange">
              <FiGrid />
              {isSidebarOpen && <span>All Pages</span>}
            </button>
            <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700">
              <FiStar />
              {isSidebarOpen && <span>Favorites</span>}
            </button>
            <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700">
              <FiTrash2 />
              {isSidebarOpen && <span>Trash</span>}
            </button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            {/* Search */}
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search your journal..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-homi-olive focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setState(prev => ({ ...prev, searchQuery: e.target.value }))}
              />
            </div>
            <div className="flex items-center gap-2 ml-4">
              <button 
                onClick={() => setState(prev => ({ ...prev, activeView: 'grid' }))}
                className={`p-2 rounded-lg ${activeView === 'grid' ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
              >
                <FiGrid />
              </button>
              <button 
                onClick={() => setState(prev => ({ ...prev, activeView: 'list' }))}
                className={`p-2 rounded-lg ${activeView === 'list' ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
              >
                <FiList />
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">My Journal</h2>
              <div className="text-sm text-gray-500">
                {filteredEntries.length} {filteredEntries.length === 1 ? 'entry' : 'entries'}
              </div>
            </div>

            {activeView === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEntries.map(entry => (
                  <div key={entry.id} className="group relative">
                    <div className="absolute right-2 top-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button 
                        onClick={() => toggleFavorite(entry.id)}
                        className="p-1.5 rounded-full bg-white/80 backdrop-blur-sm shadow-sm hover:bg-gray-100"
                      >
                        <FiStar className={`w-4 h-4 ${entry.isFavorite ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                      </button>
                    </div>
                    <Link
                      to={`/journal/${entry.id}`}
                      className="block h-full p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                    >
                      <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">{entry.title}</h3>
                      <p className="text-sm text-gray-500 mb-3 line-clamp-2">{entry.preview}</p>
                      <div className="text-xs text-gray-400">{formatDate(entry.date)}</div>
                    </Link>
                  </div>
                ))}
                
                {/* New Page Card */}
                <Link
                  to="/journal/new"
                  className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-homi-orange hover:bg-orange-50 transition-colors h-full min-h-[180px]"
                >
                  <div className="w-10 h-10 rounded-full bg-homi-orange/10 flex items-center justify-center mb-2">
                    <FiPlus className="text-homi-orange" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">New Page</span>
                </Link>
              </div>
            ) : (
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                {filteredEntries.map((entry, index) => (
                  <div 
                    key={entry.id} 
                    className={`flex items-center p-4 hover:bg-gray-50 ${index !== filteredEntries.length - 1 ? 'border-b border-gray-100' : ''}`}
                  >
                    <button 
                      onClick={() => toggleFavorite(entry.id)}
                      className="p-1.5 mr-3 text-gray-300 hover:text-yellow-400"
                    >
                      <FiStar className={`w-4 h-4 ${entry.isFavorite ? 'text-yellow-400 fill-current' : ''}`} />
                    </button>
                    <Link to={`/journal/${entry.id}`} className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-gray-900 truncate pr-2">{entry.title}</h3>
                        <span className="text-xs text-gray-400 whitespace-nowrap ml-2">
                          {formatDate(entry.date)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 truncate">{entry.preview}</p>
                    </Link>
                  </div>
                ))}
                
                {filteredEntries.length === 0 && (
                  <div className="p-8 text-center text-gray-500">
                    <p>No entries found. Create your first journal entry!</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </main>
      </div>

      <TalkToHomiButton 
        onClick={() => {
          // In a real app, this would open a chat interface
          const message = 'Talk to Homi is coming soon! This feature will help you analyze your journal entries and provide insights.';
          alert(message);
        }}
        showText={isSidebarOpen}
      />
    </div>
  );
};

export default Dashboard;
