import React from 'react';
import { Search, ShieldAlert, CheckCircle } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Checking if a website is safe for your children is quick and easy with SafeGuard.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center px-6">
            <div className="mb-6 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              <Search className="w-8 h-8 text-blue-600" />
            </div>
            <div className="relative mb-8">
              <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-blue-200 -z-10"></div>
              <span className="inline-block w-8 h-8 rounded-full bg-blue-500 text-white font-semibold flex items-center justify-center">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Enter Website URL</h3>
            <p className="text-gray-600">
              Paste the URL you want to check into our verification form.
            </p>
          </div>
          
          <div className="text-center px-6">
            <div className="mb-6 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              <ShieldAlert className="w-8 h-8 text-blue-600" />
            </div>
            <div className="relative mb-8">
              <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-blue-200 -z-10"></div>
              <span className="inline-block w-8 h-8 rounded-full bg-blue-500 text-white font-semibold flex items-center justify-center">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Quick Analysis</h3>
            <p className="text-gray-600">
              Our system instantly checks the URL against our safety database.
            </p>
          </div>
          
          <div className="text-center px-6">
            <div className="mb-6 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8 text-blue-600" />
            </div>
            <div className="relative mb-8">
              <span className="inline-block w-8 h-8 rounded-full bg-blue-500 text-white font-semibold flex items-center justify-center">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Receive Results</h3>
            <p className="text-gray-600">
              Get immediate feedback about whether the site is safe for children.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;