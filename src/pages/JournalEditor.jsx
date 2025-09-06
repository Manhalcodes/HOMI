import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SparklesIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import TalkToHomiButton from '../components/TalkToHomiButton';
import ChatWindow from '../components/ChatWindow';
import Report from '../components/Report';

const JournalEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isSaving, setIsSaving] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  
  // State for the journal entry and analysis
  const [entry, setEntry] = useState({
    content: '',
    lastEdited: new Date().toISOString()
  });
  
  const [analysis, setAnalysis] = useState(null);
  
  // Chat state
  const [showChat, setShowChat] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Load entry if editing
  useEffect(() => {
    if (id && id !== 'new') {
      // In a real app, you would fetch the entry from an API
      const mockEntry = {
        id,
        title: 'Your Journal Entry',
        content: 'Write about your thoughts and feelings.',
        isFavorite: false,
        lastEdited: new Date().toISOString()
      };
      setEntry(mockEntry);
    }
  }, [id]);

  // Keyboard shortcut for going back (Escape key)
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        navigate(-1);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEntry(prev => ({
      ...prev,
      [name]: value,
      lastEdited: new Date().toISOString()
    }));
  };

  const toggleFavorite = () => {
    setEntry(prev => ({
      ...prev,
      isFavorite: !prev.isFavorite
    }));
  };

  const getAIResponse = () => {
    const aiResponses = {
      happy: [
        "I can feel the joy in your words ✨ What sparked it today?",
        "You're glowing! Hold onto this moment — maybe write one thing you want to remember about it.",
        "This is such a sweet vibe. What's one ritual that could help you bring this feeling back again?"
      ],
      calm: [
        "Your words feel grounded and peaceful 🌿 Stay here a little longer.",
        "There's a soft stillness in your tone. What helps you keep this calm energy?",
        "This moment of calm is a gift. Would you like a gentle breathing prompt to deepen it?"
      ],
      sad: [
        "I hear your heaviness 💜 It's okay to move slowly today. What's one tiny comfort you can give yourself?",
        "Your feelings are valid. Maybe name three little things that felt even a bit lighter today.",
        "Thank you for sharing this part of you. Sometimes, writing where you feel sadness in your body can bring softness."
      ],
      anxious: [
        "I notice some worry in your words. Let's take a breath together. Inhale for 4... hold for 4... exhale for 6.",
        "It's okay to feel this way. What's one small thing that might help you feel a bit more grounded right now?",
        "I'm here with you. Sometimes listing what we can and can't control helps. Would you like to try?"
      ]
    };
    
    // Simple mood detection based on content (very basic example)
    let mood = 'calm';
    const content = entry.content.toLowerCase();
    
    if (content.includes('happy') || content.includes('joy') || content.includes('excited')) {
      mood = 'happy';
    } else if (content.includes('sad') || content.includes('upset') || content.includes('cry')) {
      mood = 'sad';
    } else if (content.includes('anxious') || content.includes('worried') || content.includes('stress')) {
      mood = 'anxious';
    }
    
    const responses = aiResponses[mood] || aiResponses.calm;
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const analyzeContent = (content) => {
    // Simulate AI analysis
    const words = content.toLowerCase().split(/\s+/);
    const wordCount = words.length;
    
    // Simple sentiment analysis
    const positiveWords = ['happy', 'joy', 'excited', 'good', 'great', 'love', 'amazing'];
    const negativeWords = ['sad', 'angry', 'upset', 'bad', 'terrible', 'hate'];
    const anxiousWords = ['worried', 'anxious', 'stress', 'nervous', 'afraid'];
    
    const positiveCount = words.filter(word => positiveWords.includes(word)).length;
    const negativeCount = words.filter(word => negativeWords.includes(word)).length;
    const anxiousCount = words.filter(word => anxiousWords.includes(word)).length;
    
    // Determine mood
    let moodType = 'neutral';
    if (positiveCount > negativeCount && positiveCount > anxiousCount) moodType = 'positive';
    else if (negativeCount > positiveCount && negativeCount > anxiousCount) moodType = 'negative';
    else if (anxiousCount > 0) moodType = 'anxious';
    
    // Generate themes based on common words (simplified)
    const themes = [];
    if (content.toLowerCase().includes('work')) themes.push('Work');
    if (content.toLowerCase().includes('friend') || content.toLowerCase().includes('family')) themes.push('Relationships');
    if (content.toLowerCase().includes('health') || content.toLowerCase().includes('feel')) themes.push('Well-being');
    if (themes.length === 0) themes.push('Daily Reflection');
    
    // Generate analysis object
    return {
      mood: {
        type: moodType,
        intensity: Math.min(10, Math.max(1, Math.floor((positiveCount + negativeCount * 1.5 + anxiousCount * 1.2) / wordCount * 20))),
        overview: moodType === 'positive' 
          ? 'Your entry reflects a positive and uplifting mood.'
          : moodType === 'negative'
          ? 'Your entry suggests you might be feeling down. Remember, it\'s okay to feel this way.'
          : moodType === 'anxious'
          ? 'I notice some anxious thoughts in your writing. Take a deep breath.'
          : 'Your entry shows a balanced emotional state.'
      },
      themes: themes.length > 0 ? themes : ['General Reflection'],
      prompts: [
        'What was the most significant part of your day?',
        'How did this experience make you feel?',
        'What would you like to remember about today?'
      ],
      selfCareSuggestion: moodType === 'anxious' 
        ? 'Try a 5-minute breathing exercise to help ground yourself.'
        : 'Consider taking a moment to appreciate something positive from today.'
    };
  };

  const handleSave = async (analyze = false) => {
    if (analyze) {
      setIsAnalyzing(true);
      // Simulate API call
      setTimeout(() => {
        const analysis = analyzeContent(entry.content);
        setAnalysis(analysis);
        setIsAnalyzing(false);
      }, 1500);
    } else {
      setIsSaving(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSaving(false);
      // Navigate back to dashboard after save
      navigate('/journal');
    }
    const aiResponse = getAIResponse();
    setChatMessages([
      { text: entry.content, sender: 'user' },
      { text: aiResponse, sender: 'ai' }
    ]);
    setShowChat(true);
  };

  const handleChatMessage = (message) => {
    // Handle user messages in chat
    const newMessages = [
      ...chatMessages,
      { text: message, sender: 'user' },
      { 
        text: "I'm here to help you reflect on your journal entry. You can ask me to analyze specific parts or request guidance.", 
        sender: 'ai' 
      }
    ];
    setChatMessages(newMessages);
  };

  if (!entry) return <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 flex items-center justify-center text-white">Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 p-4 md:p-8 relative overflow-hidden">
      {/* Background decorative elements - DARK THEME */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl"></div>
      </div>


      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 relative z-10">
        {/* Left Sidebar - Journal Insights */}
        <div className="w-80 flex-shrink-0 hidden lg:block">
          <div className="sticky top-8">
            {analysis ? (
              <div className="bg-black/40 backdrop-blur-md rounded-3xl shadow-2xl border border-purple-400/30 p-8 mb-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <SparklesIcon className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white font-space-grotesk">Journal Insights</h2>
                </div>
                <Report analysis={analysis} />
              </div>
            ) : (
              <div className="bg-black/30 backdrop-blur-sm rounded-3xl p-8 border border-purple-400/30 shadow-xl">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mx-auto mb-6">
                    <LightBulbIcon className="h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">Get AI Insights</h3>
                  <p className="text-sm text-purple-200/80 mb-6 leading-relaxed">
                    Click "Analyze with Homi" to see insights about your journal entry and get personalized guidance.
                  </p>
                  <button
                    onClick={() => handleSave(true)}
                    className="group px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 text-sm font-semibold flex items-center gap-2 mx-auto"
                    disabled={isSaving || isAnalyzing}
                  >
                    {isAnalyzing ? (
                      <>
                        <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <SparklesIcon className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                        Analyze with Homi
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="relative mb-12 pt-8">
            <div className="text-center">
              {/* Page Title */}
              <div className="flex items-center justify-center gap-2 mb-4 text-sm">
                <span className="text-purple-300/70 font-medium">
                  {id === 'new' ? 'New Entry' : 'Edit Entry'}
                </span>
              </div>
              
              <p className="text-sm text-purple-300/70 mb-3 font-medium">{today}</p>
              <div className="relative max-w-2xl mx-auto mb-4">
                <input
                  type="text"
                  name="title"
                  value={entry.title || ''}
                  onChange={handleInputChange}
                  placeholder="Untitled"
                  className="w-full text-4xl font-bold text-white text-center bg-transparent border-none focus:outline-none focus:ring-0 placeholder-purple-300/50"
                  style={{
                    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                  }}
                />
                <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-4"></div>
              </div>
            </div>
          </div>

          {/* Journal Content */}
          <div className="relative group">
            {/* Glassmorphism background - DARK THEME */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-md rounded-3xl shadow-2xl border border-purple-400/30"></div>
            
            <div className="relative bg-black/30 backdrop-blur-sm rounded-3xl overflow-hidden border border-purple-400/30">
              <div className="p-2">
                <div className="max-w-4xl mx-auto py-12 px-8">
                  <textarea
                    name="content"
                    value={entry.content}
                    onChange={handleInputChange}
                    className="w-full min-h-[70vh] p-4 resize-none focus:outline-none text-white text-lg leading-relaxed font-light tracking-wide bg-transparent placeholder-purple-300/50"
                    placeholder="Start writing your thoughts here... Let your mind flow freely and express what's on your heart."
                    style={{
                      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                      lineHeight: '1.8',
                      fontSize: '1.125rem',
                    }}
                  />
                </div>
              </div>
              
              {/* Floating Action Buttons - DARK THEME */}
              <div className="sticky bottom-0 bg-black/60 backdrop-blur-md border-t border-purple-400/30 p-6">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="text-sm text-purple-300/70">
                      {entry.content.length} characters
                    </div>
                    <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                    <div className="text-sm text-purple-300/70">
                      Last saved: {new Date().toLocaleTimeString()}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleSave(false)}
                      className="group px-6 py-3 text-purple-300 hover:bg-purple-500/20 rounded-2xl transition-all duration-300 text-sm font-semibold hover:scale-105"
                      disabled={isSaving}
                    >
                      {isSaving ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Saving...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                          Save
                        </span>
                      )}
                    </button>
                    <button
                      onClick={() => handleSave(true)}
                      className="group px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 text-sm font-semibold flex items-center gap-2"
                      disabled={isSaving || isAnalyzing}
                    >
                      {isAnalyzing ? (
                        <>
                          <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Analyzing...
                        </>
                      ) : (
                        <>
                          <SparklesIcon className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                          Analyze with Homi
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Analysis Section - DARK THEME */}
        {analysis && (
          <div className="lg:hidden mt-8">
            <div className="bg-black/40 backdrop-blur-sm rounded-xl shadow-lg border border-purple-400/30 p-6">
              <h2 className="text-xl font-bold text-white mb-4">Journal Insights</h2>
              <Report analysis={analysis} />
            </div>
          </div>
        )}
      </div>

      {/* Clean Floating Back Button - DARK THEME */}
      <div className="fixed bottom-6 left-6 z-50">
        <button
          onClick={() => navigate(-1)}
          className="group flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300 border border-purple-400/30"
          title="Back to Journal Dashboard (or press Escape)"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          <span className="font-semibold text-sm">Back to Dashboard</span>
        </button>
      </div>

      {/* Floating Talk to Homi Button */}
      <TalkToHomiButton
        onClick={() => {
          const message = 'Talk to Homi is coming soon! This feature will help you analyze your journal entries and provide insights.';
          alert(message);
        }}
        showText={true}
      />

      {/* Chat Window */}
      <ChatWindow
        isOpen={showChat}
        onClose={() => setShowChat(false)}
        messages={chatMessages}
        onSendMessage={handleChatMessage}
      />
    </div>
  );
};

export default JournalEditor;
