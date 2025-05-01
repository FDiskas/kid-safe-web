import React from 'react';
import { SafetyCheckResult } from '../types/types';
import { ShieldCheck, ShieldAlert, AlertCircle } from 'lucide-react';

interface SafetyResultProps {
  result: SafetyCheckResult | null;
  isLoading: boolean;
  error: string | null;
}

const SafetyResult: React.FC<SafetyResultProps> = ({ result, isLoading, error }) => {
  if (isLoading) {
    return (
      <div className="mt-8 p-6 bg-white rounded-lg shadow-md text-center animate-pulse">
        <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">Checking URL Safety...</h3>
        <p className="text-gray-600">This will only take a moment.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-8 p-6 bg-red-50 rounded-lg shadow-md border border-red-100">
        <div className="flex items-center mb-4">
          <AlertCircle className="w-8 h-8 text-red-500 mr-3" />
          <h3 className="text-xl font-semibold text-red-800">Error</h3>
        </div>
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  if (!result) {
    return null;
  }

  // Remember: status=false means safe for kids (according to the requirements)
  const isSafe = result.status === false;

  return (
    <div 
      className={`mt-8 p-6 rounded-lg shadow-md border transition-all duration-500 transform ${
        isSafe 
          ? 'bg-green-50 border-green-100' 
          : 'bg-red-50 border-red-100'
      }`}
    >
      <div className="flex items-center mb-4">
        {isSafe ? (
          <ShieldCheck className="w-10 h-10 text-green-500 mr-3" />
        ) : (
          <ShieldAlert className="w-10 h-10 text-red-500 mr-3" />
        )}
        <h3 className={`text-xl font-semibold ${isSafe ? 'text-green-800' : 'text-red-800'}`}>
          {isSafe ? 'Safe for Kids' : 'Not Safe for Kids'}
        </h3>
      </div>
      
      <div className="mb-4">
        <p className="text-gray-700">
          <span className="font-medium">URL checked:</span>{' '}
          <a 
            href={`https://${result.url}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline break-all"
          >
            {result.url}
          </a>
        </p>
      </div>
      
      <p className={isSafe ? 'text-green-600' : 'text-red-600'}>
        {isSafe 
          ? 'This website appears to be safe for children. Always supervise your children while they browse the internet.' 
          : 'This website may contain content that is not appropriate for children. We recommend blocking access to this site.'}
      </p>
    </div>
  );
};

export default SafetyResult;