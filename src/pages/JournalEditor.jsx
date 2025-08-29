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

  if (!entry) return <div className="min-h-screen bg-homi-cream flex items-center justify-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-homi-cream p-4 md:p-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Left Sidebar - Journal Insights */}
        <div className="w-80 flex-shrink-0 hidden lg:block">
          <div className="sticky top-8">
            {analysis ? (
              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-homi-sage/20 p-6 mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <SparklesIcon className="h-5 w-5 text-homi-yellow" />
                  <h2 className="text-xl font-bold text-homi-darkolive">Journal Insights</h2>
                </div>
                <Report analysis={analysis} />
              </div>
            ) : (
              <div className="bg-white/80 rounded-xl p-6 border border-homi-sage/20">
                <div className="text-center p-4">
                  <LightBulbIcon className="h-8 w-8 text-homi-yellow/70 mx-auto mb-3" />
                  <p className="text-sm text-homi-olive/80 mb-2">
                    Click "Analyze with Homi" to see insights about your journal entry
                  </p>
                  <div className="mt-4 flex justify-center">
                    <button
                      onClick={() => handleSave(true)}
                      className="px-4 py-2 bg-homi-sage/90 text-white hover:bg-homi-olive rounded-lg transition-colors duration-200 text-sm font-medium flex items-center gap-2"
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
                          <SparklesIcon className="h-4 w-4" />
                          Analyze with Homi
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="relative mb-10 pt-8">
            <button
              onClick={() => navigate("/dashboard")}
              className="flex items-center gap-2 px-4 py-2 text-homi-olive hover:bg-homi-sage/10 rounded transition-colors duration-200 absolute left-0 top-0"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back
            </button>
            <div className="text-center">
              <p className="text-sm text-homi-olive/70 mb-1">{today}</p>
              <div className="relative max-w-xl mx-auto mb-2">
                <input
                  type="text"
                  name="title"
                  value={entry.title || ''}
                  onChange={handleInputChange}
                  placeholder="Untitled"
                  className="w-full text-3xl font-bold text-homi-olive text-center bg-transparent border-none focus:outline-none focus:ring-0"
                  style={{
                    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                  }}
                />
                <div className="w-16 h-1 bg-homi-yellow/50 mx-auto rounded-full mt-2"></div>
              </div>
            </div>
          </div>

          {/* Journal Content */}
          <div className="bg-white rounded-xl shadow-sm mb-8 overflow-hidden border border-homi-sage/20">
            <div className="p-1">
              <div className="max-w-2xl mx-auto py-8 px-6">
                <textarea
                  name="content"
                  value={entry.content}
                  onChange={handleInputChange}
                  className="w-full min-h-[60vh] p-2 resize-none focus:outline-none text-homi-olive text-lg leading-relaxed font-light tracking-wide"
                  placeholder="Start writing here..."
                  style={{
                    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                    lineHeight: '1.8',
                    fontSize: '1.125rem',
                    color: 'var(--homi-olive)'
                  }}
                />
              </div>
            </div>
            
            {/* Floating Action Buttons */}
            <div className="sticky bottom-0 bg-white/90 backdrop-blur-sm border-t border-homi-sage/20 p-4">
              <div className="max-w-2xl mx-auto flex justify-end space-x-3">
                <button
                  onClick={() => handleSave(false)}
                  className="px-5 py-2 text-homi-olive hover:bg-homi-sage/10 rounded-lg transition-colors duration-200 text-sm font-medium"
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
                  ) : 'Save'}
                </button>
                <button
                  onClick={() => handleSave(true)}
                  className="px-5 py-2 bg-homi-sage text-white hover:bg-homi-olive rounded-lg transition-colors duration-200 text-sm font-medium flex items-center gap-2"
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
                      <SparklesIcon className="h-4 w-4" />
                      Analyze with Homi
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Analysis Section */}
        {analysis && (
          <div className="lg:hidden mt-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-homi-sage/20 p-6">
              <h2 className="text-xl font-bold text-homi-darkolive mb-4">Journal Insights</h2>
              <Report analysis={analysis} />
            </div>
          </div>
        )}
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
