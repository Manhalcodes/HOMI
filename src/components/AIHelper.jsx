import { useState } from 'react';

const AIHelper = () => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    
    setIsLoading(true);
    
    try {
      // In a real app, you would make an API call to your backend here
      // const result = await fetch('/api/ai-helper', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ prompt })
      // });
      // const data = await result.json();
      // setResponse(data.response);
      
      // Mock response for now
      setTimeout(() => {
        setResponse(`I'm your AI helper. You asked: "${prompt}"`);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error:', error);
      setResponse('Sorry, there was an error processing your request.');
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-black/40 backdrop-blur-md rounded-lg shadow p-6 border border-purple-400/30">
      <h2 className="text-xl font-semibold mb-4 text-white">AI Helper</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            className="w-full p-3 border border-purple-400/50 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-400 bg-black/40 text-white placeholder-purple-300/50"
            placeholder="Ask me anything..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            disabled={isLoading}
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 disabled:opacity-50"
        >
          {isLoading ? 'Thinking...' : 'Ask'}
        </button>
      </form>
      
      {response && (
        <div className="mt-6 p-4 bg-black/30 rounded-lg border border-purple-400/30">
          <h3 className="font-medium text-purple-200 mb-2">Response:</h3>
          <p className="text-purple-200">{response}</p>
        </div>
      )}
    </div>
  );
};

export default AIHelper;
