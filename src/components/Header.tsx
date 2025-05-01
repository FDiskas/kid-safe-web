import React from 'react';
import { Shield } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 bg-white bg-opacity-95 backdrop-blur-sm z-10 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">SafeGuard</span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">How It Works</a></li>
              <li><a href="#checker" className="text-gray-600 hover:text-blue-600 transition-colors">Check URL</a></li>
            </ul>
          </nav>
          <a 
            href="#checker" 
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            Check Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;