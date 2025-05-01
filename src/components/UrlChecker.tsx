import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useSafetyCheck } from '../hooks/useSafetyCheck';
import SafetyResult from './SafetyResult';

const UrlChecker: React.FC = () => {
  const [url, setUrl] = useState<string>('');
  const { result, isLoading, error, checkUrl } = useSafetyCheck();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    checkUrl(url);
  };

  return (
    <section id="checker" className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Check URL Safety</h2>
            <p className="text-lg text-gray-600">
              Enter any website URL below to instantly check if it's safe for children.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Enter website URL (e.g., example.com)"
                  className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className={`px-6 py-4 bg-blue-600 text-white font-medium rounded-lg transition-colors duration-300 ${
                  isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700'
                }`}
              >
                {isLoading ? 'Checking...' : 'Check Now'}
              </button>
            </div>
          </form>
          
          <SafetyResult 
            result={result}
            isLoading={isLoading}
            error={error}
          />
          
          <div className="mt-12 bg-blue-100 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Important Note</h3>
            <p className="text-gray-700">
              While our tool provides a good indication of website safety, it's always recommended to supervise 
              children's internet activities. No filtering system is 100% accurate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrlChecker;