import React from 'react';
import { ShieldCheck, Clock, Globe, Lock } from 'lucide-react';
import { FeatureCardProps } from '../types/types';

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg">
      <div className="p-3 bg-blue-100 rounded-full w-14 h-14 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "Advanced Safety Checks",
      description: "Our proprietary algorithm scans websites for inappropriate content, ensuring kids only access safe pages."
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Instant Results",
      description: "Get immediate feedback about any URL's safety status without waiting for lengthy scans to complete."
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Comprehensive Database",
      description: "Powered by an extensive database of pre-verified websites and continuously updated safety information."
    },
    {
      icon: <Lock className="w-8 h-8 text-blue-600" />,
      title: "Privacy Focused",
      description: "We don't store your browsing history or share your data with any third parties."
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose SafeGuard</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our kid-safe URL checker provides parents and educators with powerful tools to ensure children browse safely.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;